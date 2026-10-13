import { initLayout } from '../layout.js';

// Obra creada después de la última publicación: todavía no tiene página
// generada, se muestra con la página dinámica.
const obra = /^\/obra\/([a-z0-9-]{1,140})\/?$/.exec(location.pathname);
if (obra) location.replace(`/producto.html?id=${obra[1]}`);
else await initLayout('');
