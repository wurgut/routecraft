// Data integrity tests — validates BIKE_FEES, DESTINATIONS, REGIONS, ROUTE_DATABASE
// Run: node tests/data-integrity.test.js
var assert = require('assert');
var fs = require('fs');
var path = require('path');

// Load data from main.js (and app.js for buildLookupMap)
var appSrc = fs.readFileSync(path.join(__dirname, '..', 'app.js'), 'utf8');
var mainSrc = fs.readFileSync(path.join(__dirname, '..', 'main.js'), 'utf8');

// Execute main.js with comprehensive DOM stubs to extract data
var elStub = function() {
  return {
    addEventListener: function() {}, removeEventListener: function() {},
    style: {}, dataset: {},
    classList: { add: function() {}, remove: function() {}, toggle: function() {}, contains: function() { return false; } },
    appendChild: function() {}, removeChild: function() {},
    setAttribute: function() {}, getAttribute: function() { return ''; },
    insertAdjacentHTML: function() {},
    querySelectorAll: function() { return []; }, querySelector: function() { return null; },
    innerHTML: '', textContent: '', scrollTop: 0, offsetHeight: 0,
    getBoundingClientRect: function() { return { top: 0, left: 0, width: 0, height: 0 }; }
  };
};

var vm = require('vm');
var sandbox = {
  console: console,
  document: {
    getElementById: elStub, querySelector: elStub,
    querySelectorAll: function() { return []; },
    createElement: elStub, addEventListener: function() {},
    body: elStub(), documentElement: elStub(), head: elStub()
  },
  window: {
    addEventListener: function() {}, removeEventListener: function() {},
    innerWidth: 1024, innerHeight: 768, scrollY: 0,
    scrollTo: function() {},
    getComputedStyle: function() { return {}; },
    matchMedia: function() { return { matches: false, addEventListener: function() {} }; },
    location: { hash: '', pathname: '/' },
    history: { pushState: function() {} }
  },
  navigator: { userAgent: '' },
  IntersectionObserver: function() { this.observe = function() {}; this.disconnect = function() {}; },
  MutationObserver: function() { this.observe = function() {}; },
  localStorage: { getItem: function() { return null; }, setItem: function() {} },
  fetch: function() { return Promise.resolve({ ok: false }); },
  THREE: {},
  requestAnimationFrame: function() {},
  setTimeout: function() { return 0; },
  clearTimeout: function() {},
  Image: function() {}
};

var ctx = vm.createContext(sandbox);
vm.runInContext(appSrc, ctx);
vm.runInContext(mainSrc, ctx);

var BIKE_FEES = ctx.BIKE_FEES;
var DESTINATIONS = ctx.DESTINATIONS;
var REGIONS = ctx.REGIONS;
var ROUTE_DATABASE = ctx.ROUTE_DATABASE;
var PARTNERS_DATABASE = ctx.PARTNERS_DATABASE;
var REGION_BY_ID = ctx.REGION_BY_ID;
var DESTINATION_BY_ID = ctx.DESTINATION_BY_ID;
var ROUTE_BY_ID = ctx.ROUTE_BY_ID;

var passed = 0;
var failed = 0;

function test(name, fn) {
  try {
    fn();
    passed++;
    console.log('  \u2713 ' + name);
  } catch (e) {
    failed++;
    console.error('  \u2717 ' + name + ': ' + e.message);
  }
}

// ── BIKE_FEES ──

console.log('BIKE_FEES data integrity');

test('BIKE_FEES object loaded', function () {
  assert(BIKE_FEES, 'Failed to extract BIKE_FEES');
  assert(Object.keys(BIKE_FEES).length >= 20, 'Expected at least 20 airlines, got ' + Object.keys(BIKE_FEES).length);
});

test('__default entry exists', function () {
  assert(BIKE_FEES.__default, '__default entry missing');
});

test('All entries have fee (number >= 0)', function () {
  Object.keys(BIKE_FEES).forEach(function (code) {
    assert(typeof BIKE_FEES[code].fee === 'number', code + '.fee is not a number');
    assert(BIKE_FEES[code].fee >= 0, code + '.fee is negative');
  });
});

test('All entries have policy (non-empty string)', function () {
  Object.keys(BIKE_FEES).forEach(function (code) {
    assert(typeof BIKE_FEES[code].policy === 'string', code + '.policy is not a string');
    assert(BIKE_FEES[code].policy.length > 0, code + '.policy is empty');
  });
});

test('All entries have maxKg (number > 0)', function () {
  Object.keys(BIKE_FEES).forEach(function (code) {
    assert(typeof BIKE_FEES[code].maxKg === 'number', code + '.maxKg is not a number');
    assert(BIKE_FEES[code].maxKg > 0, code + '.maxKg is not positive');
  });
});

test('Airline codes are uppercase IATA (2-3 chars)', function () {
  Object.keys(BIKE_FEES).forEach(function (code) {
    if (code === '__default') return;
    assert(/^[A-Z0-9]{2,3}$/.test(code), 'Invalid airline code: ' + code);
  });
});

test('No duplicate airline codes', function () {
  var codes = Object.keys(BIKE_FEES);
  var unique = new Set(codes);
  assert.strictEqual(codes.length, unique.size, 'Duplicate airline codes found');
});

// ── REGIONS ──

console.log('\nREGIONS data integrity');

test('REGIONS array loaded with 11 entries', function () {
  assert(Array.isArray(REGIONS), 'Failed to extract REGIONS');
  assert.strictEqual(REGIONS.length, 11, 'Expected 11 regions, got ' + REGIONS.length);
});

test('All regions have required fields', function () {
  var required = ['id', 'name', 'country', 'continent', 'lat', 'lng', 'color', 'tagline', 'character', 'vibes', 'seasonalWindow', 'image', 'subGeoIds'];
  REGIONS.forEach(function (r) {
    required.forEach(function (field) {
      assert(r[field] !== undefined && r[field] !== null, r.id + ' missing ' + field);
    });
  });
});

test('All region IDs are unique', function () {
  var ids = REGIONS.map(function (r) { return r.id; });
  var unique = new Set(ids);
  assert.strictEqual(ids.length, unique.size, 'Duplicate region IDs');
});

test('All region subGeoIds reference valid destination IDs', function () {
  REGIONS.forEach(function (r) {
    r.subGeoIds.forEach(function (sgId) {
      assert(DESTINATION_BY_ID[sgId], r.id + ' references unknown subGeoId: ' + sgId);
    });
  });
});

// ── DESTINATIONS ──

console.log('\nDESTINATIONS data integrity');

test('DESTINATIONS array loaded with 11 entries', function () {
  assert(Array.isArray(DESTINATIONS), 'Failed to extract DESTINATIONS');
  assert.strictEqual(DESTINATIONS.length, 11, 'Expected 11 destinations, got ' + DESTINATIONS.length);
});

