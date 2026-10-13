import { h, icon } from './dom.js';

/** Acordeón accesible de preguntas frecuentes (texto plano, sin HTML). */
export function renderFaqs(container, faqs, { withIcons = false } = {}) {
  container.replaceChildren(...faqs.map((f, i) => {
    const id = `faq-${i}`;
    const item = h('div', { class: 'faq-item overflow-hidden rounded-xl bg-surface-container-low transition-all duration-300' });
    const btn = h('button', {
      type: 'button', class: 'flex w-full items-center justify-between gap-space-md px-space-lg py-space-md text-left',
      'aria-expanded': 'false', 'aria-controls': id,
      onclick: () => {
        const open = !item.classList.contains('open');
        container.querySelectorAll('.faq-item.open').forEach((o) => {
          o.classList.remove('open');
          o.querySelector('button')?.setAttribute('aria-expanded', 'false');
        });
        item.classList.toggle('open', open);
        btn.setAttribute('aria-expanded', String(open));
      },
    }, [
      h('span', { class: 'flex items-center gap-space-sm font-display text-[18px] text-on-surface' }, [
        withIcons && f.icon ? icon(f.icon, 'text-[20px] text-primary') : null,
        f.question,
      ]),
      icon('expand_more', 'faq-icon text-[24px] text-primary transition-transform duration-300'),
    ]);
    const content = h('div', { id, class: 'faq-content', role: 'region' }, [
      h('div', { class: 'overflow-hidden' }, [
        h('p', { class: 'px-space-lg pb-space-md text-body-md whitespace-pre-line text-on-surface-variant', text: f.answer }),
      ]),
    ]);
    item.append(btn, content);
    return item;
  }));
}
