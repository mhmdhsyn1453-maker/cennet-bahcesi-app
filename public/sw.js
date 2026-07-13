const CACHE_NAME = 'cennet-bahcesi-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/assets/logo.png',
  '/assets/img/abdest/niyet.webp',
  '/assets/img/abdest/adim1.webp',
  '/assets/img/abdest/adim2.webp',
  '/assets/img/abdest/adim3.webp',
  '/assets/img/abdest/adim4.webp',
  '/assets/img/abdest/adim5.webp',
  '/assets/img/abdest/adim6.webp',
  '/assets/img/abdest/adim7.webp',
  '/assets/img/abdest/adim8.webp',
  '/assets/img/abdest/adim9.webp',
  '/assets/img/namaz/1.webp',
  '/assets/img/namaz/2.webp',
  '/assets/img/namaz/3.webp',
  '/assets/img/namaz/4.webp',
  '/assets/img/namaz/5.webp',
  '/assets/img/namaz/6.webp',
  '/assets/img/namaz/7.webp',
  '/assets/img/namaz/8.webp'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    }).catch(err => console.log('Service worker install cache failed:', err))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});
