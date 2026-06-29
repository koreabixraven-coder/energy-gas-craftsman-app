const CACHE_NAME = 'energy-gas-craftsman-v1-01';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './energy_theory.js',
  './energy_questions.js',
  './gas_theory.js',
  './gas_questions.js',
  './common_theory.js',
  './common_questions.js',
  './sw.js',
  './icon-72.png',
  './icon-96.png',
  './icon-128.png',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).catch(() => null));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys
      .filter(k => k !== CACHE_NAME && (k.startsWith('energy-gas') || k.includes('energy') || k.includes('gas')))
      .map(k => caches.delete(k))
    ))
  );
  self.clients.claim();
});

function isCoreRequest(request){
  const url = new URL(request.url);
  return request.mode === 'navigate'
    || url.pathname.endsWith('/index.html')
    || url.pathname.endsWith('/manifest.json')
    || url.pathname.endsWith('/energy_theory.js')
    || url.pathname.endsWith('/energy_questions.js')
    || url.pathname.endsWith('/gas_theory.js')
    || url.pathname.endsWith('/gas_questions.js')
    || url.pathname.endsWith('/common_theory.js')
    || url.pathname.endsWith('/common_questions.js')
    || url.pathname.endsWith('/sw.js');
}

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  if (isCoreRequest(event.request)) {
    event.respondWith(
      fetch(event.request, {cache:'no-store'}).then(res => {
        const clone = res.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone)).catch(() => null);
        return res;
      }).catch(() => caches.match(event.request).then(cached => cached || caches.match('./index.html')))
    );
    return;
  }
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(res => {
      const clone = res.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone)).catch(() => null);
      return res;
    })).catch(() => caches.match('./index.html'))
  );
});
