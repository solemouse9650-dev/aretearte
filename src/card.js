import { addToCart } from './cart.js';
import {
  AVAILABILITY, formatPrice, h, icon, imgSrc, productAlt, productUrl, waLink,
} from './dom.js';

const SHORT = { en_taller: 'En Taller', unica: 'Pieza Única', pedido: 'A Pedido' };

/** Tarjeta de producto con el estilo de Stitch (sin precio salvo que se active). */
export function productCard(p, { site, categoryName = '', compact = false } = {}) {
  const url = productUrl(p);
  const badge = (Array.isArray(p.badges) && p.badges[0]) || SHORT[p.availability] || 'Hecho a mano';
  const cover = imgSrc(p.cover);
  const msg = `Hola ${site?.artistName || 'Ivana'}, me interesa consultar por la obra: ${p.name} — ${location.origin}${url}`;

  return h('article', {
    class: 'product-card group flex flex-col overflow-hidden rounded-2xl bg-surface-container-low transition-all duration-300 hover:shadow-lg',
    'data-id': p.id,
  }, [
    h('a', { href: url, class: 'relative block aspect-square w-full overflow-hidden bg-surface-container-highest', 'aria-label': p.name }, [
      cover
        ? h('img', { src: cover, alt: productAlt(p), loading: 'lazy', decoding: 'async', class: 'h-full w-full object-cover transition-transform duration-500 group-hover:scale-105' })
        : h('span', { class: 'flex h-full items-center justify-center text-outline' }, [icon('photo_camera', 'text-[40px]')]),
      h('span', { class: 'absolute top-3 left-3 rounded-md bg-surface-container-lowest/90 px-space-sm py-1 text-label-tag tracking-wider text-on-surface uppercase backdrop-blur-md', text: badge }),
      p.featured ? h('span', { class: 'absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-surface-container-lowest/80 text-primary backdrop-blur-md', title: 'Obra destacada' }, [icon('auto_awesome', 'text-[18px]')]) : null,
    ]),
    h('div', { class: `flex flex-grow flex-col justify-between gap-space-md ${compact ? 'p-space-md' : 'p-space-lg'}` }, [
      h('div', { class: 'flex flex-col gap-space-xs' }, [
        h('div', { class: 'flex items-center justify-between gap-2 text-label-md text-on-surface-variant' }, [
          h('span', { class: 'truncate', text: categoryName }),
          p.dimensions ? h('span', { class: 'shrink-0', text: p.dimensions }) : null,
        ]),
        h('h3', { class: 'text-headline-sm text-on-surface transition-colors group-hover:text-primary' }, [
          h('a', { href: url, text: p.name }),
        ]),
        p.shortDescription ? h('p', { class: 'line-clamp-2 text-body-sm text-on-surface-variant', text: p.shortDescription }) : null,
      ]),
      h('div', { class: 'flex flex-col gap-space-sm pt-space-xs' }, [
        h('div', { class: 'flex items-center justify-between gap-2' }, [
          h('span', { class: 'flex items-center gap-space-xs text-label-md text-tertiary' }, [
            icon('check_circle', 'text-[16px]'), AVAILABILITY[p.availability] || 'Consultar disponibilidad',
          ]),
          p.showPrice && typeof p.price === 'number' ? h('span', { class: 'font-display text-headline-sm text-primary', text: formatPrice(p.price) }) : null,
        ]),
        h('div', { class: 'flex gap-space-sm' }, [
          h('a', {
            href: waLink(site, msg), target: '_blank', rel: 'noopener noreferrer',
            class: 'inline-flex flex-1 items-center justify-center gap-space-xs rounded-lg bg-primary px-space-md py-space-sm text-label-md text-on-primary transition-colors hover:bg-primary-container',
          }, [icon('chat', 'text-[18px]'), 'Consultar Obra']),
          h('button', {
            type: 'button', title: 'Agregar a la bolsa de consulta', 'aria-label': `Agregar ${p.name} a la bolsa de consulta`,
            class: 'inline-flex items-center justify-center rounded-lg bg-surface-container-high px-space-md text-on-surface transition-colors hover:bg-surface-container-highest',
            onclick: () => addToCart(p),
          }, [icon('local_mall', 'text-[20px]')]),
        ]),
      ]),
    ]),
  ]);
}

export function skeletonCards(n = 6) {
  return Array.from({ length: n }, () => h('div', { class: 'flex flex-col gap-space-sm' }, [
    h('div', { class: 'skeleton aspect-square w-full' }),
    h('div', { class: 'skeleton h-5 w-2/3' }),
    h('div', { class: 'skeleton h-4 w-full' }),
  ]));
}
