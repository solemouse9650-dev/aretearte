// Generación para buscadores (corre después de `vite build`).
//
// Lee el contenido PUBLICADO de Firestore (mismos permisos que cualquier
// visitante) y genera dentro de dist/:
//   - fotos como archivos con nombre descriptivo (/img/obras, /img/sitio)
//   - una página HTML completa por obra (/obra/<id>/) con datos estructurados
//   - contenido pre-renderizado en inicio y tienda (visible sin JavaScript)
//   - sitemap.xml con imágenes y /datos/catalogo.json (catálogo estático)
//
// Si Firestore no responde, la web se publica igual en modo dinámico.
import fs from 'node:fs';
import path from 'node:path';
import { loadEnv } from 'vite';
import { initializeApp } from 'firebase/app';
import {
  collection, doc, getDoc, getDocs, getFirestore, query, where,
} from 'firebase/firestore/lite';

const ORIGIN = 'https://aretearte.com';
const LOGO = '/arete-arte-y-diseno-vitrofusion-logo.png';
const DIST = path.resolve('dist');
const SUFFIX = 'de-arete-en-apostoles-misiones-argentina';

const env = { ...loadEnv('production', process.cwd(), 'VITE_'), ...process.env };

// ---------- utilidades ----------
const esc = (s) => String(s ?? '')
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

const slugify = (s) => String(s ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 90);

const isHttps = (u) => { try { return new URL(u).protocol === 'https:'; } catch { return false; } };

/** Convierte Timestamps de Firestore a milisegundos (recursivo). */
function plain(v) {
  if (v && typeof v.toMillis === 'function') return v.toMillis();
  if (Array.isArray(v)) return v.map(plain);
  if (v && typeof v === 'object') return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, plain(x)]));
  return v;
}

function writeWebp(dataUrl, rel) {
  const m = /^data:image\/webp;base64,([A-Za-z0-9+/=]+)$/.exec(dataUrl ?? '');
  if (!m) return null;
  const file = path.join(DIST, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, Buffer.from(m[1], 'base64'));
  return `/${rel.replace(/\\/g, '/')}`;
}

const jsonLd = (data) => `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`;
const wa = (site, text) => `https://wa.me/${/^\d{8,15}$/.test(site.whatsappNumber ?? '') ? site.whatsappNumber : '5493758567371'}?text=${encodeURIComponent(text)}`;
const AVAILABILITY = { en_taller: 'En taller · entrega inmediata', unica: 'Pieza única irrepetible', pedido: 'A pedido / personalizable' };
const SHORT = { en_taller: 'En Taller', unica: 'Pieza Única', pedido: 'A Pedido' };
const alt = (p, extra = '') => `${p.name}${extra}, pieza de vitrofusión hecha a mano por Areté en Apóstoles, Misiones`;
const productPath = (p) => `/obra/${p.id}/`;

// ---------- edición de HTML ----------
function setInnerById(html, id, inner) {
  const re = new RegExp(`(<([a-z0-9]+)\\b[^>]*\\bid="${id}"[^>]*>)([\\s\\S]*?)(</\\2>)`);
  return html.replace(re, (_, open, tag, _old, close) => `${open}${inner}${close}`);
}
function editOpenTagById(html, id, fn) {
  const re = new RegExp(`<([a-z0-9]+)\\b[^>]*\\bid="${id}"[^>]*>`);
  return html.replace(re, (tag) => fn(tag));
}
function applySiteTexts(html, site) {
  return html.replace(/(<([a-z0-9]+)\b[^>]*\bdata-s="([A-Za-z]+)"[^>]*>)([^<]*)(<\/\2>)/g, (all, open, _t, key, _old, close) => {
    const v = site[key];
    return typeof v === 'string' && v.trim() ? `${open}${esc(v)}${close}` : all;
  });
}
function setHead(html, { title, description, canonical, ogImage, ogType, extra = '' }) {
  let out = html;
  if (title) out = out.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`);
  if (description) {
    out = out.replace(/<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${esc(description)}" />`);
  }
  if (title) out = out.replace(/<meta property="og:title" content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${esc(title)}" />`);
  if (ogImage) out = out.replace(/<meta property="og:image" content="[^"]*"\s*\/?>/, `<meta property="og:image" content="${esc(ogImage)}" />`);
  if (ogType) out = out.replace(/<meta property="og:type" content="[^"]*"\s*\/?>/, `<meta property="og:type" content="${ogType}" />`);
  const tags = [];
  if (description && !/property="og:description"/.test(out)) tags.push(`<meta property="og:description" content="${esc(description)}" />`);
  if (canonical) {
    out = out.replace(/<link rel="canonical"[^>]*>\s*/g, '').replace(/<meta property="og:url"[^>]*>\s*/g, '');
    tags.push(`<link rel="canonical" href="${esc(canonical)}" />`, `<meta property="og:url" content="${esc(canonical)}" />`);
  }
  return out.replace('</head>', `    ${tags.join('\n    ')}${extra}\n  </head>`);
}

