// Service Worker - Hibrit Akıllı Cache Stratejisi
// ✅ Uygulama her zaman ANINDA cache'ten açılır (hızlı açılış)
// ✅ Arka planda güncelleme kontrolü yapar (sessiz güncelleme)
// ✅ Yeni sürüm varsa bir sonraki açılışta otomatik gelir
// ✅ İnternet yoksa çevrimdışı çalışır

const CACHE_NAME = 'cennet-bahcesi-v4';

// Sadece resimler ve statik dosyalar önceden cache'lenir (pre-cache)
const PRECACHE_ASSETS = [
  '/favicon.ico',
  '/manifest.json',
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

// ============ INSTALL ============
// Statik dosyaları önceden cache'le
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS);
    }).catch(err => console.log('SW: Pre-cache failed:', err))
  );
  // Yeni SW'yi hemen aktif et
  self.skipWaiting();
});

// ============ ACTIVATE ============
// Eski cache versiyonlarını temizle
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
  // Tüm açık sekmeleri hemen kontrol altına al
  self.clients.claim();
});

// ============ FETCH ============
self.addEventListener('fetch', (e) => {
  const request = e.request;

  // Sadece GET isteklerini yönet
  if (request.method !== 'GET') return;

  // Harici istekleri (CDN, Google Fonts vs.) yönetme
  if (!request.url.startsWith(self.location.origin)) return;

  // --- STRATEJİ 1: HTML Navigation istekleri ---
  // Stale-While-Revalidate: Önce cache'ten sun, arka planda ağdan güncelle
  if (request.mode === 'navigate') {
    e.respondWith(
      caches.match(request).then((cachedResponse) => {
        // Arka planda ağdan taze kopyayı çek ve cache'e kaydet
        const fetchPromise = fetch(request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return networkResponse;
        }).catch(() => null); // Ağ hatası olursa sessizce geç

        // Cache varsa HEMEN sun (anında açılış), yoksa ağ yanıtını bekle
        return cachedResponse || fetchPromise;
      })
    );
    return;
  }

  // --- STRATEJİ 2: Hash'li dosyalar (index-BfABbWOY.js gibi) ---
  // Vite hash'li dosya üretir — dosya adı değişmedikçe içerik aynıdır
  // Bu dosyalar değişmez (immutable), cache-first güvenlidir
  if (request.url.includes('/assets/') && request.url.match(/\.[a-f0-9]{8,}\./)) {
    e.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) return cachedResponse;
        // Cache'te yoksa ağdan çek ve cache'e kaydet
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

  // --- STRATEJİ 3: Diğer tüm dosyalar (resimler, manifest vb.) ---
  // Stale-While-Revalidate: Cache'ten hemen sun, arka planda güncelle
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

// SW güncellendiğinde mesaj dinle
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
