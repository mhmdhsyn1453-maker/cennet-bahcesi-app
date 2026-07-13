// Service Worker - Network First Strategy
// Bu strateji ile F5 yapıldığında her zaman en güncel sürüm gelir.
// Ağa ulaşılamazsa cache'ten servis edilir (çevrimdışı destek).

const CACHE_NAME = 'cennet-bahcesi-v3';
const STATIC_ASSETS = [
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

// Install: Sadece statik asset'leri (resimler vb.) cache'le
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    }).catch(err => console.log('SW install cache failed:', err))
  );
  // Yeni SW'yi hemen aktif et, bekleme yapmadan
  self.skipWaiting();
});

// Activate: Eski cache'leri temizle
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
  // Açık olan tüm sayfaları hemen kontrol et
  self.clients.claim();
});

// Fetch: NETWORK FIRST stratejisi
// HTML, JS, CSS için → Önce ağdan çek, başarısız olursa cache'ten sun
// Resimler için → Önce ağdan çek, cache'e kaydet, başarısız olursa cache'ten sun
self.addEventListener('fetch', (e) => {
  const request = e.request;

  // Sadece GET isteklerini yönet
  if (request.method !== 'GET') return;

  // Navigation istekleri (HTML sayfaları) - Her zaman ağdan çek
  if (request.mode === 'navigate') {
    e.respondWith(
      fetch(request)
        .then(response => {
          // Başarılı ağ yanıtını cache'e de kaydet
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
          return response;
        })
        .catch(() => caches.match(request).then(r => r || caches.match('/')))
    );
    return;
  }

  // JS, CSS ve diğer dosyalar - Network first
  e.respondWith(
    fetch(request)
      .then(response => {
        // Geçerli yanıtları cache'e kaydet
        if (response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
        }
        return response;
      })
      .catch(() => {
        // Ağ başarısız olursa cache'ten sun
        return caches.match(request);
      })
  );
});

// SW güncellendiğinde tüm açık sekmelere haber ver
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
