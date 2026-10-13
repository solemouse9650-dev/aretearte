import {
  collection, doc, getDoc, getDocs, query, where,
} from 'firebase/firestore/lite';
import { db } from './firebase.js';
import { cacheGet, cacheSet } from './cache.js';

let sitePromise;

/** Textos y datos del sitio. Siempre se consulta (1 lectura) para conocer la versión. */
export function getSite() {
  sitePromise ??= (async () => {
    try {
      const snap = await getDoc(doc(db, 'settings', 'site'));
      const site = snap.exists() ? snap.data() : {};
      void cacheSet('site', site);
      return site;
    } catch (e) {
      const cached = await cacheGet('site');
      if (cached) return { ...cached, __offline: true };
      throw e;
    }
  })();
  return sitePromise;
}

// Versión estática del catálogo generada en cada publicación (fotos como archivos
// con nombre, sin gastar lecturas de Firestore). Solo se usa si coincide con la
// versión actual; si se editó algo después, se lee Firestore en vivo.
const STATIC_V = document.querySelector('meta[name="arete-catalogo"]')?.content ?? '';
let staticPromise;

function getStatic() {
  staticPromise ??= (async () => {
    if (!STATIC_V) return null;
    let site = null;
    try {
      site = await getSite();
    } catch { /* sin conexión: la versión estática es mejor que nada */ }
    if (site && !site.__offline && String(site.catalogVersion ?? '') !== STATIC_V) return null;
    const r = await fetch(`/datos/catalogo.json?v=${encodeURIComponent(STATIC_V)}`);
    return r.ok ? r.json() : null;
  })().catch(() => null);
  return staticPromise;
}

/** Carga con caché versionada: reutiliza lo guardado si el catálogo no cambió. */
async function cached(key, loader) {
  let version;
  let offline = false;
  try {
    const site = await getSite();
    version = site.catalogVersion ?? 0;
    offline = Boolean(site.__offline);
  } catch {
    offline = true;
  }
  const hit = await cacheGet(key);
  if (hit && (offline || hit.v === version)) return hit.data;
  try {
    const data = await loader();
    void cacheSet(key, { v: version, data });
    return data;
  } catch (e) {
    if (hit) return hit.data; // sin conexión o sin cuota: mejor algo viejo que nada
    throw e;
  }
}

const byOrder = (a, b) => (a.order ?? 0) - (b.order ?? 0);
const rows = (snap) => snap.docs.map((d) => ({ id: d.id, ...d.data() }));

export const getProducts = async () => (await getStatic())?.products ?? cached('products', async () =>
  rows(await getDocs(query(collection(db, 'products'), where('published', '==', true)))).sort(byOrder));

export const getCategories = async () => (await getStatic())?.categories ?? cached('categories', async () =>
  rows(await getDocs(query(collection(db, 'categories'), where('published', '==', true)))).sort(byOrder));

export const getFaqs = async () => (await getStatic())?.faqs ?? cached('faqs', async () =>
  rows(await getDocs(query(collection(db, 'faqs'), where('published', '==', true)))).sort(byOrder));

export const getMedia = async () => (await getStatic())?.media ?? cached('media', async () =>
  Object.fromEntries(rows(await getDocs(collection(db, 'media'))).map((m) => [m.id, m])));

export async function getProduct(id) {
  const list = await getProducts().catch(() => null);
  const fromList = list?.find((p) => p.id === id);
  if (fromList) return fromList;
  const snap = await getDoc(doc(db, 'products', id));
  return snap.exists() && snap.data().published ? { id: snap.id, ...snap.data() } : null;
}

export const getProductImages = async (id) => (await getStatic())?.products.find((p) => p.id === id)?.images ?? cached(`images:${id}`, async () =>
  rows(await getDocs(collection(db, 'products', id, 'images'))).sort(byOrder));
