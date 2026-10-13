import { defineConfig, loadEnv } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { ALL_ICONS } from './src/icons.js';

// Inserta fragmentos HTML compartidos: <!-- @include header -->
function htmlIncludes() {
  return {
    name: 'html-includes',
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        return html.replace(/<!--\s*@include\s+([a-z-]+)\s*-->/g, (_, name) =>
          readFileSync(resolve(__dirname, 'partials', `${name}.html`), 'utf8'));
      },
    },
  };
}

// Reemplaza %ICON_NAMES% por la lista ordenada de íconos para Google Fonts.
function iconFontSubset() {
  return {
    name: 'icon-font-subset',
    transformIndexHtml: {
      order: 'pre',
      handler: (html) => html.replaceAll('%ICON_NAMES%', ALL_ICONS.join(',')),
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  const appCheck = Boolean(env.VITE_RECAPTCHA_SITE_KEY);
  const firestoreHosts = env.VITE_USE_EMULATOR === 'true'
    ? 'http://127.0.0.1:8080 ws://127.0.0.1:8080'
    : 'https://firestore.googleapis.com';

  // Política de seguridad de contenido (GitHub Pages no permite cabeceras: va como <meta>).
  const csp = [
    "default-src 'self'",
    `script-src 'self'${appCheck ? ' https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/' : ''}`,
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    'font-src https://fonts.gstatic.com',
    "img-src 'self' data:",
    `connect-src 'self' ${firestoreHosts}${appCheck ? ' https://content-firebaseappcheck.googleapis.com https://www.google.com/recaptcha/' : ''}`,
    `frame-src ${appCheck ? 'https://www.google.com/recaptcha/ https://recaptcha.google.com/recaptcha/' : "'none'"}`,
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    'upgrade-insecure-requests',
  ].join('; ');

  return {
    plugins: [
      htmlIncludes(),
      iconFontSubset(),
      {
        name: 'csp-meta',
        transformIndexHtml: {
          order: 'post',
          handler: (html) => (mode === 'development' || mode === 'emulator'
            ? html.replace('%CSP%', '')
            : html.replace('%CSP%', `<meta http-equiv="Content-Security-Policy" content="${csp}" />`)),
        },
      },
      tailwindcss(),
    ],
    server: { port: 5173, strictPort: true },
    preview: { port: 4173, strictPort: true },
    build: {
      sourcemap: false,
      target: 'es2022',
      rollupOptions: {
        input: {
          index: resolve(__dirname, 'index.html'),
          tienda: resolve(__dirname, 'tienda.html'),
          producto: resolve(__dirname, 'producto.html'),
          404: resolve(__dirname, '404.html'),
        },
      },
    },
  };
});
