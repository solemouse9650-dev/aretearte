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

export const getProducts = () => cached('products', async () =>
  rows(await getDocs(query(collection(db, 'products'), where('published', '==', true)))).sort(byOrder));

export const getCategories = () => cached('categories', async () =>
  rows(await getDocs(query(collection(db, 'categories'), where('published', '==', true)))).sort(byOrder));

export const getFaqs = () => cached('faqs', async () =>
  rows(await getDocs(query(collection(db, 'faqs'), where('published', '==', true)))).sort(byOrder));

export const getMedia = () => cached('media', async () =>
  Object.fromEntries(rows(await getDocs(collection(db, 'media'))).map((m) => [m.id, m])));

export async function getProduct(id) {
  const list = await getProducts().catch(() => null);
  const fromList = list?.find((p) => p.id === id);
  if (fromList) return fromList;
  const snap = await getDoc(doc(db, 'products', id));
  return snap.exists() && snap.data().published ? { id: snap.id, ...snap.data() } : null;
}

export const getProductImages = (id) => cached(`images:${id}`, async () =>
  rows(await getDocs(collection(db, 'products', id, 'images'))).sort(byOrder));