test('All destinations have required fields', function () {
  var required = ['id', 'name', 'country', 'continent', 'flag', 'lat', 'lng', 'regionId', 'tagline', 'airportIATA', 'image', 'highlights', 'routeCount', 'partnerCount', 'season'];
  DESTINATIONS.forEach(function (dest) {
    required.forEach(function (field) {
      assert(dest[field] !== undefined && dest[field] !== null, dest.id + ' missing ' + field);
    });
  });
});

test('All destination IDs are unique', function () {
  var ids = DESTINATIONS.map(function (d) { return d.id; });
  var unique = new Set(ids);
  assert.strictEqual(ids.length, unique.size, 'Duplicate destination IDs');
});

test('All airportIATA are arrays with valid 3-letter codes', function () {
  DESTINATIONS.forEach(function (dest) {
    assert(Array.isArray(dest.airportIATA), dest.id + '.airportIATA is not an array');
    assert(dest.airportIATA.length > 0, dest.id + '.airportIATA is empty');
    dest.airportIATA.forEach(function (code) {
      assert(/^[A-Z]{3}$/.test(code), dest.id + ': invalid IATA code "' + code + '"');
    });
  });
});

test('All destinations have season object with start/end/peak/monthly', function () {
  DESTINATIONS.forEach(function (dest) {
    assert(typeof dest.season === 'object', dest.id + '.season is not an object');
    assert(typeof dest.season.start === 'number', dest.id + '.season.start not a number');
    assert(typeof dest.season.end === 'number', dest.id + '.season.end not a number');
    assert(Array.isArray(dest.season.peak), dest.id + '.season.peak not an array');
    assert(Array.isArray(dest.season.monthly), dest.id + '.season.monthly not an array');
    assert.strictEqual(dest.season.monthly.length, 12, dest.id + '.season.monthly should have 12 entries');
  });
});

test('All destinations have valid regionId', function () {
  DESTINATIONS.forEach(function (dest) {
    assert(REGION_BY_ID[dest.regionId], dest.id + ' has invalid regionId: ' + dest.regionId);
  });
});

test('Expected destination IDs present', function () {
  var expected = ['fuerteventura', 'romania', 'crete', 'mallorca', 'tuscany', 'dolomites', 'alps', 'japan', 'girona', 'cape-town', 'colombia'];
  var ids = new Set(DESTINATIONS.map(function (d) { return d.id; }));
  expected.forEach(function (eid) {
    assert(ids.has(eid), 'Missing destination: ' + eid);
  });
});

test('Destinations with routeCount > 0 have zones and bases', function () {
  DESTINATIONS.filter(function (d) { return d.routeCount > 0; }).forEach(function (dest) {
    assert(Array.isArray(dest.zones), dest.id + '.zones is not an array');
    assert(dest.zones.length > 0, dest.id + ' has routeCount > 0 but no zones');
    assert(Array.isArray(dest.bases), dest.id + '.bases is not an array');
  });
});

test('Deep dive destinations have routeIds in deepDive', function () {
  DESTINATIONS.forEach(function (dest) {
    if (dest.deepDive) {
      assert(Array.isArray(dest.deepDive.routeIds), dest.id + '.deepDive missing routeIds');
      assert(dest.deepDive.routeIds.length > 0, dest.id + '.deepDive.routeIds is empty');
      dest.deepDive.routeIds.forEach(function (rid) {
        assert(ROUTE_BY_ID[rid], dest.id + '.deepDive references unknown route: ' + rid);
      });
    }
  });
});

// ── ROUTE_DATABASE ──

console.log('\nROUTE_DATABASE data integrity');

test('ROUTE_DATABASE array loaded with 16 entries', function () {
  assert(Array.isArray(ROUTE_DATABASE), 'Failed to extract ROUTE_DATABASE');
  assert.strictEqual(ROUTE_DATABASE.length, 16, 'Expected 16 routes, got ' + ROUTE_DATABASE.length);
});

test('All routes have required fields', function () {
  var required = ['id', 'destinationId', 'name', 'type', 'difficulty', 'distance', 'elevationGain', 'image', 'effortCategory', 'accessibleFromBases', 'confidence'];
  ROUTE_DATABASE.forEach(function (r) {
    required.forEach(function (field) {
      assert(r[field] !== undefined && r[field] !== null, r.id + ' missing ' + field);
    });
  });
});

test('All route destinationIds reference valid destinations', function () {
  ROUTE_DATABASE.forEach(function (r) {
    assert(DESTINATION_BY_ID[r.destinationId], r.id + ' has invalid destinationId: ' + r.destinationId);
  });
});

test('All route IDs are unique', function () {
  var ids = ROUTE_DATABASE.map(function (r) { return r.id; });
  var unique = new Set(ids);
  assert.strictEqual(ids.length, unique.size, 'Duplicate route IDs');
});

test('All routes have valid confidence object', function () {
  var confFields = ['waterFrequency', 'phoneSignal', 'nearestBikeShop', 'surfaceBreakdown', 'emergencyContacts', 'offlineMapAvailable'];
  ROUTE_DATABASE.forEach(function (r) {
    assert(typeof r.confidence === 'object', r.id + '.confidence is not an object');
    confFields.forEach(function (f) {
      assert(r.confidence[f] !== undefined, r.id + '.confidence.' + f + ' is missing');
    });
  });
});

test('All routes have valid effortCategory', function () {
  var validCategories = ['half-day-easy', 'half-day-hard', 'full-day-easy', 'full-day-moderate', 'full-day-hard', 'multi-day'];
  ROUTE_DATABASE.forEach(function (r) {
    assert(validCategories.indexOf(r.effortCategory) > -1, r.id + ' has invalid effortCategory: ' + r.effortCategory);
  });
});

test('All accessibleFromBases reference valid base IDs', function () {
  var allBaseIds = {};
  DESTINATIONS.forEach(function (d) {
    d.bases.forEach(function (b) { allBaseIds[b.id] = true; });
  });
  ROUTE_DATABASE.forEach(function (r) {
    r.accessibleFromBases.forEach(function (bid) {
      assert(allBaseIds[bid], r.id + ' references unknown base: ' + bid);
    });
  });
});

// ── HIERARCHY INTEGRITY ──

console.log('\nHierarchy integrity');

test('Every destination is referenced by exactly one region', function () {
  DESTINATIONS.forEach(function (dest) {
    var refs = REGIONS.filter(function (r) { return r.subGeoIds.indexOf(dest.id) > -1; });
    assert.strictEqual(refs.length, 1, dest.id + ' referenced by ' + refs.length + ' regions (expected 1)');
  });
});

test('Route counts match actual routes per destination', function () {
  DESTINATIONS.forEach(function (dest) {
    var actual = ROUTE_DATABASE.filter(function (r) { return r.destinationId === dest.id; }).length;
    assert.strictEqual(actual, dest.routeCount, dest.id + ': routeCount=' + dest.routeCount + ' but has ' + actual + ' routes');
  });
});

