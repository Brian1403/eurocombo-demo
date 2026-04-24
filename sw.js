// Un Service Worker básico para cumplir con el requisito PWA
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Instalado');
});

self.addEventListener('fetch', (e) => {
    // Deja pasar todas las peticiones a internet normalmente
    e.respondWith(fetch(e.request));
});