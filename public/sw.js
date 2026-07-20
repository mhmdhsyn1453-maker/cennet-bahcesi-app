// Service Worker - Hibrit Akıllı Cache Stratejisi (GitHub Pages ve Subdirectory Uyumlu)
// ✅ Uygulama her zaman ANINDA cache'ten açılır (hızlı açılış)
// ✅ Arka planda güncelleme kontrolü yapar (sessiz güncelleme)
// ✅ Yeni sürüm varsa bir sonraki açılışta otomatik gelir
// ✅ İnternet yoksa çevrimdışı çalışır

const CACHE_NAME = 'cennet-bahcesi-v6';

// Tüm yolları göreceli (relative) yapıyoruz ki subdirectory'lerde (örn. /cennet-bahcesi-app/) 404 vermesin
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './favicon.ico',
  './assets/logo.png',
  './assets/img/abdest/niyet.webp',
  './assets/img/abdest/adim1.webp',
  './assets/img/abdest/adim2.webp',
  './assets/img/abdest/adim3.webp',
  './assets/img/abdest/adim4.webp',
  './assets/img/abdest/adim5.webp',
  './assets/img/abdest/adim6.webp',
  './assets/img/abdest/adim7.webp',
  './assets/img/abdest/adim8.webp',
  './assets/img/abdest/adim9.webp',
  './assets/img/namaz/1.webp',
  './assets/img/namaz/2.webp',
  './assets/img/namaz/3.webp',
  './assets/img/namaz/4.webp',
  './assets/img/namaz/5.webp',
  './assets/img/namaz/6.webp',
  './assets/img/namaz/7.webp',
  './assets/img/namaz/8.webp'
];

// ============ INSTALL ============
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS);
    }).catch(err => console.log('SW: Pre-cache failed:', err))
  );
  self.skipWaiting();
});

// ============ ACTIVATE ============
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('SW: Eski cache siliniyor:', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// ============ FETCH ============
self.addEventListener('fetch', (e) => {
  const request = e.request;

  if (request.method !== 'GET') return;
  if (!request.url.startsWith(self.location.origin)) return;

  // --- STRATEJİ 1: HTML Navigation istekleri (Network First -> Güncellemeleri anında çek) ---
  if (request.mode === 'navigate') {
    e.respondWith(
      fetch(request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const clone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
        }
        return networkResponse;
      }).catch(() => {
        return caches.match(request);
      })
    );
    return;
  }

  // --- STRATEJİ 2: Hash'li dosyalar (index-BfABbWOY.js gibi) ---
  if (request.url.includes('/assets/') && request.url.match(/\.[a-f0-9]{8,}\./)) {
    e.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) return cachedResponse;
        return fetch(request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return networkResponse;
        });
      })
    );
    return;
  }

  // --- STRATEJİ 3: Diğer tüm dosyalar ---
  e.respondWith(
    caches.match(request).then((cachedResponse) => {
      const fetchPromise = fetch(request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const clone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
        }
        return networkResponse;
      }).catch(() => null);

      return cachedResponse || fetchPromise;
    })
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