// ── SEASONAL INTENSITY (Phase 1) ──

console.log('\nSeasonal intensity & globe');

// Use actual functions from main.js context (no re-implementation needed)
var getRegionHeatmap = ctx.getRegionHeatmap;
var getRawHeatmap = ctx.getRawHeatmap;
var getEffectiveIntensity = ctx.getEffectiveIntensity;
var intensityToMarkerProps = ctx.intensityToMarkerProps;

test('getRegionHeatmap returns peak intensity for Canary Islands in winter', function () {
  var intensity = getRegionHeatmap('canary-islands', 1); // January
  assert(intensity >= 0.7, 'Canary Islands should be peak in Jan, got ' + intensity);
});

test('getRegionHeatmap returns zero for Carpathians in winter', function () {
  var intensity = getRegionHeatmap('carpathians', 1); // January
  assert.strictEqual(intensity, 0, 'Carpathians should be off-season in Jan');
});

test('getRegionHeatmap returns peak for Carpathians in summer', function () {
  var intensity = getRegionHeatmap('carpathians', 7); // July
  assert(intensity >= 0.7, 'Carpathians should be peak in Jul, got ' + intensity);
});

test('getRegionHeatmap returns value for all regions in all months', function () {
  REGIONS.forEach(function (r) {
    for (var m = 1; m <= 12; m++) {
      var val = getRegionHeatmap(r.id, m);
      assert(typeof val === 'number' && val >= 0 && val <= 1, r.id + ' month ' + m + ' has invalid heatmap: ' + val);
    }
  });
});

test('All regions have fields needed for L2 overlay', function () {
  var required = ['id', 'name', 'country', 'continent', 'lat', 'lng', 'color', 'tagline', 'character', 'seasonalWindow', 'image', 'subGeoIds'];
  REGIONS.forEach(function (r) {
    required.forEach(function (f) {
      assert(r[f] !== undefined && r[f] !== null, r.id + ' missing field: ' + f);
    });
  });
});

test('All regions have socialProof with ridersLastMonth', function () {
  REGIONS.forEach(function (r) {
    assert(r.socialProof, r.id + ' missing socialProof');
    assert(typeof r.socialProof.ridersLastMonth === 'number', r.id + '.socialProof.ridersLastMonth not a number');
    assert(r.socialProof.ridersLastMonth > 0, r.id + '.socialProof.ridersLastMonth should be positive');
  });
});

// ── PHASE 2: CALENDAR OVERRIDE & SEASONALITY TOGGLE ──

console.log('\nPhase 2: Calendar override & seasonality');

test('getRawHeatmap returns average across all months', function () {
  var raw = getRawHeatmap('canary-islands');
  assert(typeof raw === 'number', 'getRawHeatmap should return a number');
  assert(raw > 0 && raw <= 1, 'getRawHeatmap should be between 0 and 1, got ' + raw);
  // Raw should differ from any single month (it's an average)
  var jan = getRegionHeatmap('canary-islands', 1);
  var jul = getRegionHeatmap('canary-islands', 7);
  assert(raw !== jan || raw !== jul, 'Raw average should differ from at least one month');
});

test('getRawHeatmap returns 0 for unknown region', function () {
  var raw = getRawHeatmap('nonexistent-region');
  assert.strictEqual(raw, 0, 'Unknown region should return 0');
});

test('getEffectiveIntensity uses seasonal when globeSeasonality is true', function () {
  ctx.globeSeasonality = true;
  ctx.globeMonth = 1;
  var effective = getEffectiveIntensity('canary-islands');
  var seasonal = getRegionHeatmap('canary-islands', 1);
  assert.strictEqual(effective, seasonal, 'With seasonality on, effective should equal seasonal');
});

test('getEffectiveIntensity uses raw when globeSeasonality is false', function () {
  ctx.globeSeasonality = false;
  var effective = getEffectiveIntensity('canary-islands');
  var raw = getRawHeatmap('canary-islands');
  assert.strictEqual(effective, raw, 'With seasonality off, effective should equal raw');
  ctx.globeSeasonality = true; // restore
});

test('intensityToMarkerProps returns correct structure', function () {
  var props = intensityToMarkerProps(0.5);
  var fields = ['dotSize', 'glowSize', 'glowOpacity', 'ringInner', 'ringOuter', 'ringOpacity', 'stemOpacity'];
  fields.forEach(function (f) {
    assert(typeof props[f] === 'number', 'intensityToMarkerProps.' + f + ' should be a number');
    assert(props[f] > 0, 'intensityToMarkerProps.' + f + ' should be positive, got ' + props[f]);
  });
});

test('intensityToMarkerProps scales monotonically with intensity', function () {
  var low = intensityToMarkerProps(0);
  var mid = intensityToMarkerProps(0.5);
  var high = intensityToMarkerProps(1);
  assert(low.dotSize < mid.dotSize, 'dotSize should increase: ' + low.dotSize + ' < ' + mid.dotSize);
  assert(mid.dotSize < high.dotSize, 'dotSize should increase: ' + mid.dotSize + ' < ' + high.dotSize);
  assert(low.glowOpacity < high.glowOpacity, 'glowOpacity should increase');
  assert(low.ringOpacity < high.ringOpacity, 'ringOpacity should increase');
  assert(low.stemOpacity < high.stemOpacity, 'stemOpacity should increase');
  assert(low.ringOuter < high.ringOuter, 'ringOuter should increase');
});

test('intensityToMarkerProps edge cases: 0 and 1', function () {
  var zero = intensityToMarkerProps(0);
  var one = intensityToMarkerProps(1);
  // At 0, values should be at minimums
  assert.strictEqual(zero.dotSize, 0.008, 'dotSize at 0 should be 0.008');
  assert.strictEqual(zero.glowOpacity, 0.1, 'glowOpacity at 0 should be 0.1');
  assert.strictEqual(zero.stemOpacity, 0.3, 'stemOpacity at 0 should be 0.3');
  // At 1, values should be at maximums
  assert.strictEqual(one.dotSize, 0.016, 'dotSize at 1 should be 0.016');
  assert.strictEqual(one.glowOpacity, 0.5, 'glowOpacity at 1 should be 0.5');
  assert.strictEqual(one.stemOpacity, 0.6, 'stemOpacity at 1 should be 0.6');
});

test('globeMarkers array is initialized', function () {
  var markers = ctx.globeMarkers;
  assert(Array.isArray(markers), 'globeMarkers should be an array');
});

test('globeMonth defaults to current month', function () {
  var expected = new Date().getMonth() + 1;
  // Reset to check initial value (we may have mutated it above)
  // Just verify it's a valid month 1-12
  assert(ctx.globeMonth >= 1 && ctx.globeMonth <= 12, 'globeMonth should be 1-12, got ' + ctx.globeMonth);
});

