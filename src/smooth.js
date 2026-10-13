// Scroll suave con inercia (Lenis). Se desactiva si la persona pidió reducir
// animaciones en su sistema; en celulares se mantiene el scroll táctil nativo.
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

const HEADER_OFFSET = -96; // alto del encabezado fijo + aire
let lenis = null;

function targetFromLink(a) {
  if (!a?.hash || a.target === '_blank') return null;
  const url = new URL(a.href, location.href);
  if (url.origin !== location.origin || url.pathname !== location.pathname) return null;
  try {
    return document.querySelector(decodeURIComponent(url.hash));
  } catch {
    return null;
  }
}

export function initSmoothScroll() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  lenis = new Lenis({
    autoRaf: true,
    lerp: 0.09, // suavidad (menor = más suave)
    wheelMultiplier: 1,
    smoothWheel: true,
    syncTouch: false, // en pantallas táctiles, scroll nativo
    allowNestedScroll: true,
  });

  // Enlaces internos (#seccion o /#seccion en la misma página) con desplazamiento suave
  document.addEventListener('click', (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
    const a = e.target.closest('a[href*="#"]');
    const target = targetFromLink(a);
    if (!target) return;
    e.preventDefault();
    lenis.scrollTo(target, { offset: HEADER_OFFSET, duration: 1.2 });
    history.pushState(null, '', a.hash);
  });

  // Si se llega con #seccion desde otra página, se reubica cuando termina de cargar el contenido.
  if (location.hash) {
    setTimeout(() => {
      try {
        const el = document.querySelector(decodeURIComponent(location.hash));
        if (el) lenis.scrollTo(el, { offset: HEADER_OFFSET, immediate: true });
      } catch { /* hash inválido */ }
    }, 700);
  }
}

/** Pausa el scroll de la página (bolsa abierta, visor de fotos...). */
export function lockScroll(locked) {
  document.body.style.overflow = locked ? 'hidden' : '';
  if (!lenis) return;
  if (locked) lenis.stop();
  else lenis.start();
}
