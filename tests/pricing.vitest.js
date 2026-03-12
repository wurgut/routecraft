import { describe, it, expect } from 'vitest';
import { cfgCalcPricing } from '../app.js';

function makeState(overrides) {
  var base = {
    accommodation: [],
    transport: { flight: null, shuttles: [] },
    services: { guide: null, rental: null, addons: [] },
    dates: { start: null, end: null, nights: 7 },
    mode: 'standard',
    pricing: { subtotal: 0, memberDiscount: 0, goldenKeyPremium: 0, total: 0 }
  };
  return Object.assign(base, overrides);
}

function calcAndReturn(overrides) {
  var st = makeState(overrides);
  cfgCalcPricing.call(null);
  // cfgCalcPricing mutates CONFIGURATOR_STATE, so we need to set it as a global
  // Instead, we'll set global.CONFIGURATOR_STATE and call cfgCalcPricing
  return st;
}

describe('cfgCalcPricing', () => {
  // cfgCalcPricing reads from global CONFIGURATOR_STATE, so we set it before each call
  function calc(overrides) {
    var st = makeState(overrides);
    globalThis.CONFIGURATOR_STATE = st;
    cfgCalcPricing();
    return st.pricing;
  }

  it('Empty trip = 0 total', () => {
    var r = calc();
    expect(r.subtotal).toBe(0);
    expect(r.memberDiscount).toBe(0);
    expect(r.goldenKeyPremium).toBe(0);
    expect(r.total).toBe(0);
  });

  it('Single hotel for 7 nights', () => {
    var r = calc({ accommodation: [{ priceFrom: 100 }] });
    expect(r.subtotal).toBe(700);
    expect(r.memberDiscount).toBe(70);
    expect(r.total).toBe(630);
  });

  it('Multiple hotels summed', () => {
    var r = calc({ accommodation: [{ priceFrom: 100 }, { priceFrom: 50 }] });
    expect(r.subtotal).toBe(1050); // (100+50)*7
  });

  it('Flight with bike fee', () => {
    var r = calc({ transport: { flight: { basePrice: 200, bikeFee: 60 }, shuttles: [] } });
    expect(r.subtotal).toBe(260);
  });

  it('Flight without bike fee defaults to 0', () => {
    var r = calc({ transport: { flight: { basePrice: 200 }, shuttles: [] } });
    expect(r.subtotal).toBe(200);
  });

  it('Null flight adds nothing', () => {
    var r = calc({ transport: { flight: null, shuttles: [] } });
    expect(r.subtotal).toBe(0);
  });

  it('Shuttles added to subtotal', () => {
    var r = calc({ transport: { flight: null, shuttles: [{ priceFrom: 30 }, { priceFrom: 45 }] } });
    expect(r.subtotal).toBe(75);
  });

  it('Guide cost capped at 5 days for long trips', () => {
    var r = calc({
      services: { guide: { priceFrom: 100 }, rental: null, addons: [] },
      dates: { nights: 14 }
    });
    expect(r.subtotal).toBe(500); // 100 * min(14,5) = 500
  });

  it('Guide uses actual nights when <= 5', () => {
    var r = calc({
      services: { guide: { priceFrom: 100 }, rental: null, addons: [] },
      dates: { nights: 3 }
    });
    expect(r.subtotal).toBe(300); // 100 * 3
  });

  it('Bike rental uses full nights', () => {
    var r = calc({
      services: { guide: null, rental: { priceFrom: 40 }, addons: [] },
      dates: { nights: 7 }
    });
    expect(r.subtotal).toBe(280); // 40 * 7
  });

  it('Addons added flat (not per night)', () => {
    var r = calc({
      services: { guide: null, rental: null, addons: [{ priceFrom: 25 }, { priceFrom: 15 }] }
    });
    expect(r.subtotal).toBe(40);
  });

  it('Member discount is 10% rounded', () => {
    var r = calc({ accommodation: [{ priceFrom: 33 }] });
    // subtotal = 33*7 = 231, 10% = 23.1 → 23
    expect(r.subtotal).toBe(231);
    expect(r.memberDiscount).toBe(23);
    expect(r.total).toBe(208);
  });

  it('Golden Key mode adds 15% premium', () => {
    var r = calc({ accommodation: [{ priceFrom: 200 }], mode: 'concierge' });
    // subtotal = 1400, discount = 140, premium = 210, total = 1400 - 140 + 210 = 1470
    expect(r.subtotal).toBe(1400);
    expect(r.memberDiscount).toBe(140);
    expect(r.goldenKeyPremium).toBe(210);
    expect(r.total).toBe(1470);
  });

  it('Standard mode has no Golden Key premium', () => {
    var r = calc({ accommodation: [{ priceFrom: 200 }], mode: 'standard' });
    expect(r.goldenKeyPremium).toBe(0);
  });

  it('Full trip: hotel + flight + guide + rental + addon', () => {
    var r = calc({
      accommodation: [{ priceFrom: 150 }],
      transport: { flight: { basePrice: 200, bikeFee: 60 }, shuttles: [{ priceFrom: 30 }] },
      services: { guide: { priceFrom: 120 }, rental: { priceFrom: 35 }, addons: [{ priceFrom: 20 }] },
      dates: { nights: 7 }
    });
    // Hotel: 150*7=1050, Flight: 260, Shuttle: 30, Guide: 120*5=600, Rental: 35*7=245, Addon: 20
    expect(r.subtotal).toBe(2205);
    expect(r.memberDiscount).toBe(221);
    expect(r.total).toBe(1984);
  });

  it('Zero nights: accommodation and rental are 0', () => {
    var r = calc({
      accommodation: [{ priceFrom: 100 }],
      services: { guide: { priceFrom: 100 }, rental: { priceFrom: 40 }, addons: [] },
      dates: { nights: 0 }
    });
    expect(r.subtotal).toBe(0);
  });

  // NaN guard tests (new behavior from refactoring)
  it('handles undefined priceFrom gracefully (NaN guard)', () => {
    var r = calc({ accommodation: [{ priceFrom: undefined }] });
    expect(r.subtotal).toBe(0);
    expect(Number.isNaN(r.total)).toBe(false);
  });

  it('handles missing dates.nights gracefully (NaN guard)', () => {
    var r = calc({
      accommodation: [{ priceFrom: 100 }],
      dates: {}
    });
    expect(r.subtotal).toBe(0);
    expect(Number.isNaN(r.total)).toBe(false);
  });

  it('handles missing transport object gracefully', () => {
    var r = calc({ transport: undefined });
    expect(r.subtotal).toBe(0);
    expect(Number.isNaN(r.total)).toBe(false);
  });

  it('handles missing services object gracefully', () => {
    var r = calc({ services: undefined });
    expect(r.subtotal).toBe(0);
    expect(Number.isNaN(r.total)).toBe(false);
  });
});
