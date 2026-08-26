const CACHE = 'khai-thue-v1.3.1';
const ASSETS = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png'];

self.addEventListener('install', function(e){
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(ASSETS); }));
});

self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.filter(function(k){ return k !== CACHE; }).map(function(k){ return caches.delete(k); }));
    }).then(function(){ return self.clients.claim(); })
  );
});

// Cache-first, tự cập nhật cache ngầm khi có bản mới (stale-while-revalidate đơn giản)
self.addEventListener('fetch', function(e){
  if (e.request.method !== 'GET') return;
  // Không cache các request đến Supabase API
  if (e.request.url.includes('supabase.co')) return;
  e.respondWith(
    caches.match(e.request).then(function(cached){
      var fetchPromise = fetch(e.request).then(function(res){
        if (res && res.status === 200) {
          var resClone = res.clone();
          caches.open(CACHE).then(function(c){ c.put(e.request, resClone); });
        }
        return res;
      }).catch(function(){ return cached; });
      return cached || fetchPromise;
    })
  );
});
