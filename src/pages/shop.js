import { initLayout, errorBox } from '../layout.js';
import { getCategories, getFaqs, getProducts } from '../data.js';
import { productCard, skeletonCards } from '../card.js';
import { renderFaqs } from '../faq.js';
import { $, AVAILABILITY, h } from '../dom.js';

const PAGE = 24;
const site = await initLayout('tienda');

const grid = $('#product-grid');
const countEl = $('#results-count');
const pills = $('#cat-pills');
const search = $('#search');
const moreBtn = $('#load-more');
grid.replaceChildren(...skeletonCards(6));

const params = new URLSearchParams(location.search);
const state = {
  cat: /^[a-z0-9-]{1,80}$/.test(params.get('cat') ?? '') ? params.get('cat') : '',
  q: (params.get('q') ?? '').slice(0, 80),
  tecnica: new Set(),
  color: new Set(),
  disp: new Set(),
  shown: PAGE,
};
search.value = state.q;

const norm = (s) => String(s ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

let products = [];
let categories = [];
let catName = {};
const techLabel = Object.fromEntries((site.techniqueOptions ?? []).map((o) => [o.id, o.label]));
const colorLabel = Object.fromEntries((site.colorOptions ?? []).map((o) => [o.id, o.label]));
const colorHex = Object.fromEntries((site.colorOptions ?? []).map((o) => [o.id, /^#[0-9a-f]{6}$/i.test(o.hex ?? '') ? o.hex : null]));

function syncUrl() {
  const p = new URLSearchParams();
  if (state.cat) p.set('cat', state.cat);
  if (state.q) p.set('q', state.q);
  const qs = p.toString();
  history.replaceState(null, '', `${location.pathname}${qs ? `?${qs}` : ''}${location.hash}`);
}

function matches(p) {
  if (state.cat && p.categoryId !== state.cat) return false;
  if (state.tecnica.size && !(p.techniques ?? []).some((t) => state.tecnica.has(t))) return false;
  if (state.color.size && !(p.colors ?? []).some((c) => state.color.has(c))) return false;
  if (state.disp.size && !state.disp.has(p.availability)) return false;
  if (state.q) {
    const hay = norm([
      p.name, p.shortDescription, catName[p.categoryId], p.dimensions,
      ...(p.techniques ?? []).map((t) => techLabel[t]), ...(p.colors ?? []).map((c) => colorLabel[c]),
    ].join(' '));
    if (!norm(state.q).split(/\s+/).every((w) => hay.includes(w))) return false;
  }
  return true;
}

function renderPills() {
  const all = [{ id: '', name: 'Todos los Trabajos', n: products.length },
    ...categories.map((c) => ({ id: c.id, name: c.name, n: products.filter((p) => p.categoryId === c.id).length }))
      .filter((c) => c.n > 0)];
  pills.replaceChildren(...all.map((c) => {
    const active = state.cat === c.id;
    return h('button', {
      type: 'button', role: 'tab', 'aria-selected': String(active),
      class: `shrink-0 rounded-full px-space-md py-2 text-label-md transition-colors ${active ? 'bg-on-surface text-surface' : 'bg-surface-container-high text-on-surface-variant hover:text-on-surface'}`,
      onclick: () => { state.cat = c.id; state.shown = PAGE; syncUrl(); renderPills(); render(); },
    }, [`${c.name} `, h('span', { class: 'opacity-60', text: `(${c.n})` })]);
  }));
}

function checkbox(group, id, label, swatch) {
  return h('label', { class: 'flex cursor-pointer items-center gap-space-xs select-none' }, [
    h('input', {
      type: 'checkbox', class: 'h-4 w-4 rounded accent-primary', value: id,
      onchange: (e) => { if (e.target.checked) state[group].add(id); else state[group].delete(id); state.shown = PAGE; render(); },
    }),
    swatch ? h('span', { class: 'inline-block h-3.5 w-3.5 rounded-full shadow-inner', style: `background:${swatch}` }) : null,
    h('span', { class: 'text-body-sm text-on-surface', text: label }),
  ]);
}

function renderFilters() {
  const used = (key) => new Set(products.flatMap((p) => p[key] ?? []));
  const tech = used('techniques');
  const cols = used('colors');
  const disp = new Set(products.map((p) => p.availability));
  const fill = (sel, items) => {
    const box = $(sel);
    box.querySelectorAll('label').forEach((l) => l.remove());
    box.append(...items);
    box.classList.toggle('hidden', items.length === 0);
    box.classList.toggle('flex', items.length > 0);
  };
  fill('#f-tecnica', (site.techniqueOptions ?? []).filter((o) => tech.has(o.id)).map((o) => checkbox('tecnica', o.id, o.label)));
  fill('#f-color', (site.colorOptions ?? []).filter((o) => cols.has(o.id)).map((o) => checkbox('color', o.id, o.label, colorHex[o.id])));
  fill('#f-disp', Object.entries(AVAILABILITY).filter(([k]) => disp.has(k)).map(([k, v]) => checkbox('disp', k, v)));
}

function render() {
  const list = products.filter(matches);
  countEl.textContent = list.length === 1 ? 'Mostrando 1 obra de autor' : `Mostrando ${list.length} obras de autor`;
  if (!list.length) {
    grid.replaceChildren(h('div', { class: 'col-span-full rounded-xl bg-surface-container-low p-space-xl text-center text-on-surface-variant' }, [
      h('p', { text: 'No encontramos obras con esos filtros.' }),
      h('button', { type: 'button', class: 'mt-space-sm text-label-lg text-primary hover:underline', text: 'Ver todas las obras', onclick: reset }),
    ]));
  } else {
    grid.replaceChildren(...list.slice(0, state.shown).map((p) => productCard(p, { site, categoryName: catName[p.categoryId] })));
  }
  const more = list.length > state.shown;
  moreBtn.classList.toggle('hidden', !more);
  moreBtn.classList.toggle('inline-flex', more);
}

function reset() {
  state.cat = '';
  state.q = '';
  search.value = '';
  ['tecnica', 'color', 'disp'].forEach((g) => state[g].clear());
  document.querySelectorAll('#filter-panel input[type=checkbox]').forEach((c) => { c.checked = false; });
  state.shown = PAGE;
  syncUrl();
  renderPills();
  render();
}

let t;
search.addEventListener('input', () => {
  clearTimeout(t);
  t = setTimeout(() => { state.q = search.value.trim().slice(0, 80); state.shown = PAGE; syncUrl(); render(); }, 200);
});
$('#reset-filters').addEventListener('click', reset);
moreBtn.addEventListener('click', () => { state.shown += PAGE; render(); });
$('#filter-toggle').addEventListener('click', (e) => {
  const panel = $('#filter-panel');
  const open = panel.classList.toggle('hidden') === false;
  panel.classList.toggle('flex', open);
  e.currentTarget.setAttribute('aria-expanded', String(open));
});

try {
  [products, categories] = await Promise.all([getProducts(), getCategories()]);
  catName = Object.fromEntries(categories.map((c) => [c.id, c.name]));
  if (state.cat && !categories.some((c) => c.id === state.cat)) state.cat = '';
  renderPills();
  renderFilters();
  render();
} catch {
  countEl.textContent = '';
  grid.replaceChildren(errorBox());
}

getFaqs()
  .then((faqs) => renderFaqs($('#faq-list'), faqs.filter((f) => f.scope !== 'producto'), { withIcons: true }))
  .catch(() => $('#preguntas')?.classList.add('hidden'));
