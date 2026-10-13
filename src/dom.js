// Utilidades de renderizado SEGURO: todo el texto que viene de la base de datos
// se inserta con textContent (nunca innerHTML), las imágenes solo se aceptan
// como WebP embebido y los enlaces externos solo con https.
import { isIcon } from './icons.js';

/** Crea un elemento. attrs: class, text, href, src, alt, data-*, aria-*, on* (funciones). */
export function h(tag, attrs = {}, children = []) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v === undefined || v === null || v === false) continue;
    if (k === 'class') el.className = v;
    else if (k === 'text') el.textContent = String(v);
    else if (k.startsWith('on') && typeof v === 'function') el.addEventListener(k.slice(2), v);
    else if (k === 'href') {
      const safe = safeHref(v);
      if (safe) el.setAttribute('href', safe);
    } else if (k === 'src') {
      const safe = safeImg(v) ?? (typeof v === 'string' && v.startsWith('/') && !v.startsWith('//') ? v : undefined);
      if (safe) el.setAttribute('src', safe);
    } else el.setAttribute(k, String(v));
  }
  for (const c of [].concat(children)) {
    if (c === null || c === undefined || c === false) continue;
    el.append(c instanceof Node ? c : document.createTextNode(String(c)));
  }
  return el;
}

export function icon(name, cls = '') {
  return h('span', { class: `material-symbols-outlined ${cls}`, 'aria-hidden': 'true', text: isIcon(name) || UI.has(name) ? name : 'auto_awesome' });
}
const UI = new Set(['chat', 'east', 'arrow_forward', 'check_circle', 'expand_more', 'local_mall', 'add', 'remove', 'delete', 'zoom_in', 'close', 'chevron_left', 'chevron_right']);

/** Imagen apta para mostrar: archivo estático propio (/img/...) o WebP embebido. */
export function imgSrc(src) {
  if (typeof src !== 'string') return undefined;
  if (/^\/img\/(obras|sitio)\/[a-z0-9-]+\.webp$/.test(src)) return src;
  return safeImg(src);
}

export function safeImg(src) {
  return typeof src === 'string' && /^data:image\/webp;base64,[A-Za-z0-9+/=]+$/.test(src) ? src : undefined;
}

export function safeHttps(url) {
  try {
    const u = new URL(url);
    return u.protocol === 'https:' && !/[\s"<>]/.test(url) ? u.href : undefined;
  } catch {
    return undefined;
  }
}

function safeHref(v) {
  if (typeof v !== 'string') return undefined;
  if (v.startsWith('/') || v.startsWith('#') || v.startsWith('?')) return v.startsWith('//') ? undefined : v;
  if (/^mailto:[^\s@<>"]+@[^\s@<>"]+$/.test(v)) return v;
  return safeHttps(v);
}

export const $ = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

/** Número de WhatsApp validado (solo dígitos). */
export function waNumber(site) {
  const n = String(site?.whatsappNumber ?? '');
  return /^\d{8,15}$/.test(n) ? n : '5493758567371';
}

export function waLink(site, text) {
  const base = `https://wa.me/${waNumber(site)}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

/** URL de la obra: página propia /obra/<id>/ (generada para buscadores). */
export function productUrl(p) {
  return import.meta.env.DEV
    ? `/producto.html?id=${encodeURIComponent(p.id)}`
    : `/obra/${encodeURIComponent(p.id)}/`;
}

/** Texto alternativo descriptivo para fotos de obras. */
export function productAlt(p, extra = '') {
  return `${p.name}${extra}, pieza de vitrofusión hecha a mano por Areté en Apóstoles, Misiones`;
}

export const AVAILABILITY = {
  en_taller: 'En taller · entrega inmediata',
  unica: 'Pieza única irrepetible',
  pedido: 'A pedido / personalizable',
};

export function formatPrice(n) {
  return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(n);
}
