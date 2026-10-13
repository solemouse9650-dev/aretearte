// "Bolsa de consulta": lista de piezas guardada en el navegador que se envía
// por WhatsApp. No es un carrito de compra ni guarda datos personales.
import { getProducts } from './data.js';
import { $, h, icon, productUrl, safeImg, waLink } from './dom.js';
import { lockScroll } from './smooth.js';

const KEY = 'arete-cart';
const MAX_ITEMS = 30;
let site = {};

function read() {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) || '[]');
    if (!Array.isArray(raw)) return [];
    return raw
      .filter((i) => i && typeof i.id === 'string' && /^[a-z0-9-]{1,140}$/.test(i.id))
      .map((i) => ({
        id: i.id,
        name: String(i.name ?? '').slice(0, 120),
        qty: Math.min(99, Math.max(1, Number.parseInt(i.qty, 10) || 1)),
      }))
      .slice(0, MAX_ITEMS);
  } catch {
    return [];
  }
}

function write(items) {
  try {
    localStorage.setItem(KEY, JSON.stringify(items));
  } catch { /* almacenamiento bloqueado */ }
  render();
}

export function addToCart(product) {
  const items = read();
  const found = items.find((i) => i.id === product.id);
  if (found) found.qty = Math.min(99, found.qty + 1);
  else if (items.length < MAX_ITEMS) items.push({ id: product.id, name: product.name, qty: 1 });
  write(items);
  toast(`“${product.name}” se agregó a tu bolsa de consulta`);
}

function toast(text) {
  const el = h('div', {
    class: 'fixed bottom-6 left-1/2 z-[70] -translate-x-1/2 rounded-xl bg-inverse-surface px-space-lg py-space-md text-body-sm text-white shadow-xl',
    role: 'status',
  }, [text]);
  document.body.append(el);
  setTimeout(() => el.remove(), 3000);
}

async function render() {
  const items = read();
  const count = items.reduce((s, i) => s + i.qty, 0);
  const badge = $('#cart-count');
  if (badge) {
    badge.textContent = String(count);
    badge.classList.toggle('hidden', count === 0);
    badge.classList.toggle('flex', count > 0);
  }
  const list = $('#cart-items');
  if (!list) return;
  $('#cart-empty')?.classList.toggle('hidden', items.length > 0);
  list.classList.toggle('hidden', items.length === 0);
  $('#cart-send').disabled = items.length === 0;

  const products = await getProducts().catch(() => []);
  const byId = Object.fromEntries(products.map((p) => [p.id, p]));
  list.replaceChildren(...items.map((it) => {
    const p = byId[it.id];
    const set = (qty) => write(qty <= 0 ? read().filter((x) => x.id !== it.id) : read().map((x) => (x.id === it.id ? { ...x, qty } : x)));
    return h('li', { class: 'flex items-center gap-space-md rounded-xl bg-surface-container-low p-space-sm' }, [
      h('a', { href: productUrl(it), class: 'h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-surface-container' }, [
        safeImg(p?.cover) ? h('img', { src: p.cover, alt: '', class: 'h-full w-full object-cover' }) : null,
      ]),
      h('div', { class: 'min-w-0 flex-1' }, [
        h('a', { href: productUrl(it), class: 'line-clamp-2 font-display text-[17px] leading-tight hover:text-primary', text: p?.name ?? it.name }),
        h('div', { class: 'mt-1 flex items-center gap-1' }, [
          h('button', { type: 'button', class: 'rounded-full p-1 hover:bg-surface-container-high', 'aria-label': 'Quitar uno', onclick: () => set(it.qty - 1) }, [icon('remove', 'text-[18px]')]),
          h('span', { class: 'min-w-6 text-center text-label-lg', text: it.qty }),
          h('button', { type: 'button', class: 'rounded-full p-1 hover:bg-surface-container-high', 'aria-label': 'Agregar uno', onclick: () => set(it.qty + 1) }, [icon('add', 'text-[18px]')]),
        ]),
      ]),
      h('button', { type: 'button', class: 'rounded-full p-2 text-on-surface-variant hover:bg-surface-container-high hover:text-error', 'aria-label': 'Quitar de la bolsa', onclick: () => set(0) }, [icon('delete', 'text-[20px]')]),
    ]);
  }));
}

function toggle(open) {
  const panel = $('#cart-panel');
  const overlay = $('#cart-overlay');
  if (!panel || !overlay) return;
  panel.classList.toggle('translate-x-full', !open);
  panel.setAttribute('aria-hidden', String(!open));
  overlay.classList.toggle('hidden', !open);
  lockScroll(open);
  if (open) {
    void render();
    $('#cart-close')?.focus();
  }
}

function send() {
  const items = read();
  if (!items.length) return;
  const lines = items.map((i) => `• ${i.name} (x${i.qty}) — ${location.origin}${productUrl(i)}`);
  const text = `¡Hola ${site.artistName || 'Ivana'}! Quisiera consultar disponibilidad y precio de estas piezas:\n${lines.join('\n')}`;
  window.open(waLink(site, text), '_blank', 'noopener');
}

export function initCart(s) {
  site = s;
  $('#cart-open')?.addEventListener('click', () => toggle(true));
  $('#cart-close')?.addEventListener('click', () => toggle(false));
  $('#cart-overlay')?.addEventListener('click', () => toggle(false));
  $('#cart-send')?.addEventListener('click', send);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') toggle(false); });
  window.addEventListener('storage', (e) => { if (e.key === KEY) void render(); });
  void render();
}