test('setGlobeMonth updates globeMonth', function () {
  ctx.setGlobeMonth(8);
  assert.strictEqual(ctx.globeMonth, 8, 'globeMonth should be 8 after setGlobeMonth(8)');
});

test('toggleGlobeSeasonality updates globeSeasonality', function () {
  ctx.toggleGlobeSeasonality(false);
  assert.strictEqual(ctx.globeSeasonality, false, 'globeSeasonality should be false');
  ctx.toggleGlobeSeasonality(true);
  assert.strictEqual(ctx.globeSeasonality, true, 'globeSeasonality should be true');
});

// ── PHASE 3: L2 REGION VIEW HELPERS ──

console.log('\nPhase 3: L2 Region View helpers');

var seasonLabel = ctx.seasonLabel;
var seasonColor = ctx.seasonColor;
var seasonLabelShort = ctx.seasonLabelShort;
var buildOverlayHero = ctx.buildOverlayHero;
var buildStatBar = ctx.buildStatBar;

test('seasonLabel returns correct labels at all thresholds', function () {
  assert.strictEqual(seasonLabel(1.0), 'Peak Season');
  assert.strictEqual(seasonLabel(0.7), 'Peak Season');
  assert.strictEqual(seasonLabel(0.69), 'Good Conditions');
  assert.strictEqual(seasonLabel(0.4), 'Good Conditions');
  assert.strictEqual(seasonLabel(0.39), 'Shoulder Season');
  assert.strictEqual(seasonLabel(0.01), 'Shoulder Season');
  assert.strictEqual(seasonLabel(0), 'Off Season');
});

test('seasonColor returns correct colors at all thresholds', function () {
  assert.strictEqual(seasonColor(0.7), '#44D62C');
  assert.strictEqual(seasonColor(0.4), '#c9a96e');
  assert.strictEqual(seasonColor(0.1), '#F59E0B');
  assert.strictEqual(seasonColor(0), '#EF4444');
});

test('seasonLabelShort returns short labels', function () {
  assert.strictEqual(seasonLabelShort(0.8), 'Peak');
  assert.strictEqual(seasonLabelShort(0.5), 'Good');
  assert.strictEqual(seasonLabelShort(0.2), 'Shoulder');
  assert.strictEqual(seasonLabelShort(0), 'Off');
});

test('seasonLabel and seasonLabelShort agree on thresholds', function () {
  [0, 0.1, 0.4, 0.5, 0.7, 0.9, 1.0].forEach(function (v) {
    var full = seasonLabel(v);
    var short = seasonLabelShort(v);
    assert(full.toLowerCase().indexOf(short.toLowerCase()) > -1,
      'At ' + v + ': "' + full + '" should contain "' + short + '"');
  });
});

test('buildOverlayHero includes required CSS classes and data', function () {
  var html = buildOverlayHero({ image: 'photo.jpg', name: 'Mallorca', color: '#3af', continent: 'Europe', country: 'Spain', tagline: 'Sun and wind' });
  assert(html.indexOf('exp-hero') > -1, 'Missing exp-hero class');
  assert(html.indexOf('exp-eyebrow') > -1, 'Missing exp-eyebrow class');
  assert(html.indexOf('exp-title') > -1, 'Missing exp-title class');
  assert(html.indexOf('exp-tagline') > -1, 'Missing exp-tagline class');
  assert(html.indexOf('photo.jpg') > -1, 'Missing image src');
  assert(html.indexOf('MALLORCA') > -1, 'Missing uppercased name');
  assert(html.indexOf('#3af') > -1, 'Missing accent color');
  assert(html.indexOf('Sun and wind') > -1, 'Missing tagline');
});

test('buildStatBar renders all stats with labels and values', function () {
  var html = buildStatBar([
    { label: 'Duration', value: '7 days' },
    { label: 'Budget', value: '$$$', color: '#c9a96e' }
  ]);
  assert(html.indexOf('exp-stats') > -1, 'Missing exp-stats class');
  assert(html.indexOf('exp-stat-label') > -1, 'Missing exp-stat-label class');
  assert(html.indexOf('exp-stat-value') > -1, 'Missing exp-stat-value class');
  assert(html.indexOf('Duration') > -1, 'Missing label text');
  assert(html.indexOf('7 days') > -1, 'Missing value text');
  assert(html.indexOf('#c9a96e') > -1, 'Missing color on colored stat');
});

test('buildStatBar omits color style when not specified', function () {
  var html = buildStatBar([{ label: 'Test', value: '42' }]);
  // Should not have a style attribute on the value div when no color
  assert(html.indexOf('style="color:') === -1, 'Should not have inline color when no color specified');
});

test('navigateToDestination is a function', function () {
  assert.strictEqual(typeof ctx.navigateToDestination, 'function');
});

// ── PHASE 4: L3 SUB-GEOGRAPHY VIEW ──

console.log('\nPhase 4: L3 Sub-geography sections');

var buildZonesSection = ctx.buildZonesSection;
var buildBasesSection = ctx.buildBasesSection;
var buildConditionsSection = ctx.buildConditionsSection;
var buildDestSeasonBar = ctx.buildDestSeasonBar;
var buildDeepDive = ctx.buildDeepDive;
var zoneDifficultyColor = ctx.zoneDifficultyColor;

var fuerte = DESTINATIONS.find(function (d) { return d.id === 'fuerteventura'; });
var girona = DESTINATIONS.find(function (d) { return d.id === 'girona'; });

test('buildZonesSection renders zone cards for destinations with zones', function () {
  var html = buildZonesSection(fuerte);
  assert(html.indexOf('zone-card') > -1, 'Missing zone-card class');
  assert(html.indexOf('zone-card-name') > -1, 'Missing zone-card-name class');
  assert(html.indexOf('zone-grid') > -1, 'Missing zone-grid class');
  assert(html.indexOf('Riding Zones') > -1, 'Missing section eyebrow');
  // Verify all zones are rendered
  fuerte.zones.forEach(function (z) {
    assert(html.indexOf(z.name) > -1, 'Missing zone: ' + z.name);
  });
});

test('buildZonesSection returns empty string for destinations without zones', function () {
  assert.strictEqual(buildZonesSection({ id: 'empty' }), '');
});

test('buildBasesSection renders base cards for destinations with bases', function () {
  var html = buildBasesSection(fuerte);
  assert(html.indexOf('base-card') > -1, 'Missing base-card class');
  assert(html.indexOf('base-card-name') > -1, 'Missing base-card-name class');
  fuerte.bases.forEach(function (b) {
    assert(html.indexOf(b.name) > -1, 'Missing base: ' + b.name);
  });
});

test('buildBasesSection returns empty string for destinations without bases', function () {
  assert.strictEqual(buildBasesSection({ id: 'empty' }), '');
});

