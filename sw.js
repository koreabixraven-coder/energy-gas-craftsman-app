// v3.34: 에너지관리기능사 2010년 01월 31일 교사용 PDF 60문제 추가. Q6 원본 공식 이미지, Q36 페이지 연결, Q44 좌우 단 연결. 기존 문제·기능·이미지 보존.
const CACHE_NAME = 'energy-gas-v3-34-energy-2010-01-31-60-answer-double-checked-q06-source-image-q36-page-split-q44-column-split-global-ans-safe-menu-chain-preserved-mobile-bottom-dark-safe';
const ASSETS = [
  './',
  './index.html?v=3.34',
  './manifest.json?v=3.34',
  './questions.js?v=3.34',
  './theory.js?v=3.34',
  './sw.js?v=3.34',
  './assets/2005_01_30_q45_steps.png',
  './assets/2005_04_03_q46_air_vent.png',
  './assets/2002_07_21_q22.png',
  './assets/2003_07_20_q38.png',
  './assets/2004_10_10_q25_formula.png',
  './assets/2004_10_10_q53_steps.png',
  './assets/2005_10_02_q31.png',
  './assets/2005_10_02_q42.png',
  './assets/2006_01_22_q54.png',
  './assets/2007_01_28_q21.png',
  './assets/2007_01_28_q30.png',
  './assets/2007_01_28_q32.png',
  './assets/2007_01_28_q39.png',
  './assets/2007_04_01_q28_radiator_mark.png',
  './assets/2007_07_15_energy_q34_open_expansion_tank.png',
  './assets/2007_07_15_q06.png',
  './assets/2007_07_15_q44.png',
  './assets/2007_07_15_q57.png',
  './assets/2007_09_16_q18.png',
  './assets/2007_09_16_q42.png',
  './assets/2007_09_16_q47.png',
  './assets/2008_02_03_q60.png',
  './assets/2008_03_30_q51.png',
  './assets/2008_07_13_energy_q16_induced_draft_features.png',
  './assets/2008_07_13_energy_q45_shutdown_sequence.png',
  './assets/2008_10_05_energy_q37_lift_fitting.png',
  './assets/2009_01_18_energy_q39_pipe_thermal_expansion.png',
  './assets/2009_03_29_energy_q18_sequence_interlock_box.png',
  './assets/2009_03_29_energy_q30_emergency_low_water_sequence.png',
  './assets/2009_03_29_energy_q36_manual_ignition_sequence.png',
  './assets/2010_01_31_energy_q06_fan_power_formula.png',
  './assets/2008_10_05_q01.png',
  './assets/2008_10_05_q51.png',
  './icon-72.png',
  './icon-96.png',
  './icon-128.png',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map(k => {
      if (k.startsWith('energy-gas') || k.includes('energy-gas')) return caches.delete(k);
      return Promise.resolve(false);
    }));
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(ASSETS).catch(() => null);
  })());
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map(k => k !== CACHE_NAME ? caches.delete(k) : Promise.resolve(false)));
    await self.clients.claim();
    const clientList = await self.clients.matchAll({type: 'window', includeUncontrolled: true});
    for (const client of clientList) {
      client.postMessage({type: 'SW_UPDATED', version: 'v3.34'});
    }
  })());
});

function isCoreRequest(req) {
  const url = new URL(req.url);
  return req.mode === 'navigate'
    || url.pathname.endsWith('/')
    || url.pathname.endsWith('/index.html')
    || url.pathname.endsWith('/questions.js')
    || url.pathname.endsWith('/theory.js')
    || url.pathname.endsWith('/manifest.json')
    || url.pathname.endsWith('/sw.js');
}

async function networkFirst(req) {
  try {
    const fresh = await fetch(req, { cache: 'no-store' });
    const cache = await caches.open(CACHE_NAME);
    await cache.put(req, fresh.clone()).catch(() => null);
    return fresh;
  } catch (err) {
    const cached = await caches.match(req);
    if (cached) return cached;
    return caches.match('./index.html?v=3.34') || caches.match('./index.html') || Response.error();
  }
}

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  if (isCoreRequest(event.request)) {
    event.respondWith(networkFirst(event.request));
    return;
  }
  event.respondWith((async () => {
    const cached = await caches.match(event.request);
    if (cached) return cached;
    try {
      const res = await fetch(event.request);
      const cache = await caches.open(CACHE_NAME);
      await cache.put(event.request, res.clone()).catch(() => null);
      return res;
    } catch (err) {
      return caches.match('./index.html?v=3.34') || caches.match('./index.html') || Response.error();
    }
  })());
});
