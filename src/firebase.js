// Conexión de SOLO LECTURA a Firestore para la web pública.
// La configuración web de Firebase no es secreta (identifica el proyecto); la
// seguridad la imponen las reglas de Firestore y App Check. Esta web no incluye
// Authentication: no existe ningún login público.
import { initializeApp } from 'firebase/app';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore/lite';

const env = import.meta.env;

const app = initializeApp({
  apiKey: env.VITE_FIREBASE_API_KEY,
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: env.VITE_FIREBASE_PROJECT_ID,
  appId: env.VITE_FIREBASE_APP_ID,
});

if (env.VITE_USE_EMULATOR !== 'true' && env.VITE_RECAPTCHA_SITE_KEY) {
  initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider(env.VITE_RECAPTCHA_SITE_KEY),
    isTokenAutoRefreshEnabled: true,
  });
}

export const db = getFirestore(app);

if (env.VITE_USE_EMULATOR === 'true') {
  connectFirestoreEmulator(db, '127.0.0.1', 8080);
}