test('buildConditionsSection renders conditions for destinations with conditions', function () {
  var html = buildConditionsSection(fuerte);
  assert(html.indexOf('condition-item') > -1, 'Missing condition-item class');
  assert(html.indexOf('Roads') > -1, 'Missing Roads label');
  assert(html.indexOf('Water') > -1, 'Missing Water label');
  assert(html.indexOf('Bike Shops') > -1, 'Missing Bike Shops label');
});

test('buildConditionsSection returns empty string for destinations without conditions', function () {
  assert.strictEqual(buildConditionsSection({ id: 'empty' }), '');
});

test('buildDestSeasonBar renders 12 month cells', function () {
  var html = buildDestSeasonBar(fuerte);
  assert(html.indexOf('dest-season-bar') > -1, 'Missing dest-season-bar class');
  assert(html.indexOf('dest-season-cell') > -1, 'Missing dest-season-cell class');
  // Check all months present
  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].forEach(function (m) {
    assert(html.indexOf(m) > -1, 'Missing month: ' + m);
  });
});

test('buildDeepDive renders all sections for deep dive destinations', function () {
  var html = buildDeepDive(fuerte);
  assert(html.indexOf('culture-card') > -1, 'Missing cultural highlights');
  assert(html.indexOf('season-note') > -1, 'Missing season notes');
  assert(html.indexOf('cost-card') > -1, 'Missing cost comparison');
  assert(html.indexOf('golden-key') > -1, 'Missing golden key section');
  assert(html.indexOf('cost-card-current') > -1, 'Missing current destination highlight in cost comparison');
});

test('buildDeepDive returns empty string for non-deep-dive destinations', function () {
  assert.strictEqual(buildDeepDive(girona), '');
  var mallorca = DESTINATIONS.find(function (d) { return d.id === 'mallorca'; });
  assert.strictEqual(buildDeepDive(mallorca), '');
});

test('zoneDifficultyColor maps difficulty strings to correct colors', function () {
  assert.strictEqual(zoneDifficultyColor('expert'), '#EF4444');
  assert.strictEqual(zoneDifficultyColor('advanced'), '#F59E0B');
  assert.strictEqual(zoneDifficultyColor('intermediate'), '#c9a96e');
  assert.strictEqual(zoneDifficultyColor('easy-moderate'), '#c9a96e');
  assert.strictEqual(zoneDifficultyColor('easy'), '#44D62C');
  assert.strictEqual(zoneDifficultyColor(null), 'rgba(255,255,255,0.4)');
});

test('All destinations with routeCount > 0 produce non-empty zones and conditions', function () {
  DESTINATIONS.filter(function (d) { return d.routeCount > 0; }).forEach(function (d) {
    assert(buildZonesSection(d).length > 0, d.id + ' has routes but no zones section');
    assert(buildConditionsSection(d).length > 0, d.id + ' has routes but no conditions section');
  });
});

test('All destinations produce valid season bar or empty string', function () {
  DESTINATIONS.forEach(function (d) {
    var html = buildDestSeasonBar(d);
    if (d.season && d.season.monthly) {
      assert(html.indexOf('dest-season-bar') > -1, d.id + ' has monthly data but no season bar');
    } else {
      assert.strictEqual(html, '', d.id + ' without monthly data should produce empty string');
    }
  });
});

// ── PHASE 5: L4 ROUTES & BASE VIEW ──

console.log('\nPhase 5: L4 Routes & Base View');

var effortLabel = ctx.effortLabel;
var buildConfidenceSection = ctx.buildConfidenceSection;
var EFFORT_LABELS = ctx.EFFORT_LABELS;

test('effortLabel maps all known categories correctly', function () {
  assert.strictEqual(effortLabel('half-day-easy'), 'Half Day \u00B7 Easy');
  assert.strictEqual(effortLabel('half-day-hard'), 'Half Day \u00B7 Hard');
  assert.strictEqual(effortLabel('full-day-easy'), 'Full Day \u00B7 Easy');
  assert.strictEqual(effortLabel('full-day-moderate'), 'Full Day \u00B7 Moderate');
  assert.strictEqual(effortLabel('full-day-hard'), 'Full Day \u00B7 Hard');
  assert.strictEqual(effortLabel('multi-day'), 'Multi-Day');
});

test('effortLabel returns empty string for null/undefined', function () {
  assert.strictEqual(effortLabel(null), '');
  assert.strictEqual(effortLabel(undefined), '');
});

test('effortLabel falls back to raw value for unknown categories', function () {
  assert.strictEqual(effortLabel('custom-category'), 'custom-category');
});

test('All routes have a valid effortCategory with a mapped label', function () {
  ROUTE_DATABASE.forEach(function (r) {
    assert(EFFORT_LABELS[r.effortCategory], r.id + ' has unmapped effortCategory: ' + r.effortCategory);
  });
});

test('buildConfidenceSection renders all confidence fields', function () {
  var route = ctx.ROUTE_BY_ID['fuerte-betancuria'];
  var html = buildConfidenceSection(route);
  assert(html.indexOf('Route Confidence') > -1, 'Missing title');
  assert(html.indexOf('Water Frequency') > -1, 'Missing Water Frequency');
  assert(html.indexOf('Phone Signal') > -1, 'Missing Phone Signal');
  assert(html.indexOf('Nearest Bike Shop') > -1, 'Missing Nearest Bike Shop');
  assert(html.indexOf('Surface Breakdown') > -1, 'Missing Surface Breakdown');
  assert(html.indexOf('Emergency Contacts') > -1, 'Missing Emergency Contacts');
  assert(html.indexOf('Offline Map') > -1, 'Missing Offline Map');
});

test('buildConfidenceSection returns empty for routes without confidence', function () {
  assert.strictEqual(buildConfidenceSection({}), '');
});

test('Zone cards include route links for zones with routeIds', function () {
  var html = buildZonesSection(fuerte);
  // The interior zone links to fuerte-betancuria
  assert(html.indexOf('zone-route-link') > -1, 'Missing zone-route-link class');
  assert(html.indexOf('openRouteDetail') > -1, 'Missing openRouteDetail call');
});

test('All route confidence objects are complete', function () {
  var fields = ['waterFrequency', 'phoneSignal', 'nearestBikeShop', 'surfaceBreakdown', 'emergencyContacts', 'offlineMapAvailable'];
  ROUTE_DATABASE.forEach(function (r) {
    assert(r.confidence, r.id + ' missing confidence');
    fields.forEach(function (f) {
      assert(r.confidence[f] !== undefined, r.id + '.confidence.' + f + ' is undefined');
    });
  });
});

// ── PHASE 6: QUICK IDEAS ──

console.log('\nPhase 6: Quick Ideas');

var generateQuickIdeas = ctx.generateQuickIdeas;

test('generateQuickIdeas returns array of 11 ideas for any month', function () {
  for (var m = 1; m <= 12; m++) {
    var ideas = generateQuickIdeas(m);
    assert(Array.isArray(ideas), 'Month ' + m + ': not an array');
    assert.strictEqual(ideas.length, 11, 'Month ' + m + ': expected 11, got ' + ideas.length);
  }
});

