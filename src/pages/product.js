import { initLayout } from '../layout.js';
import {
  getCategories, getFaqs, getProduct, getProductImages, getProducts,
} from '../data.js';
import { productCard } from '../card.js';
import { addToCart } from '../cart.js';
import { renderFaqs } from '../faq.js';
import { lockScroll } from '../smooth.js';
import {
  $, AVAILABILITY, formatPrice, h, icon, imgSrc, productAlt, productUrl, waLink,
} from '../dom.js';

const site = await initLayout('tienda');
// /obra/<id>/ (página generada) o /producto.html?id=<id>
const id = /^\/obra\/([a-z0-9-]+)\/?$/.exec(location.pathname)?.[1]
  ?? new URLSearchParams(location.search).get('id') ?? '';

function notFound() {
  $('#product-view').classList.add('hidden');
  $('#not-found').classList.remove('hidden');
  $('#bc-name').textContent = 'Obra no encontrada';
  document.title = 'Obra no encontrada · Areté';
}

let product = null;
if (/^[a-z0-9-]{1,140}$/.test(id)) {
  product = await getProduct(id).catch(() => null);
}

if (!product) {
  notFound();
} else {
  const p = product;
  const url = `${location.origin}${productUrl(p)}`;
  const categories = await getCategories().catch(() => []);
  const cat = categories.find((c) => c.id === p.categoryId);

  // SEO básico
  document.title = `${p.name} · Vitrofusión artesanal | Areté`;
  document.querySelector('meta[name="description"]')?.setAttribute('content', (p.shortDescription || p.name).slice(0, 160));
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', p.name);
  if (!document.querySelector('link[rel="canonical"]')) {
    document.head.append(h('link', { rel: 'canonical', href: `https://aretearte.com/obra/${encodeURIComponent(p.id)}/` }));
  }

  // Migas, título y textos
  $('#bc-name').textContent = p.name;
  if (cat) {
    $('#bc-cat').textContent = cat.name;
    $('#bc-cat').href = `/tienda.html?cat=${encodeURIComponent(cat.id)}`;
  }
  $('#ref').textContent = `Ref. ${p.id.toUpperCase().slice(0, 40)}`;
  $('#ref').classList.remove('hidden');
  $('#name').textContent = p.name;
  $('#short').textContent = p.shortDescription ?? '';
  $('#custom-name').textContent = p.name;
  if (p.longDescription) {
    $('#memory').textContent = p.longDescription;
    $('#memory-box').classList.replace('hidden', 'flex');
  }
  if (p.showPrice && typeof p.price === 'number') {
    $('#price').textContent = formatPrice(p.price);
    $('#price').classList.remove('hidden');
  }

  // Insignias
  const badge = (text, cls) => h('span', { class: `rounded px-2.5 py-1 text-label-tag tracking-widest uppercase ${cls}`, text });
  const techLabel = Object.fromEntries((site.techniqueOptions ?? []).map((o) => [o.id, o.label]));
  $('#badges').replaceChildren(
    badge(AVAILABILITY[p.availability] ?? 'Consultar disponibilidad', 'bg-tertiary-fixed text-on-tertiary-fixed'),
    badge('100% Hecho a Mano', 'bg-secondary-container text-on-secondary-container'),
    ...(p.techniques ?? []).slice(0, 2).map((t) => techLabel[t]).filter(Boolean).map((t) => badge(t, 'bg-primary-fixed text-on-primary-fixed-variant')),
  );
  $('#stage-badges').replaceChildren(
    ...((p.badges ?? []).length ? p.badges.slice(0, 2) : ['Obra de Autor']).map((b) =>
      h('span', { class: 'rounded-full bg-surface/90 px-3 py-1 text-label-tag tracking-wider text-primary uppercase shadow-sm backdrop-blur-md', text: b })),
  );

  // WhatsApp y bolsa
  $('#wa-product').href = waLink(site, `Hola ${site.artistName || 'Ivana'}, me interesa la obra "${p.name}". ¿Está disponible? ${url}`);
  $('#add-bag').addEventListener('click', () => addToCart(p));

  // Ficha técnica
  const rows = [
    ...(p.dimensions ? [{ label: 'Dimensiones', value: p.dimensions, icon: 'straighten' }] : []),
    ...(cat ? [{ label: 'Categoría', value: cat.name, icon: 'category' }] : []),
    ...(p.specs ?? []).map((s) => ({ ...s, icon: 'layers' })),
    ...(site.careText ? [{ label: 'Cuidados', value: site.careText, icon: 'sanitizer' }] : []),
  ];
  $('#specs').replaceChildren(...rows.map((r) => h('div', { class: 'flex items-start justify-between gap-space-md py-1' }, [
    h('dt', { class: 'flex shrink-0 items-center gap-1.5 text-label-md tracking-wider text-on-surface-variant uppercase' }, [icon(r.icon, 'text-[16px] text-primary'), r.label]),
    h('dd', { class: 'text-right font-semibold text-on-surface', text: r.value }),
  ])));

  // Galería
  const main = $('#main-image');
  let images = [];
  let current = 0;
  const show = (i) => {
    current = (i + images.length) % images.length;
    const src = imgSrc(images[current]?.data);
    if (!src) return;
    if (main.getAttribute('src') !== src) main.style.opacity = '0.4';
    main.src = src;
    main.alt = productAlt(p, current ? ` (foto ${current + 1})` : '');
    if (main.complete) main.style.opacity = '1';
    main.onload = () => { main.style.opacity = '1'; main.classList.remove('skeleton'); };
    [...$('#thumbs').children].forEach((t, j) => {
      t.classList.toggle('ring-2', j === current);
      t.classList.toggle('ring-primary', j === current);
      t.classList.toggle('opacity-70', j !== current);
      t.setAttribute('aria-current', String(j === current));
    });
    if (!$('#zoom-modal').classList.contains('hidden')) $('#zoom-img').src = src;
  };

  // Mientras cargan las fotos grandes, se muestra la portada.
  if (imgSrc(p.cover) && !main.getAttribute('src')) {
    main.src = imgSrc(p.cover);
    main.alt = productAlt(p);
    main.classList.remove('skeleton');
  }
  try {
    images = (await getProductImages(p.id)).filter((im) => imgSrc(im.data));
  } catch {
    images = [];
  }
  if (!images.length && imgSrc(p.cover)) images = [{ data: p.cover }];
  if (images.length > 1) {
    $('#thumbs').replaceChildren(...images.map((im, i) => h('button', {
      type: 'button', 'aria-label': `Ver foto ${i + 1}`,
      class: 'group relative aspect-square overflow-hidden rounded-lg bg-surface-container-low opacity-70 transition-all hover:opacity-100',
      onclick: () => show(i),
    }, [h('img', { src: imgSrc(im.data), alt: productAlt(p, ` (foto ${i + 1})`), class: 'h-full w-full object-cover', loading: 'lazy' })])));
  }
  if (images.length) show(0);

  // Visor ampliado
  const modal = $('#zoom-modal');
  const openZoom = () => {
    if (!images.length) return;
    $('#zoom-img').src = imgSrc(images[current].data);
    $('#zoom-img').alt = main.alt;
    modal.classList.replace('hidden', 'flex');
    lockScroll(true);
    $('#zoom-prev').classList.toggle('hidden', images.length < 2);
    $('#zoom-next').classList.toggle('hidden', images.length < 2);
    $('#zoom-close').focus();
  };
  const closeZoom = () => {
    modal.classList.replace('flex', 'hidden');
    lockScroll(false);
  };
  $('#zoom-open').addEventListener('click', openZoom);
  main.addEventListener('click', openZoom);
  $('#zoom-close').addEventListener('click', closeZoom);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeZoom(); });
  $('#zoom-prev').addEventListener('click', () => show(current - 1));
  $('#zoom-next').addEventListener('click', () => show(current + 1));
  document.addEventListener('keydown', (e) => {
    if (modal.classList.contains('hidden')) return;
    if (e.key === 'Escape') closeZoom();
    if (e.key === 'ArrowLeft') show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });

  // Encargo a medida
  $('#custom-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get('name') ?? '').trim().slice(0, 80);
    const notes = String(f.get('notes') ?? '').trim().slice(0, 800);
    $('#custom-error').classList.toggle('hidden', Boolean(name && notes));
    if (!name || !notes) return;
    const text = `Hola ${site.artistName || 'Ivana'}, mi nombre es ${name}. Quisiera una variante de "${p.name}": ${notes}\n${url}`;
    window.open(waLink(site, text), '_blank', 'noopener');
  });

  // Obras afines (misma categoría primero)
  getProducts().then((all) => {
    const others = all.filter((x) => x.id !== p.id);
    const same = others.filter((x) => x.categoryId === p.categoryId);
    const pick = [...same, ...others.filter((x) => x.featured && x.categoryId !== p.categoryId)].slice(0, 3);
    if (!pick.length) return;
    const catName = Object.fromEntries(categories.map((c) => [c.id, c.name]));
    $('#related').replaceChildren(...pick.map((x) => productCard(x, { site, categoryName: catName[x.categoryId], compact: true })));
    $('#related-section').classList.remove('hidden');
  }).catch(() => {});

  // Preguntas frecuentes de producto
  getFaqs().then((faqs) => {
    const list = faqs.filter((f) => f.scope === 'producto');
    if (!list.length) return;
    renderFaqs($('#pfaq'), list, { withIcons: true });
    $('#pfaq-section').classList.remove('hidden');
  }).catch(() => {});
}