// ---------- piezas de HTML pre-renderizado ----------
function cardHtml(p, site, catName) {
  const url = productPath(p);
  const badge = (Array.isArray(p.badges) && p.badges[0]) || SHORT[p.availability] || 'Hecho a mano';
  const msg = `Hola ${site.artistName || 'Ivana'}, me interesa consultar por la obra: ${p.name} — ${ORIGIN}${url}`;
  return `<article class="product-card group flex flex-col overflow-hidden rounded-2xl bg-surface-container-low transition-all duration-300 hover:shadow-lg" data-id="${esc(p.id)}">`
    + `<a href="${url}" class="relative block aspect-square w-full overflow-hidden bg-surface-container-highest" aria-label="${esc(p.name)}">`
    + (p.cover ? `<img src="${p.cover}" alt="${esc(alt(p))}" loading="lazy" decoding="async" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105">` : '')
    + `<span class="absolute top-3 left-3 rounded-md bg-surface-container-lowest/90 px-space-sm py-1 text-label-tag tracking-wider text-on-surface uppercase backdrop-blur-md">${esc(badge)}</span></a>`
    + `<div class="flex flex-grow flex-col justify-between gap-space-md p-space-lg"><div class="flex flex-col gap-space-xs">`
    + `<div class="flex items-center justify-between gap-2 text-label-md text-on-surface-variant"><span class="truncate">${esc(catName)}</span>${p.dimensions ? `<span class="shrink-0">${esc(p.dimensions)}</span>` : ''}</div>`
    + `<h3 class="text-headline-sm text-on-surface transition-colors group-hover:text-primary"><a href="${url}">${esc(p.name)}</a></h3>`
    + (p.shortDescription ? `<p class="line-clamp-2 text-body-sm text-on-surface-variant">${esc(p.shortDescription)}</p>` : '')
    + `</div><div class="flex flex-col gap-space-sm pt-space-xs"><span class="text-label-md text-tertiary">${esc(AVAILABILITY[p.availability] ?? 'Consultar disponibilidad')}</span>`
    + `<a href="${esc(wa(site, msg))}" target="_blank" rel="noopener noreferrer" class="inline-flex flex-1 items-center justify-center gap-space-xs rounded-lg bg-primary px-space-md py-space-sm text-label-md text-on-primary transition-colors hover:bg-primary-container">Consultar Obra</a>`
    + `</div></div></article>`;
}

function categoryHtml(c, items) {
  const sample = items.find((p) => p.featured && p.cover) ?? items.find((p) => p.cover);
  return `<a href="/tienda.html?cat=${esc(c.id)}" class="group flex flex-col justify-between rounded-xl bg-surface-container-lowest p-space-md shadow-sm transition-all hover:shadow-md">`
    + `<div class="relative mb-space-sm aspect-square w-full overflow-hidden rounded-lg bg-surface-container">`
    + (sample ? `<img src="${sample.cover}" alt="${esc(`${c.name} en vitrofusión: ${alt(sample)}`)}" loading="lazy" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105">` : '')
    + `<span class="absolute top-2 left-2 rounded bg-surface/90 px-space-xs py-0.5 text-label-tag text-on-surface">${items.length} ${items.length === 1 ? 'obra' : 'obras'}</span></div>`
    + `<div><h3 class="text-headline-sm text-on-surface transition-colors group-hover:text-primary">${esc(c.name)}</h3>`
    + (c.description ? `<p class="mt-0.5 text-body-sm text-on-surface-variant">${esc(c.description)}</p>` : '')
    + `</div></a>`;
}