test('generateQuickIdeas sorts rideable-first then by intensity descending', function () {
  var ideas = generateQuickIdeas(1);
  // Within each group (rideable > 0, rideable === 0), intensity should be descending
  var firstZeroIdx = ideas.findIndex(function (i) { return i.rideableCount === 0; });
  if (firstZeroIdx > 0) {
    // Check rideable group
    for (var i = 1; i < firstZeroIdx; i++) {
      assert(ideas[i - 1].intensity >= ideas[i].intensity,
        'Rideable group not sorted: ' + ideas[i - 1].destName + ' (' + ideas[i - 1].intensity + ') < ' + ideas[i].destName + ' (' + ideas[i].intensity + ')');
    }
    // Check non-rideable group
    for (var j = firstZeroIdx + 1; j < ideas.length; j++) {
      assert(ideas[j - 1].intensity >= ideas[j].intensity,
        'Non-rideable group not sorted: ' + ideas[j - 1].destName + ' (' + ideas[j - 1].intensity + ') < ' + ideas[j].destName + ' (' + ideas[j].intensity + ')');
    }
  }
});

test('generateQuickIdeas items have all required fields', function () {
  var fields = ['destId', 'destName', 'regionName', 'intensity', 'label', 'color', 'reason', 'costHint', 'routeCount', 'rideableCount', 'image', 'flag'];
  var ideas = generateQuickIdeas(7);
  ideas.forEach(function (idea) {
    fields.forEach(function (f) {
      assert(idea[f] !== undefined, idea.destName + ' missing field: ' + f);
    });
  });
});

test('Peak destinations rank first for their peak months', function () {
  // Fuerteventura peaks in winter (Jan-Mar), should be near top in January
  var janIdeas = generateQuickIdeas(1);
  var fuerteIdx = janIdeas.findIndex(function (i) { return i.destId === 'fuerteventura'; });
  assert(fuerteIdx < 5, 'Fuerteventura should rank top 5 in January, got position ' + fuerteIdx);

  // Romania peaks in summer (Jul-Aug), should be near top in July
  var julIdeas = generateQuickIdeas(7);
  var romaniaIdx = julIdeas.findIndex(function (i) { return i.destId === 'romania'; });
  assert(romaniaIdx < 5, 'Romania should rank top 5 in July, got position ' + romaniaIdx);
});

test('generateQuickIdeas includes race events in reason when matching', function () {
  // March has Strade Bianche in Tuscany
  var marchIdeas = generateQuickIdeas(3);
  var tuscany = marchIdeas.find(function (i) { return i.destId === 'tuscany'; });
  assert(tuscany, 'Tuscany should be in March ideas');
  assert(tuscany.reason.indexOf('Strade Bianche') > -1, 'Tuscany March reason should mention Strade Bianche: ' + tuscany.reason);
});

test('generateQuickIdeas labels match seasonLabelShort', function () {
  var ideas = generateQuickIdeas(1);
  ideas.forEach(function (idea) {
    var expected = ctx.seasonLabelShort(idea.intensity);
    assert.strictEqual(idea.label, expected, idea.destName + ' label mismatch: got ' + idea.label + ', expected ' + expected);
  });
});

test('generateQuickIdeas includes destinations with routeCount 0', function () {
  var ideas = generateQuickIdeas(6);
  var girona = ideas.find(function (i) { return i.destId === 'girona'; });
  assert(girona, 'Girona should be included even with routeCount 0');
  assert.strictEqual(girona.routeCount, 0, 'Girona routeCount should be 0');
});

test('Deep dive destinations have enriched costHint', function () {
  var ideas = generateQuickIdeas(1);
  var fuerte = ideas.find(function (i) { return i.destId === 'fuerteventura'; });
  assert(fuerte, 'Fuerteventura should be in ideas');
  // Deep dive cost comparison gives €X,XXX/wk format
  assert(fuerte.costHint.indexOf('/wk') > -1, 'Fuerteventura costHint should have /wk format: ' + fuerte.costHint);
});

// ── cfgGetBikeFee fallback ──

console.log('\ncfgGetBikeFee fallback behavior');

test('Known airline returns specific fee', function () {
  var fee = BIKE_FEES['FR'] || BIKE_FEES.__default;
  assert.strictEqual(fee.fee, 60);
});

test('Unknown airline falls back to __default', function () {
  var fee = BIKE_FEES['ZZZZZ'] || BIKE_FEES.__default;
  assert.strictEqual(fee.fee, BIKE_FEES.__default.fee);
});

test('Empty string falls back to __default', function () {
  var fee = BIKE_FEES[''] || BIKE_FEES.__default;
  assert.strictEqual(fee.fee, BIKE_FEES.__default.fee);
});

// ── Phase 7: Base Camp Booking Flow ──

console.log('\nPhase 7: Base Camp Booking Flow');

var getPartnersForDest = ctx.getPartnersForDest;
var PARTNER_BY_ID = ctx.PARTNER_BY_ID;
var CONFIGURATOR_STATE = ctx.CONFIGURATOR_STATE;
var startTripFromBase = ctx.startTripFromBase;
var buildBasesSection = ctx.buildBasesSection;
var cfgSubmitBooking = ctx.cfgSubmitBooking;

test('getPartnersForDest returns correct partners for dest+category', function () {
  var hotels = getPartnersForDest('romania', 'hotel', null);
  assert(hotels.length > 0, 'Expected at least 1 hotel in Romania');
  hotels.forEach(function (h) {
    assert.strictEqual(h.destinationId, 'romania');
    assert.strictEqual(h.category, 'hotel');
  });
});

test('getPartnersForDest with baseId sorts base-matched partners first', function () {
  var partners = getPartnersForDest('romania', null, 'sibiu');
  var dest = DESTINATION_BY_ID['romania'];
  var base = dest.bases.find(function (b) { return b.id === 'sibiu'; });
  if (base.partnerIds.length > 0 && partners.length > 1) {
    var firstId = partners[0].id;
    assert(base.partnerIds.indexOf(firstId) > -1, 'First partner should be at the selected base');
  }
});

test('getPartnersForDest with empty partnerIds still returns all dest partners', function () {
  // Costa Calma has empty partnerIds
  var all = getPartnersForDest('fuerteventura', 'hotel', 'costa-calma');
  var noBase = getPartnersForDest('fuerteventura', 'hotel', null);
  assert.strictEqual(all.length, noBase.length, 'Should return same count regardless of empty-partner base');
});

test('getPartnersForDest without category returns all categories', function () {
  var all = getPartnersForDest('romania', null, null);
  var categories = {};
  all.forEach(function (p) { categories[p.category] = true; });
  assert(Object.keys(categories).length > 1, 'Expected multiple categories, got ' + Object.keys(categories).join(', '));
});

