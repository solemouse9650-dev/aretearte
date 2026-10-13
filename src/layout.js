import './styles.css';
import { getSite, getMedia } from './data.js';
import { $, $$, h, icon, safeHttps, safeImg, waLink } from './dom.js';
import { initCart } from './cart.js';
import { initSmoothScroll } from './smooth.js';

/** Aplica los textos editables (data-s="clave") y enlaces del sitio. */
export function applySite(site) {
  for (const el of $$('[data-s]')) {
    const v = site[el.dataset.s];
    if (typeof v === 'string' && v.trim()) el.textContent = v;
  }
  for (const el of $$('[data-wa]')) {
    el.href = waLink(site, el.dataset.waText);
  }
  for (const el of $$('[data-link]')) {
    const url = safeHttps(site[el.dataset.link]);
    if (url) el.href = url;
  }
  const email = typeof site.email === 'string' && /^[^\s@<>"]+@[^\s@<>"]+$/.test(site.email) ? site.email : null;
  if (email) $$('[data-mail]').forEach((el) => { el.href = `mailto:${email}`; });

  // Listas (franja de confianza, características, pasos...)
  for (const box of $$('[data-list]')) {
    const items = site[box.dataset.list];
    const tpl = box.querySelector('template');
    if (!Array.isArray(items) || !items.length || !tpl) continue;
    for (const child of [...box.children]) if (child !== tpl) child.remove();
    items.forEach((item, i) => {
      const node = tpl.content.firstElementChild.cloneNode(true);
      for (const f of node.querySelectorAll('[data-f]')) {
        const key = f.dataset.f;
        if (key === 'icon') f.replaceWith(icon(item.icon, f.className.replace('material-symbols-outlined', '')));
        else if (key === 'n') f.textContent = String(i + 1);
        else f.textContent = String(item[key] ?? '');
      }
      box.append(node);
    });
  }
}

/** Imágenes del sitio administrables (data-media="hero"). */
export async function applyMedia() {
  const els = $$('[data-media]');
  if (!els.length) return;
  try {
    const media = await getMedia();
    for (const el of els) {
      const m = media[el.dataset.media];
      const src = safeImg(m?.data);
      if (!src) continue;
      el.src = src;
      if (m.alt) el.alt = m.alt;
      el.classList.remove('opacity-0');
    }
  } catch {
    /* se mantiene el fondo neutro */
  }
}

function initMenu() {
  const btn = $('#menu-open');
  const menu = $('#mobile-menu');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('hidden') === false;
    btn.setAttribute('aria-expanded', String(open));
  });
  menu.addEventListener('click', (e) => {
    if (e.target.closest('a')) menu.classList.add('hidden');
  });
}

function markNav(active) {
  for (const a of $$('[data-nav]')) {
    if (a.dataset.nav === active) {
      a.classList.add('bg-surface-container-high', 'text-on-surface');
      a.setAttribute('aria-current', 'page');
    }
  }
}

/** Mensaje discreto cuando no se pudo conectar con la base de datos. */
export function errorBox(text = 'No pudimos cargar el catálogo en este momento.') {
  return h('div', { class: 'col-span-full rounded-xl bg-surface-container-low p-space-lg text-center text-on-surface-variant' }, [
    h('p', { text }),
    h('a', { class: 'mt-space-sm inline-flex items-center gap-1 text-label-lg text-primary hover:underline', href: 'https://wa.me/5493758567371', 'data-wa': '', target: '_blank', rel: 'noopener noreferrer' }, [
      icon('chat', 'text-[18px]'), 'Escribinos por WhatsApp',
    ]),
  ]);
}

/** Inicialización común a todas las páginas. Devuelve los datos del sitio. */
export async function initLayout(active) {
  initSmoothScroll();
  markNav(active);
  initMenu();
  $$('[data-year]').forEach((el) => { el.textContent = String(new Date().getFullYear()); });
  let site = {};
  try {
    site = await getSite();
  } catch {
    /* sin conexión: quedan los textos por defecto del HTML */
  }
  applySite(site);
  initCart(site);
  void applyMedia();
  return site;
}
