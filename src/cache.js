// Caché local en IndexedDB. Guarda lo descargado de Firestore junto con la
// "versión del catálogo"; mientras el panel no publique cambios, las visitas
// siguientes no vuelven a descargar (ahorra la cuota gratuita de Firestore).
const DB_NAME = 'arete-cache';
const STORE = 'kv';
let dbPromise;

function open() {
  if (!('indexedDB' in window)) return Promise.reject(new Error('sin IndexedDB'));
  dbPromise ??= new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => req.result.createObjectStore(STORE);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
  return dbPromise;
}

export async function cacheGet(key) {
  try {
    const db = await open();
    return await new Promise((resolve) => {
      const req = db.transaction(STORE).objectStore(STORE).get(key);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => resolve(undefined);
    });
  } catch {
    return undefined;
  }
}

export async function cacheSet(key, value) {
  try {
    const db = await open();
    await new Promise((resolve) => {
      const tx = db.transaction(STORE, 'readwrite');
      tx.objectStore(STORE).put(value, key);
      tx.oncomplete = resolve;
      tx.onerror = resolve;
    });
  } catch {
    /* modo privado o sin espacio: se sigue sin caché */
  }
}