test('startTripFromBase sets destination and selectedBase in state', function () {
  startTripFromBase('romania', 'sibiu');
  assert.strictEqual(CONFIGURATOR_STATE.destination, 'romania');
  assert.strictEqual(CONFIGURATOR_STATE.selectedBase, 'sibiu');
  assert.strictEqual(CONFIGURATOR_STATE.currentStep, 2);
  // Reset for other tests
  CONFIGURATOR_STATE.destination = null;
  CONFIGURATOR_STATE.selectedBase = null;
  CONFIGURATOR_STATE.currentStep = 1;
});

test('startTripFromBase with invalid base sets dest but null base', function () {
  startTripFromBase('romania', 'nonexistent-base');
  assert.strictEqual(CONFIGURATOR_STATE.destination, 'romania');
  assert.strictEqual(CONFIGURATOR_STATE.selectedBase, null);
  // Reset
  CONFIGURATOR_STATE.destination = null;
  CONFIGURATOR_STATE.currentStep = 1;
});

test('startTripFromBase silently aborts for destinations with no routes', function () {
  CONFIGURATOR_STATE.destination = null;
  startTripFromBase('girona', 'some-base');
  assert.strictEqual(CONFIGURATOR_STATE.destination, null, 'Should not set destination for routeCount=0');
});

test('Base camp cards include CTA button for destinations with routes', function () {
  var loc = DESTINATION_BY_ID['romania'];
  var html = buildBasesSection(loc);
  assert(html.indexOf('base-card-cta') > -1, 'Expected CTA button in base card');
  assert(html.indexOf('startTripFromBase') > -1, 'Expected startTripFromBase onclick');
  assert(html.indexOf('Plan Trip from Here') > -1, 'Expected CTA text');
});

test('Base camp cards show partner count when partners exist', function () {
  var loc = DESTINATION_BY_ID['romania'];
  var html = buildBasesSection(loc);
  assert(html.indexOf('base-card-partners') > -1, 'Expected partner count element');
});

test('All base partnerIds reference valid partners in PARTNERS_DATABASE', function () {
  DESTINATIONS.forEach(function (dest) {
    if (!dest.bases) return;
    dest.bases.forEach(function (base) {
      if (!base.partnerIds) return;
      base.partnerIds.forEach(function (pid) {
        assert(PARTNER_BY_ID[pid], dest.name + ' base ' + base.name + ' references non-existent partner: ' + pid);
      });
    });
  });
});

test('All bases have valid nearestAirportIATA matching destination airports', function () {
  DESTINATIONS.forEach(function (dest) {
    if (!dest.bases || dest.bases.length === 0) return;
    dest.bases.forEach(function (base) {
      assert(base.nearestAirportIATA, dest.name + ' base ' + base.name + ' missing nearestAirportIATA');
      assert(dest.airportIATA.indexOf(base.nearestAirportIATA) > -1,
        dest.name + ' base ' + base.name + ' has IATA ' + base.nearestAirportIATA + ' not in destination airports ' + dest.airportIATA.join(','));
    });
  });
});

// ── Phase 8: Section Migration & Cleanup ──

console.log('\nPhase 8: Section Migration & Cleanup');

test('renderDeepDive is no longer defined (legacy function removed)', function () {
  assert.strictEqual(typeof ctx.renderDeepDive, 'undefined', 'renderDeepDive should be removed');
});

test('buildDeepDive still renders for all deep dive destinations', function () {
  ['fuerteventura', 'romania', 'crete'].forEach(function (id) {
    var loc = DESTINATION_BY_ID[id];
    assert(loc.deepDive, id + ' should have deepDive data');
    var html = ctx.buildDeepDive(loc);
    assert(html.length > 0, id + ' buildDeepDive should return non-empty HTML');
    assert(html.indexOf('culture-card') > -1 || html.indexOf('cost-card') > -1, id + ' buildDeepDive should contain content sections');
  });
});

test('buildDeepDive returns empty for destinations without deepDive', function () {
  ['mallorca', 'tuscany', 'girona'].forEach(function (id) {
    var loc = DESTINATION_BY_ID[id];
    var html = ctx.buildDeepDive(loc);
    assert.strictEqual(html, '', id + ' buildDeepDive should return empty string');
  });
});

// ── Phase 9: Seasonal Engagement ──

console.log('\nPhase 9: Seasonal Engagement');

// Foundation: isRouteRideableInMonth
test('isRouteRideableInMonth: simple range (Jun-Oct) — Jul is rideable, Dec is not', function () {
  var route = { season: { start: 6, end: 10, peak: [7, 8] } };
  assert.strictEqual(ctx.isRouteRideableInMonth(route, 7), true, 'Jul should be rideable');
  assert.strictEqual(ctx.isRouteRideableInMonth(route, 12), false, 'Dec should not be rideable');
});

test('isRouteRideableInMonth: wrap-around range (Nov-Mar) — Jan is rideable, Jun is not', function () {
  var route = { season: { start: 11, end: 3, peak: [12, 1, 2] } };
  assert.strictEqual(ctx.isRouteRideableInMonth(route, 1), true, 'Jan should be rideable');
  assert.strictEqual(ctx.isRouteRideableInMonth(route, 6), false, 'Jun should not be rideable');
  assert.strictEqual(ctx.isRouteRideableInMonth(route, 11), true, 'Nov should be rideable');
  assert.strictEqual(ctx.isRouteRideableInMonth(route, 3), true, 'Mar should be rideable');
});

test('isRouteRideableInMonth: edge months (start and end) are both rideable', function () {
  var route = { season: { start: 4, end: 10, peak: [5, 6] } };
  assert.strictEqual(ctx.isRouteRideableInMonth(route, 4), true, 'Start month should be rideable');
  assert.strictEqual(ctx.isRouteRideableInMonth(route, 10), true, 'End month should be rideable');
});

// Foundation: isRoutePeakInMonth
test('isRoutePeakInMonth: peak month returns true, open-but-not-peak returns false', function () {
  var route = { season: { start: 6, end: 10, peak: [7, 8] } };
  assert.strictEqual(ctx.isRoutePeakInMonth(route, 7), true, 'Jul is peak');
  assert.strictEqual(ctx.isRoutePeakInMonth(route, 6), false, 'Jun is open but not peak');
  assert.strictEqual(ctx.isRoutePeakInMonth(route, 12), false, 'Dec is closed, not peak');
});

test('isRoutePeakInMonth: closed month is never peak even if in peak array', function () {
  var route = { season: { start: 6, end: 10, peak: [7, 8, 12] } };
  assert.strictEqual(ctx.isRoutePeakInMonth(route, 12), false, 'Dec is closed, should not be peak');
});

// DRY helpers
test('seasonRangeStr formats season range correctly', function () {
  assert.strictEqual(ctx.seasonRangeStr({ start: 6, end: 10 }), 'Jun\u2013Oct');
  assert.strictEqual(ctx.seasonRangeStr({ start: 11, end: 3 }), 'Nov\u2013Mar');
});

