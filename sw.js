// v3.81: 에너지관리기능장 2018년 03월 31일 60문제 추가. 기존 11,672문제·기능·기존이미지 보존. 신규 데이터표 이미지 1개 추가. 2013년·2016년 기능장 회차는 빈 데이터 유지.
const CACHE_NAME = 'energy-gas-v3-81-energy-master-craftsman-2018-03-31-force-cache-safe';
const ASSETS = [
  './',
  './index.html?v=3.81',
  './manifest.json?v=3.81',
  './questions.js?v=3.81',
  './theory.js?v=3.81',
  './sw.js?v=3.81',
  './assets/2007_07_15_master_q13_level_detector.png',
  './assets/2007_07_15_master_q48_isometric.png',
  './assets/2007_07_15_master_q57_formulas.png',
  './assets/2006_07_16_master_q04_damage_box.png',
  './assets/2005_07_17_master_q04_density_table.png',
  './assets/2005_07_17_master_q44_isometric.png',
  './assets/2005_07_17_master_q55_data.png',
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
  './assets/2002_04_07_master_q29_formula.png',
  './assets/2002_04_07_master_q39_isometric.png',
  './assets/2002_07_21_master_q43_weld_symbol.png',
  './assets/2002_07_21_master_q56_sales_table.png',
  './assets/2002_07_21_master_q57_u_chart_formula.png',
  './assets/2003_03_30_master_q55_oc_curve.png',
  './assets/2003_07_20_master_q54_shutdown_steps.png',
  './assets/2003_07_20_master_q59_data.png',
  './assets/2003_07_20_master_q60_process_symbols.png',
  './assets/2004_04_04_master_q25_expansion_formula.png',
  './assets/2004_04_04_master_q40_radiator_mark.png',
  './assets/2004_04_04_master_q48_steam_table.png',
  './assets/2004_04_04_master_q57_pert_network.png',
  './assets/2004_04_04_master_q58_process_symbols.png',
  './assets/2004_07_18_master_q42_convector.png',
  './assets/2005_04_03_master_q02_swivel_diagrams.png',
  './assets/2005_04_03_master_q59_maintenance_org_box.png',
  './assets/2008_03_30_master_q39_ts_diagram.png',
  './assets/2008_03_30_master_q47_swivel_diagrams.png',
  './assets/2008_03_30_master_q48_isometric.png',
  './assets/2008_07_13_master_q08_heat_release_formulas.png',
  './assets/2008_07_13_master_q19_heating_definition_box.png',
  './assets/2008_07_13_master_q35_pipe_diameter_formulas.png',
  './assets/2008_07_13_master_q38_conductivity_units.png',
  './assets/2008_07_13_master_q40_enthalpy_table.png',
  './assets/2008_07_13_master_q57_cost_table.png',
  './assets/2009_03_29_master_q35_carnot_formulas.png',
  './assets/2009_03_29_master_q57_sales_table.png',
  './assets/2009_07_12_master_q28_bernoulli_formula.png',
  './assets/2009_07_12_master_q34_injector_steps.png',
  './assets/2009_07_12_master_q55_xbar_rbar_formula.png',
  './icon-72.png',
  './icon-96.png',
  './icon-128.png',
  './icon-192.png',
  './icon-512.png',
  './assets/2010_07_11_master_q53_isometric.png',
  './assets/2011_04_17_master_q17_air_formula_options.png',
  './assets/2011_04_17_master_q18_smoke_formula.png',
  './assets/2011_04_17_master_q60_network.png',
  './assets/2011_07_31_master_q20_level_control.png',
  './assets/2012_04_08_master_q37_damage_box.png',
  './assets/2012_04_08_master_q57_sales_table.png',
  './assets/2012_07_22_master_q50_threaded_cap_symbols.png',
  './assets/2014_04_06_master_q42_pipe_diameter_formulas.png',
  './assets/2014_04_06_master_q49_pipe_projection_symbols.png',
  './assets/2014_04_06_master_q56_sales_table.png',
  './assets/2014_07_20_master_q26_bernoulli_formula.png',
  './assets/2014_07_20_master_q46_swivel_diagrams.png',
  './assets/2014_07_20_master_q58_oc_curve.png',
  './assets/2015_04_04_master_q33_pipe_diameter_formulas.png',
  './assets/2015_04_04_master_q36_carnot_formulas.png',
  './assets/2015_04_04_master_q39_enthalpy_table.png',
  './assets/2015_04_04_master_q60_cost_table.png',
  './assets/2015_07_19_master_q09_boiler_capacity_formula.png',
  './assets/2015_07_19_master_q50_brinell_diagram.png',
  './assets/2017_03_05_master_q33_bernoulli_formula.png',
  './assets/2017_07_08_master_q09_air_formula_options.png',
  './assets/2017_07_08_master_q25_rankine_ts.png',
  './assets/2017_07_08_master_q55_aoa_network.png',
  './assets/2017_07_08_master_q56_standard_time_formulas.png',
  './assets/2017_07_08_master_q59_data.png',
  './assets/2018_03_31_master_q58_data.png',
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
      client.postMessage({type: 'SW_UPDATED', version: 'v3.81'});
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
    return caches.match('./index.html?v=3.81') || caches.match('./index.html') || Response.error();
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
      return caches.match('./index.html?v=3.81') || caches.match('./index.html') || Response.error();
    }
  })());
});
