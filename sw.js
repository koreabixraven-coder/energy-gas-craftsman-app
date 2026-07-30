// v3.54: 공통 핵심학습·중복출제 핵심문제 메뉴를 삭제하고 에너지·가스 공통핵심중복문제 26문제를 단일 카드에 수록. 기존 문제·기능·이미지 보존.
const CACHE_NAME = 'energy-gas-v3-54-common-core-duplicate-26-single-card-force-cache-safe';
const ASSETS = [
  './',
  './index.html?v=3.54',
  './manifest.json?v=3.54',
  './questions.js?v=3.54',
  './theory.js?v=3.54',
  './sw.js?v=3.54',
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
  './assets/2011_02_13_energy_q35_manual_ignition_sequence.png',
  './assets/2011_07_31_energy_q05_pipe_reducer_symbol.png',
  './assets/2011_07_31_energy_q27_two_element_water_level_control.png',
  './assets/2011_07_31_energy_q56_low_carbon_green_growth_purpose_box.png',
  './assets/2012_02_12_energy_q21_check_valve_symbol.png',
  './assets/2012_04_08_energy_q07_plate_blower_description.png',
  './assets/2012_04_08_energy_q20_boiler_horsepower_definition.png',
  './assets/2012_04_08_energy_q28_powered_pipe_threader.png',
  './assets/2012_07_22_energy_q52_furnace_blower_capacity_box.png',
  './assets/2012_10_20_energy_q42_union_symbol_options.png',
  './assets/2012_10_20_energy_q52_rated_output_load_box.png',
  './assets/2013_04_14_energy_q12_connection_box.png',
  './assets/2013_04_14_energy_q24_flange_symbol_options.png',
  './assets/2013_04_14_energy_q26_shutdown_sequence_box.png',
  './assets/2013_04_14_energy_q47_pitting_corrosion_diagram.png',
  './assets/2013_07_21_energy_q44_weld_symbol_options.png',
  './assets/2013_07_21_energy_q57_rated_output_load_box.png',
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
      client.postMessage({type: 'SW_UPDATED', version: 'v3.54'});
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
    return caches.match('./index.html?v=3.54') || caches.match('./index.html') || Response.error();
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
      return caches.match('./index.html?v=3.54') || caches.match('./index.html') || Response.error();
    }
  })());
});
