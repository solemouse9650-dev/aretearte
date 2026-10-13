import { initLayout, errorBox } from '../layout.js';
import { getCategories, getProducts } from '../data.js';
import { productCard, skeletonCards } from '../card.js';
import { $, $$, h, imgSrc, productAlt, waLink } from '../dom.js';

const site = await initLayout('inicio');

// Datos destacados (stats)
if (Array.isArray(site.stats)) {
  for (const el of $$('[data-stat]')) {
    const v = site.stats[Number(el.dataset.stat)]?.[el.dataset.k];
    if (typeof v === 'string' && v) el.textContent = v;
  }
}

const catGrid = $('#category-grid');
const featGrid = $('#featured-grid');
catGrid.replaceChildren(...Array.from({ length: 8 }, () => h('div', { class: 'skeleton aspect-[4/5]' })));
featGrid.replaceChildren(...skeletonCards(6));

try {
  const [products, categories] = await Promise.all([getProducts(), getCategories()]);
  const catName = Object.fromEntries(categories.map((c) => [c.id, c.name]));

  // Categorías con conteo real y foto de una pieza de la categoría
  catGrid.replaceChildren(...categories.map((c) => {
    const items = products.filter((p) => p.categoryId === c.id);
    const sample = items.find((p) => p.featured && imgSrc(p.cover)) ?? items.find((p) => imgSrc(p.cover));
    return h('a', {
      href: `/tienda.html?cat=${encodeURIComponent(c.id)}`,
      class: 'group flex flex-col justify-between rounded-xl bg-surface-container-lowest p-space-md shadow-sm transition-all hover:shadow-md',
    }, [
      h('div', { class: 'relative mb-space-sm aspect-square w-full overflow-hidden rounded-lg bg-surface-container' }, [
        sample ? h('img', { src: imgSrc(sample.cover), alt: `${c.name} en vitrofusión: ${productAlt(sample)}`, loading: 'lazy', class: 'h-full w-full object-cover transition-transform duration-500 group-hover:scale-105' }) : null,
        h('span', { class: 'absolute top-2 left-2 rounded bg-surface/90 px-space-xs py-0.5 text-label-tag text-on-surface', text: `${items.length} ${items.length === 1 ? 'obra' : 'obras'}` }),
      ]),
      h('div', {}, [
        h('h3', { class: 'text-headline-sm text-on-surface transition-colors group-hover:text-primary', text: c.name }),
        c.description ? h('p', { class: 'mt-0.5 text-body-sm text-on-surface-variant', text: c.description }) : null,
      ]),
    ]);
  }));

  // Obras destacadas
  let featured = products.filter((p) => p.featured);
  if (!featured.length) featured = products.slice(0, 6);
  featGrid.replaceChildren(...featured.slice(0, 9).map((p) => productCard(p, { site, categoryName: catName[p.categoryId] })));

  // Opciones del formulario de contacto
  const select = $('#form-interest');
  if (select) {
    select.replaceChildren(
      ...categories.map((c) => h('option', { text: c.name })),
      h('option', { text: 'Encargo personalizado a medida', selected: 'selected' }),
    );
  }
} catch {
  catGrid.replaceChildren(errorBox());
  featGrid.replaceChildren(errorBox());
}

// Formulario de contacto → WhatsApp (no se guarda nada)
$('#contact-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const f = new FormData(e.currentTarget);
  const name = String(f.get('name') ?? '').trim().slice(0, 80);
  const phone = String(f.get('phone') ?? '').trim().slice(0, 30);
  const interest = String(f.get('interest') ?? '').trim().slice(0, 80);
  const message = String(f.get('message') ?? '').trim().slice(0, 1000);
  const err = $('#form-error');
  if (!name || !message) {
    err?.classList.remove('hidden');
    return;
  }
  err?.classList.add('hidden');
  const text = `¡Hola Areté! Mi nombre es ${name}${phone ? ` (${phone})` : ''}. Me interesa: ${interest}.\n${message}`;
  window.open(waLink(site, text), '_blank', 'noopener');
});