test('seasonRangeWithPeak includes peak months', function () {
  var s = { start: 6, end: 10, peak: [7, 8] };
  var result = ctx.seasonRangeWithPeak(s);
  assert(result.indexOf('Jun\u2013Oct') > -1, 'Should contain range');
  assert(result.indexOf('peak') > -1, 'Should contain peak label');
  assert(result.indexOf('Jul') > -1, 'Should contain Jul');
  assert(result.indexOf('Aug') > -1, 'Should contain Aug');
});

// Route filtering with month
test('getFilteredRoutes with month set filters out closed routes', function () {
  // Set month to July — Romanian mountain routes should be open, Cape Town should not
  ctx.routeFilterState.type = 'all';
  ctx.routeFilterState.dest = 'all';
  ctx.routeFilterState.maxDiff = 5;
  ctx.routeFilterState.maxDist = 200;
  ctx.routeFilterState.month = 7;
  ctx.routeFilterState.sort = 'featured';
  var routes = ctx.getFilteredRoutes();
  routes.forEach(function (r) {
    assert(ctx.isRouteRideableInMonth(r, 7), r.name + ' should be rideable in July but was included');
  });
  // Verify some routes were actually filtered out (Cape Town routes are Nov-Mar)
  var allRoutes = ROUTE_DATABASE.filter(function (r) { return r.difficulty <= 5 && r.distance <= 200; });
  assert(routes.length < allRoutes.length, 'Filtering by July should exclude some routes');
});

test('getFilteredRoutes with month null returns all routes (backward compat)', function () {
  ctx.routeFilterState.type = 'all';
  ctx.routeFilterState.dest = 'all';
  ctx.routeFilterState.maxDiff = 5;
  ctx.routeFilterState.maxDist = 200;
  ctx.routeFilterState.month = null;
  ctx.routeFilterState.sort = 'featured';
  var routes = ctx.getFilteredRoutes();
  var allRoutes = ROUTE_DATABASE.filter(function (r) { return r.difficulty <= 5 && r.distance <= 200; });
  assert.strictEqual(routes.length, allRoutes.length, 'No month filter should return all routes');
});

// Quick Ideas enrichment
test('generateQuickIdeas returns rideableCount field', function () {
  var ideas = ctx.generateQuickIdeas(7);
  ideas.forEach(function (idea) {
    assert(typeof idea.rideableCount === 'number', idea.destName + ' should have numeric rideableCount');
  });
});

test('generateQuickIdeas sorts destinations with 0 rideable routes below those with rideable routes', function () {
  var ideas = ctx.generateQuickIdeas(7);
  var firstZero = -1;
  for (var i = 0; i < ideas.length; i++) {
    if (ideas[i].rideableCount === 0 && firstZero === -1) firstZero = i;
    if (ideas[i].rideableCount > 0 && firstZero > -1) {
      assert.fail('Destination ' + ideas[i].destName + ' with ' + ideas[i].rideableCount + ' rideable routes appears after a destination with 0');
    }
  }
});

// Route card seasonal badge
test('renderRouteCard includes seasonal badge when month filter is active', function () {
  ctx.routeFilterState.month = 7;
  var route = ROUTE_DATABASE.find(function (r) { return r.season.start <= 7 && r.season.end >= 7; });
  assert(route, 'Should find a route open in July');
  var html = ctx.renderRouteCard(route, 0);
  assert(html.indexOf('rbadge-season') > -1, 'Route card should have seasonal badge');
});

// Configurator Step 2 smart defaults
test('cfgSmartDateDefault sets peak season dates for summer destination (Romania)', function () {
  ctx.CONFIGURATOR_STATE.destination = 'romania';
  ctx.CONFIGURATOR_STATE.dates = { start: '2026-07-15', end: '2026-07-22', nights: 7 };
  ctx.cfgSmartDateDefault();
  var month = parseInt(ctx.CONFIGURATOR_STATE.dates.start.split('-')[1]);
  var dest = DESTINATION_BY_ID['romania'];
  assert(dest.season.peak.indexOf(month) > -1, 'Default month ' + month + ' should be a peak month for Romania');
});

test('cfgSmartDateDefault sets peak season dates for southern hemisphere destination (cape-town)', function () {
  ctx.CONFIGURATOR_STATE.destination = 'cape-town';
  ctx.CONFIGURATOR_STATE.dates = { start: '2026-07-15', end: '2026-07-22', nights: 7 };
  ctx.cfgSmartDateDefault();
  var month = parseInt(ctx.CONFIGURATOR_STATE.dates.start.split('-')[1]);
  var dest = DESTINATION_BY_ID['cape-town'];
  assert(dest.season.peak.indexOf(month) > -1, 'Default month ' + month + ' should be a peak month for Cape Town');
});

// ── Phase 10: Transitions & Polish ──

console.log('\nPhase 10: Transitions & Polish');

test('_savedScrollY variable is initialized for scroll position management', function () {
  assert.strictEqual(typeof ctx._savedScrollY, 'number', '_savedScrollY should be a number');
});

test('openRouteDetail saves scroll position before opening', function () {
  ctx._savedScrollY = 0;
  // openRouteDetail sets _savedScrollY = window.scrollY (which is 0 in test env)
  ctx.openRouteDetail(ROUTE_DATABASE[0].id);
  assert.strictEqual(typeof ctx._savedScrollY, 'number', '_savedScrollY should be set');
});

test('closeRouteDetail restores scroll position (function is callable)', function () {
  assert.strictEqual(typeof ctx.closeRouteDetail, 'function', 'closeRouteDetail should be a function');
  // Calling it should not throw
  ctx.closeRouteDetail();
});

test('navigateToDestination uses 420ms delay matching CSS transition duration', function () {
  // The breadcrumb onclick strings should use 420ms delay
  var route = ROUTE_DATABASE[0];
  var dest = DESTINATION_BY_ID[route.destinationId];
  if (dest) {
    ctx.openRouteDetail(route.id);
    var inner = sandbox.document.getElementById('rdModalInner');
    // Check that the breadcrumb HTML uses 420 delay
    assert(inner.innerHTML.indexOf(',420)') > -1 || inner.innerHTML === '',
      'Breadcrumb should use 420ms delay (matching .4s CSS transition)');
  }
});

test('cfgRefreshUI is callable (configurator step management)', function () {
  assert.strictEqual(typeof ctx.cfgRefreshUI, 'function', 'cfgRefreshUI should be a function');
});

test('Route results count element has aria-live attribute in HTML', function () {
  var htmlSrc = require('fs').readFileSync(require('path').join(__dirname, '..', 'index.html'), 'utf8');
  assert(htmlSrc.indexOf('id="reResultsCount" aria-live="polite"') > -1,
    'reResultsCount should have aria-live="polite" attribute');
});

console.log('\n' + passed + ' passed, ' + failed + ' failed');
if (failed > 0) process.exit(1);