function faqsHtml(faqs) {
  return faqs.map((f, i) => `<div class="faq-item overflow-hidden rounded-xl bg-surface-container-low transition-all duration-300">`
    + `<button type="button" class="flex w-full items-center justify-between gap-space-md px-space-lg py-space-md text-left" aria-expanded="false" aria-controls="faq-${i}">`
    + `<span class="flex items-center gap-space-sm font-display text-[18px] text-on-surface">${esc(f.question)}</span></button>`
    + `<div id="faq-${i}" class="faq-content" role="region"><div class="overflow-hidden"><p class="px-space-lg pb-space-md text-body-md whitespace-pre-line text-on-surface-variant">${esc(f.answer)}</p></div></div></div>`).join('');
}

// ---------- principal ----------
async function main() {
  const projectId = env.VITE_FIREBASE_PROJECT_ID;
  if (!projectId || !env.VITE_FIREBASE_API_KEY) throw new Error('Faltan las variables VITE_FIREBASE_*');
  const app = initializeApp({
    apiKey: env.VITE_FIREBASE_API_KEY, authDomain: env.VITE_FIREBASE_AUTH_DOMAIN, projectId, appId: env.VITE_FIREBASE_APP_ID,
  });
  const db = getFirestore(app);
  const rows = (snap) => snap.docs.map((d) => ({ id: d.id, ...plain(d.data()) }));
  const byOrder = (a, b) => (a.order ?? 0) - (b.order ?? 0);

  const site = plain((await getDoc(doc(db, 'settings', 'site'))).data() ?? {});
  const [categories, products, faqs, media] = await Promise.all([
    getDocs(query(collection(db, 'categories'), where('published', '==', true))).then(rows),
    getDocs(query(collection(db, 'products'), where('published', '==', true))).then(rows),
    getDocs(query(collection(db, 'faqs'), where('published', '==', true))).then(rows),
    getDocs(collection(db, 'media')).then(rows),
  ]);
  categories.sort(byOrder);
  products.sort(byOrder);
  faqs.sort(byOrder);
  const version = String(site.catalogVersion ?? Date.now());
  const catName = Object.fromEntries(categories.map((c) => [c.id, c.name]));
  console.log(`SEO: ${products.length} obras, ${categories.length} categorías, ${faqs.length} preguntas`);

  // Fotos de obras con nombre descriptivo
  for (const p of products) {
    if (!/^[a-z0-9-]{1,140}$/.test(p.id)) continue;
    const base = `${p.id}-${SUFFIX}`;
    const imgs = rows(await getDocs(collection(db, 'products', p.id, 'images'))).sort(byOrder);
    p.images = imgs.map((im, i) => {
      const src = writeWebp(im.data, `img/obras/${base}${i ? `-${i + 1}` : ''}.webp`);
      return src ? { data: src, width: im.width || undefined, height: im.height || undefined } : null;
    }).filter(Boolean);
    p.cover = writeWebp(p.cover, `img/obras/${base}-miniatura.webp`) ?? p.images[0]?.data ?? null;
  }

  // Fotos del sitio
  const mediaOut = {};
  const used = new Set();
  for (const m of media) {
    let name = `${slugify(m.alt || m.id)}-${SUFFIX}`;
    if (used.has(name)) name += `-${m.id}`;
    used.add(name);
    const src = writeWebp(m.data, `img/sitio/${name}.webp`);
    if (src) mediaOut[m.id] = { data: src, alt: m.alt ?? '' };
  }

  // Catálogo estático para el JavaScript de la web
  const catalog = {
    v: version,
    products: products.map(({ images, ...p }) => ({ ...p, images })),
    categories, faqs, media: mediaOut,
  };
  fs.mkdirSync(path.join(DIST, 'datos'), { recursive: true });
  fs.writeFileSync(path.join(DIST, 'datos', 'catalogo.json'), JSON.stringify(catalog));

  const heroUrl = mediaOut.hero ? `${ORIGIN}${mediaOut.hero.data}` : `${ORIGIN}${LOGO}`;
  const versionMeta = `\n    <meta name="arete-catalogo" content="${esc(version)}" />`;
  const sameAs = [site.instagramUrl, site.facebookUrl].filter(isHttps);
  const business = {
    '@type': 'Store',
    '@id': `${ORIGIN}/#negocio`,
    name: 'Areté Arte y Diseño',
    alternateName: ['Areté', 'Arete', 'Arete Arte', 'Areté Vitrofusión', 'Arete Vitrofusión', 'Areté Galería de Arte'],
    description: 'Taller y galería de vitrofusión en Apóstoles, Misiones: piezas de arte en vidrio hechas a mano.',
    url: `${ORIGIN}/`,
    logo: `${ORIGIN}${LOGO}`,
    image: [heroUrl, `${ORIGIN}${LOGO}`],
    ...(site.whatsappNumber ? { telephone: `+${site.whatsappNumber}` } : {}),
    ...(site.email ? { email: site.email } : {}),
    address: { '@type': 'PostalAddress', addressLocality: 'Apóstoles', addressRegion: 'Misiones', addressCountry: 'AR' },
    areaServed: { '@type': 'Country', name: 'Argentina' },
    knowsAbout: ['Vitrofusión', 'Arte en vidrio', 'Vidrio fusionado', 'Diseño artesanal'],
    ...(sameAs.length ? { sameAs } : {}),
  };

  // ----- Inicio -----
  {
    const f = path.join(DIST, 'index.html');
    let html = fs.readFileSync(f, 'utf8');
    html = applySiteTexts(html, site);
    let featured = products.filter((p) => p.featured);
    if (!featured.length) featured = products.slice(0, 6);
    html = html.replace('<!--ssr:featured-->', featured.slice(0, 9).map((p) => cardHtml(p, site, catName[p.categoryId])).join(''));
    html = html.replace('<!--ssr:categories-->', categories.map((c) => categoryHtml(c, products.filter((p) => p.categoryId === c.id))).join(''));
    html = html.replace(/<img data-media="([a-z0-9-]+)"([^>]*)>/g, (all, slot, rest) => {
      const m = mediaOut[slot];
      if (!m) return all;
      const attrs = rest.replace(/\sopacity-0/, '').replace(/\salt="[^"]*"/, '');
      return `<img data-media="${slot}" src="${m.data}" alt="${esc(m.alt || 'Vitrofusión de Areté en Apóstoles, Misiones')}"${attrs}>`;
    });
    html = setHead(html, {
      canonical: `${ORIGIN}/`,
      ogImage: heroUrl,
      extra: versionMeta + '\n    ' + jsonLd({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebSite', '@id': `${ORIGIN}/#sitio`, url: `${ORIGIN}/`, name: 'Areté Arte y Diseño',
            alternateName: ['Areté', 'Arete', 'Areté Vitrofusión'], inLanguage: 'es-AR', publisher: { '@id': `${ORIGIN}/#negocio` },
          },
          business,
        ],
      }) + (mediaOut.hero ? `\n    <link rel="preload" as="image" href="${mediaOut.hero.data}" fetchpriority="high" />` : ''),
    });
    fs.writeFileSync(f, html);
  }

  // ----- Tienda -----
  {
    const f = path.join(DIST, 'tienda.html');
    let html = fs.readFileSync(f, 'utf8');
    html = applySiteTexts(html, site);
    html = html.replace('<!--ssr:products-->', products.map((p) => cardHtml(p, site, catName[p.categoryId])).join(''));
    html = html.replace('<!--ssr:faqs-->', faqsHtml(faqs.filter((x) => x.scope !== 'producto')));
    html = html.replace('>Cargando obras…<', `>Mostrando ${products.length} obras de autor<`);
    html = setHead(html, {
      canonical: `${ORIGIN}/tienda.html`,
      ogImage: heroUrl,
      extra: versionMeta + '\n    ' + jsonLd({
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Tienda de vitrofusión artesanal · Areté',
        url: `${ORIGIN}/tienda.html`,
        isPartOf: { '@id': `${ORIGIN}/#sitio` },
        about: { '@id': `${ORIGIN}/#negocio` },
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: products.length,
          itemListElement: products.map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: `${ORIGIN}${productPath(p)}`, name: p.name })),
        },
      }),
    });
    fs.writeFileSync(f, html);
  }

  // ----- Página de cada obra -----
  const template = applySiteTexts(fs.readFileSync(path.join(DIST, 'producto.html'), 'utf8'), site);
  const productFaqs = faqs.filter((x) => x.scope === 'producto');
  const techLabel = Object.fromEntries((site.techniqueOptions ?? []).map((o) => [o.id, o.label]));
  for (const p of products) {
    if (!/^[a-z0-9-]{1,140}$/.test(p.id)) continue;
    const url = `${ORIGIN}${productPath(p)}`;
    const cat = categories.find((c) => c.id === p.categoryId);
    const imgs = p.images.length ? p.images : (p.cover ? [{ data: p.cover }] : []);
    const absImgs = imgs.map((im) => `${ORIGIN}${im.data}`);
    const desc = `${(p.shortDescription || p.name).replace(/\.?\s*$/, '.')} Pieza de vitrofusión hecha a mano por Areté en Apóstoles, Misiones.`.slice(0, 160);
    let html = template;

    html = setInnerById(html, 'bc-name', esc(p.name));
    if (cat) {
      html = setInnerById(html, 'bc-cat', esc(cat.name));
      html = editOpenTagById(html, 'bc-cat', (t) => t.replace('href="/tienda.html"', `href="/tienda.html?cat=${esc(cat.id)}"`));
    }
    html = setInnerById(html, 'ref', `Ref. ${esc(p.id.toUpperCase().slice(0, 40))}`);
    html = editOpenTagById(html, 'ref', (t) => t.replace('class="hidden ', 'class="'));
    html = setInnerById(html, 'name', esc(p.name));
    html = setInnerById(html, 'short', esc(p.shortDescription ?? ''));
    html = setInnerById(html, 'custom-name', esc(p.name));
    if (p.longDescription) {
      html = setInnerById(html, 'memory', esc(p.longDescription));
      html = editOpenTagById(html, 'memory-box', (t) => t.replace('hidden flex-col', 'flex flex-col'));
    }
    if (imgs[0]) {
      const im = imgs[0];
      html = editOpenTagById(html, 'main-image', () => `<img id="main-image" src="${im.data}" alt="${esc(alt(p))}"${im.width ? ` width="${im.width}" height="${im.height}"` : ''} fetchpriority="high" class="h-full w-full object-contain transition-opacity duration-300" />`);
    }
    if (imgs.length > 1) {
      html = setInnerById(html, 'thumbs', imgs.map((im, i) => `<button type="button" aria-label="Ver foto ${i + 1}" class="group relative aspect-square overflow-hidden rounded-lg bg-surface-container-low opacity-70 transition-all hover:opacity-100"><img src="${im.data}" alt="${esc(alt(p, ` (foto ${i + 1})`))}" loading="lazy" class="h-full w-full object-cover"></button>`).join(''));
    }
    const badge = (text, cls) => `<span class="rounded px-2.5 py-1 text-label-tag tracking-widest uppercase ${cls}">${esc(text)}</span>`;
    html = setInnerById(html, 'badges', [
      badge(AVAILABILITY[p.availability] ?? 'Consultar disponibilidad', 'bg-tertiary-fixed text-on-tertiary-fixed'),
      badge('100% Hecho a Mano', 'bg-secondary-container text-on-secondary-container'),
      ...(p.techniques ?? []).slice(0, 2).map((t) => techLabel[t]).filter(Boolean).map((t) => badge(t, 'bg-primary-fixed text-on-primary-fixed-variant')),
    ].join(''));
    const specs = [
      ...(p.dimensions ? [['Dimensiones', p.dimensions]] : []),
      ...(cat ? [['Categoría', cat.name]] : []),
      ...(p.specs ?? []).map((s) => [s.label, s.value]),
      ...(site.careText ? [['Cuidados', site.careText]] : []),
    ];
    html = setInnerById(html, 'specs', specs.map(([l, v]) => `<div class="flex items-start justify-between gap-space-md py-1"><dt class="shrink-0 text-label-md tracking-wider text-on-surface-variant uppercase">${esc(l)}</dt><dd class="text-right font-semibold text-on-surface">${esc(v)}</dd></div>`).join(''));
    html = editOpenTagById(html, 'wa-product', (t) => t.replace(/href="[^"]*"/, `href="${esc(wa(site, `Hola ${site.artistName || 'Ivana'}, me interesa la obra "${p.name}". ¿Está disponible? ${url}`))}"`));

    const others = products.filter((x) => x.id !== p.id);
    const related = [...others.filter((x) => x.categoryId === p.categoryId), ...others.filter((x) => x.featured && x.categoryId !== p.categoryId)].slice(0, 3);
    if (related.length) {
      html = setInnerById(html, 'related', related.map((x) => cardHtml(x, site, catName[x.categoryId])).join(''));
      html = editOpenTagById(html, 'related-section', (t) => t.replace('class="hidden ', 'class="'));
    }
    if (productFaqs.length) {
      html = setInnerById(html, 'pfaq', faqsHtml(productFaqs));
      html = editOpenTagById(html, 'pfaq-section', (t) => t.replace('mb-space-md hidden ', 'mb-space-md '));
    }

    const productLd = {
      '@type': 'Product',
      '@id': `${url}#obra`,
      name: p.name,
      description: p.longDescription || p.shortDescription || p.name,
      image: absImgs,
      sku: p.id,
      url,
      brand: { '@type': 'Brand', name: 'Areté' },
      manufacturer: { '@id': `${ORIGIN}/#negocio` },
      material: 'Vidrio fusionado (vitrofusión)',
      ...(cat ? { category: cat.name } : {}),
      ...(p.showPrice && typeof p.price === 'number' ? {
        offers: {
          '@type': 'Offer', price: p.price, priceCurrency: 'ARS', url,
          availability: p.availability === 'pedido' ? 'https://schema.org/PreOrder' : 'https://schema.org/InStock',
          seller: { '@id': `${ORIGIN}/#negocio` },
        },
      } : {}),
    };
    const crumbs = {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${ORIGIN}/` },
        { '@type': 'ListItem', position: 2, name: 'Colección & Tienda', item: `${ORIGIN}/tienda.html` },
        ...(cat ? [{ '@type': 'ListItem', position: 3, name: cat.name, item: `${ORIGIN}/tienda.html?cat=${cat.id}` }] : []),
        { '@type': 'ListItem', position: cat ? 4 : 3, name: p.name, item: url },
      ],
    };
    html = setHead(html, {
      title: `${p.name} · Vitrofusión artesanal | Areté`,
      description: desc,
      canonical: url,
      ogImage: absImgs[0],
      ogType: 'product',
      extra: versionMeta + '\n    ' + jsonLd({ '@context': 'https://schema.org', '@graph': [productLd, crumbs, business] }),
    });
    const out = path.join(DIST, 'obra', p.id, 'index.html');
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, html);
  }

  // producto.html (enlaces viejos ?id=) y 404: solo la versión del catálogo
  for (const name of ['producto.html', '404.html']) {
    const f = path.join(DIST, name);
    let html = applySiteTexts(fs.readFileSync(f, 'utf8'), site);
    html = html.replace('</head>', `${versionMeta}\n  </head>`);
    if (name === 'producto.html') html = html.replace('</head>', '    <meta name="robots" content="noindex, follow" />\n  </head>');
    fs.writeFileSync(f, html);
  }

  // ----- Sitemap con imágenes -----
  const day = (ms) => new Date(ms || Date.now()).toISOString().slice(0, 10);
  const urlEntry = (loc, lastmod, images = []) => `  <url>\n    <loc>${esc(loc)}</loc>\n    <lastmod>${lastmod}</lastmod>\n${images.map((i) => `    <image:image><image:loc>${esc(i)}</image:loc></image:image>\n`).join('')}  </url>`;
  const latest = Math.max(...products.map((p) => p.updatedAt || 0), site.updatedAt || 0);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${[
    urlEntry(`${ORIGIN}/`, day(latest), Object.values(mediaOut).map((m) => `${ORIGIN}${m.data}`)),
    urlEntry(`${ORIGIN}/tienda.html`, day(latest)),
    ...products.map((p) => urlEntry(`${ORIGIN}${productPath(p)}`, day(p.updatedAt), (p.images.length ? p.images : [{ data: p.cover }]).filter((i) => i.data).map((i) => `${ORIGIN}${i.data}`))),
  ].join('\n')}
</urlset>
`;
  fs.writeFileSync(path.join(DIST, 'sitemap.xml'), sitemap);
  console.log(`SEO: ${products.length} páginas de obras, ${fs.readdirSync(path.join(DIST, 'img', 'obras')).length} fotos de obras, sitemap listo.`);
}

main().then(() => process.exit(0)).catch((e) => {
  console.warn(`\n⚠ SEO: no se pudo generar la versión estática (${e.message}). La web se publica en modo dinámico.\n`);
  process.exit(0);
});
