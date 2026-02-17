// Unit tests for cfgCalcPricing — trip pricing calculator
// Run: node tests/pricing.test.js
var assert = require('assert');

// Extracted pricing logic (mirrors cfgCalcPricing in index.html)
function calcPricing(st) {
  var sub = 0;
  st.accommodation.forEach(function (a) { sub += a.priceFrom * st.dates.nights; });
  if (st.transport.flight) sub += st.transport.flight.basePrice + (st.transport.flight.bikeFee || 0);
  st.transport.shuttles.forEach(function (s) { sub += s.priceFrom; });
  if (st.services.guide) sub += st.services.guide.priceFrom * Math.min(st.dates.nights, 5);
  if (st.services.rental) sub += st.services.rental.priceFrom * st.dates.nights;
  st.services.addons.forEach(function (a) { sub += a.priceFrom; });
  var memberDiscount = Math.round(sub * 0.10);
  var goldenKeyPremium = st.mode === 'concierge' ? Math.round(sub * 0.15) : 0;
  var total = sub - memberDiscount + goldenKeyPremium;
  return { subtotal: sub, memberDiscount: memberDiscount, goldenKeyPremium: goldenKeyPremium, total: total };
}

function makeState(overrides) {
  return Object.assign({
    accommodation: [],
    transport: { flight: null, shuttles: [] },
    services: { guide: null, rental: null, addons: [] },
    dates: { nights: 7 },
    mode: 'standard'
  }, overrides);
}

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

console.log('cfgCalcPricing');

test('Empty trip = 0 total', function () {
  var r = calcPricing(makeState());
  assert.strictEqual(r.subtotal, 0);
  assert.strictEqual(r.memberDiscount, 0);
  assert.strictEqual(r.goldenKeyPremium, 0);
  assert.strictEqual(r.total, 0);
});

test('Single hotel for 7 nights', function () {
  var r = calcPricing(makeState({ accommodation: [{ priceFrom: 100 }] }));
  assert.strictEqual(r.subtotal, 700);
  assert.strictEqual(r.memberDiscount, 70);
  assert.strictEqual(r.total, 630);
});

test('Multiple hotels summed', function () {
  var r = calcPricing(makeState({
    accommodation: [{ priceFrom: 100 }, { priceFrom: 50 }]
  }));
  assert.strictEqual(r.subtotal, 1050); // (100+50)*7
});

test('Flight with bike fee', function () {
  var r = calcPricing(makeState({
    transport: { flight: { basePrice: 200, bikeFee: 60 }, shuttles: [] }
  }));
  assert.strictEqual(r.subtotal, 260);
});

test('Flight without bike fee defaults to 0', function () {
  var r = calcPricing(makeState({
    transport: { flight: { basePrice: 200 }, shuttles: [] }
  }));
  assert.strictEqual(r.subtotal, 200);
});

test('Null flight adds nothing', function () {
  var r = calcPricing(makeState({
    transport: { flight: null, shuttles: [] }
  }));
  assert.strictEqual(r.subtotal, 0);
});

test('Shuttles added to subtotal', function () {
  var r = calcPricing(makeState({
    transport: { flight: null, shuttles: [{ priceFrom: 30 }, { priceFrom: 45 }] }
  }));
  assert.strictEqual(r.subtotal, 75);
});

test('Guide cost capped at 5 days for long trips', function () {
  var r = calcPricing(makeState({
    services: { guide: { priceFrom: 100 }, rental: null, addons: [] },
    dates: { nights: 14 }
  }));
  assert.strictEqual(r.subtotal, 500); // 100 * min(14,5) = 500
});

test('Guide uses actual nights when <= 5', function () {
  var r = calcPricing(makeState({
    services: { guide: { priceFrom: 100 }, rental: null, addons: [] },
    dates: { nights: 3 }
  }));
  assert.strictEqual(r.subtotal, 300); // 100 * 3
});

test('Bike rental uses full nights', function () {
  var r = calcPricing(makeState({
    services: { guide: null, rental: { priceFrom: 40 }, addons: [] },
    dates: { nights: 7 }
  }));
  assert.strictEqual(r.subtotal, 280); // 40 * 7
});

test('Addons added flat (not per night)', function () {
  var r = calcPricing(makeState({
    services: { guide: null, rental: null, addons: [{ priceFrom: 25 }, { priceFrom: 15 }] }
  }));
  assert.strictEqual(r.subtotal, 40);
});

test('Member discount is 10% rounded', function () {
  var r = calcPricing(makeState({ accommodation: [{ priceFrom: 33 }] }));
  // subtotal = 33*7 = 231, 10% = 23.1 → 23
  assert.strictEqual(r.subtotal, 231);
  assert.strictEqual(r.memberDiscount, 23);
  assert.strictEqual(r.total, 208);
});

test('Golden Key mode adds 15% premium', function () {
  var r = calcPricing(makeState({
    accommodation: [{ priceFrom: 200 }],
    mode: 'concierge'
  }));
  // subtotal = 1400, discount = 140, premium = 210, total = 1400 - 140 + 210 = 1470
  assert.strictEqual(r.subtotal, 1400);
  assert.strictEqual(r.memberDiscount, 140);
  assert.strictEqual(r.goldenKeyPremium, 210);
  assert.strictEqual(r.total, 1470);
});

test('Standard mode has no Golden Key premium', function () {
  var r = calcPricing(makeState({
    accommodation: [{ priceFrom: 200 }],
    mode: 'standard'
  }));
  assert.strictEqual(r.goldenKeyPremium, 0);
});

test('Full trip: hotel + flight + guide + rental + addon', function () {
  var r = calcPricing(makeState({
    accommodation: [{ priceFrom: 150 }],
    transport: { flight: { basePrice: 200, bikeFee: 60 }, shuttles: [{ priceFrom: 30 }] },
    services: { guide: { priceFrom: 120 }, rental: { priceFrom: 35 }, addons: [{ priceFrom: 20 }] },
    dates: { nights: 7 }
  }));
  // Hotel: 150*7=1050, Flight: 260, Shuttle: 30, Guide: 120*5=600, Rental: 35*7=245, Addon: 20
  // Subtotal: 2205
  assert.strictEqual(r.subtotal, 2205);
  assert.strictEqual(r.memberDiscount, 221); // round(2205*0.10)
  assert.strictEqual(r.total, 1984); // 2205 - 221
});

test('Zero nights: accommodation and rental are 0', function () {
  var r = calcPricing(makeState({
    accommodation: [{ priceFrom: 100 }],
    services: { guide: { priceFrom: 100 }, rental: { priceFrom: 40 }, addons: [] },
    dates: { nights: 0 }
  }));
  // Hotel: 100*0=0, Guide: 100*min(0,5)=0, Rental: 40*0=0
  assert.strictEqual(r.subtotal, 0);
});

console.log('\n' + passed + ' passed, ' + failed + ' failed');
if (failed > 0) process.exit(1);
