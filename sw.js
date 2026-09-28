// v4.20: 에너지관리기능장 CBT 모의고사 16회에 2026년 CBT 필기시험 복원문제 (2) 60문제 추가. 기존 데이터/로직 보존.
const CACHE_NAME = 'energy-gas-v4-20-energy-master-cbt-16-force-cache-safe';
const ASSETS = [
  "assets/energy_master_cbt_15_q57_oc_curve.png",
  "assets/energy_master_cbt_12_q50_radiator_symbol.png",
  "assets/energy_master_cbt_08_q46_cross_fitting.png",
  "assets/energy_master_cbt_03_q30_radiator_symbol.png",
  "assets/energy_master_cbt_01_q60_network.png",
  "assets/energy_master_cbt_01_q52_plan_view.png",
  "assets/energy_master_past_2016_04_02_q50_isometric.png",
  "assets/energy_master_past_2017_07_08_q25_rankine_ts.png",
  "assets/energy_master_past_2017_07_08_q55_aoa_network.png",
  "assets/energy_master_past_2015_07_19_q50_brinell_diagram.png",
  "assets/energy_master_past_2015_07_19_q09_boiler_capacity_formula.png",
  "assets/energy_master_past_2015_04_04_q60_cost_slope_table.png",
  "assets/energy_master_past_2015_04_04_q39_enthalpy_table.png",
  "assets/energy_master_past_2015_04_04_q36_carnot_formula.png",
  "assets/energy_master_past_2015_04_04_q33_pipe_diameter_formula.png",
  "assets/energy_master_past_2014_07_20_q58_oc_curve.png",
  "assets/energy_master_past_2014_07_20_q46_swivel_options.png",
  "assets/energy_master_past_2014_04_06_q56_sales_table.png",
  "assets/energy_master_past_2014_04_06_q49_pipe_symbol.png",
  "assets/energy_master_past_2014_04_06_q42_pipe_diameter_formula.png",
  "assets/energy_master_past_2012_07_22_q50_pipe_cap_symbols.png",
  "assets/energy_master_past_2012_07_22_q39_acid_cleaning_sequence.png",
  "assets/energy_master_past_2012_07_22_q06_cyclone_box.png",
  "assets/energy_master_past_2011_04_17_q17_air_formula.png",
  "assets/energy_master_past_2011_04_17_q18_soot_formula.png",
  "assets/energy_master_past_2011_04_17_q60_network.png",
  "assets/energy_master_past_2008_03_30_q39_rankine_ts.png",
  "assets/energy_master_past_2008_03_30_q47_swivel_options.png",
  "assets/energy_master_past_2008_03_30_q48_isometric_options.png",
  "assets/energy_master_past_2007_07_15_q13_level_detector.png",
  "assets/energy_master_past_2007_07_15_q48_isometric_options.png",
  "assets/energy_master_past_2007_07_15_q57_process_formula.png",
  "assets/energy_master_past_2005_07_17_q59_capacity_formula.png",
  "assets/energy_master_past_2005_07_17_q44_isometric.png",
  "assets/energy_master_past_2005_04_03_q59_maintenance_org.png",
  "assets/energy_master_past_2005_04_03_q02_swivel_joint.png",
  "assets/energy_master_past_2004_07_18_q42_convector_symbol.png",
  "assets/energy_master_past_2004_04_04_q57_pert_network.png",
  "assets/energy_master_past_2004_04_04_q48_steam_table.png",
  "assets/energy_master_past_2004_04_04_q60_control_chart_symbol.png",
  "assets/energy_master_past_2004_04_04_q25_formula.png",
  "assets/energy_master_past_2004_04_04_q58_process_symbol.png",
  "assets/energy_master_past_2004_04_04_q40_radiator_symbol.png",
  "assets/energy_master_past_2003_07_20_q60_process_symbol.png",
  "assets/energy_master_past_2003_03_30_q57_pert_symbol.png",
  "assets/energy_master_past_2003_03_30_q55_oc_curve.png",
  "assets/energy_master_past_2002_07_21_q57_u_chart_formula.png",
  "assets/energy_master_past_2002_07_21_q56_sales_table.png",
  "assets/energy_master_past_2002_07_21_q43_welding_symbol.png",
  './',
  './index.html?v=4.19',
  './manifest.json?v=4.19',
  './questions.js?v=4.19',
  './theory.js?v=4.19',
  './sw.js?v=4.19',
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
  './assets/energy_master_expected_01_q86_enthalpy_table.png',
  './assets/energy_master_expected_01_q93_rankine_ts.png',
  './assets/energy_master_expected_02_q32_buoyancy_diagram.png',
  './assets/energy_master_expected_04_q09_steam_table.png',
  './assets/energy_master_expected_09_q29_u_tube.png',
  './assets/energy_master_expected_10_q38_float_level_detector.png',
  './assets/energy_master_expected_12_q15_vacuum_return_device.png',
  './assets/energy_master_expected_12_q19_trap_dimensions.png',
  './assets/energy_master_expected_12_q33_air_vent_installation.png',
  './assets/energy_master_expected_12_q35_water_density_table.png',
  './assets/energy_master_expected_13_q19_symbol.png',
  './assets/energy_master_expected_13_q20_symbol.png',
  './assets/energy_master_past_2002_04_07_q29_formula.png',
  './assets/energy_master_past_2002_04_07_q39_isometric.png',
  './icon-72.png',
  './icon-96.png',
  './icon-128.png',
  './icon-192.png',
  './icon-512.png',
  "./assets/energy_master_past_2008_07_13_q08_heat_release_formula.png",
  "./assets/energy_master_past_2008_07_13_q19_heating_definition.png",
  "./assets/energy_master_past_2008_07_13_q35_pipe_diameter_formula.png",
  "./assets/energy_master_past_2008_07_13_q38_thermal_conductivity_unit.png",
  "./assets/energy_master_past_2008_07_13_q40_throttle_enthalpy_table.png",
  "./assets/energy_master_past_2008_07_13_q57_cost_slope_table.png",
  "./assets/energy_master_past_2009_03_29_q35_carnot_formula.png",
  "./assets/energy_master_past_2009_03_29_q57_sales_table.png",
  './assets/energy_master_past_2010_07_11_q53_isometric_options.png',
  './assets/energy_master_past_2011_07_31_q20_level_control.png',
  './assets/energy_master_past_2012_04_08_q57_sales_table.png',
  './assets/energy_master_past_2013_04_14_q40_ts_cycle.png',
  './assets/energy_master_past_2013_04_14_q41_tensile_curve.png',
  './assets/energy_master_cbt_06_q33_detector.png',
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
      client.postMessage({type: 'SW_UPDATED', version: 'v3.97'});
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
    return caches.match('./index.html?v=4.19') || caches.match('./index.html') || Response.error();
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
      return caches.match('./index.html?v=4.19') || caches.match('./index.html') || Response.error();
    }
  })());
});

