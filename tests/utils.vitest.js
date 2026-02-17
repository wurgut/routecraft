import { describe, it, expect } from 'vitest';
import {
  findById,
  buildLookupMap,
  _vi,
  latLngToVec3,
  difficultyBar,
  trafficDot,
  cfgGetBikeFee,
  cfgTransformApiResult
} from '../app.js';

describe('findById', () => {
  var items = [
    { id: 'a', name: 'Alpha' },
    { id: 'b', name: 'Beta' },
    { id: 'c', name: 'Charlie' }
  ];

  it('finds an item by id', () => {
    expect(findById(items, 'b')).toEqual({ id: 'b', name: 'Beta' });
  });

  it('returns undefined for missing id', () => {
    expect(findById(items, 'z')).toBeUndefined();
  });

  it('returns undefined for null id', () => {
    expect(findById(items, null)).toBeUndefined();
  });

  it('returns first match if duplicates exist', () => {
    var dupes = [{ id: 'x', v: 1 }, { id: 'x', v: 2 }];
    expect(findById(dupes, 'x').v).toBe(1);
  });

  it('handles empty array', () => {
    expect(findById([], 'a')).toBeUndefined();
  });
});

describe('buildLookupMap', () => {
  it('builds a map keyed by id', () => {
    var items = [{ id: 'a', name: 'A' }, { id: 'b', name: 'B' }];
    var map = buildLookupMap(items);
    expect(map.a).toEqual({ id: 'a', name: 'A' });
    expect(map.b).toEqual({ id: 'b', name: 'B' });
  });

  it('returns empty object for empty array', () => {
    expect(buildLookupMap([])).toEqual({});
  });

  it('last entry wins for duplicate ids', () => {
    var items = [{ id: 'x', v: 1 }, { id: 'x', v: 2 }];
    expect(buildLookupMap(items).x.v).toBe(2);
  });
});

describe('_vi', () => {
  it('wraps SVG data in svg tags', () => {
    var result = _vi('<circle r="5"/>');
    expect(result).toBe('<svg class="vx-i" viewBox="0 0 24 24"><circle r="5"/></svg>');
  });
});

describe('latLngToVec3', () => {
  it('converts lat/lng to 3D coordinates', () => {
    var result = latLngToVec3(0, 0, 1);
    expect(result).toHaveProperty('x');
    expect(result).toHaveProperty('y');
    expect(result).toHaveProperty('z');
  });

  it('north pole has y ~= r', () => {
    var result = latLngToVec3(90, 0, 1);
    expect(result.y).toBeCloseTo(1, 5);
    expect(result.x).toBeCloseTo(0, 5);
  });

  it('south pole has y ~= -r', () => {
    var result = latLngToVec3(-90, 0, 1);
    expect(result.y).toBeCloseTo(-1, 5);
  });

  it('scales with radius', () => {
    var r1 = latLngToVec3(45, 90, 1);
    var r2 = latLngToVec3(45, 90, 2);
    expect(r2.x).toBeCloseTo(r1.x * 2, 5);
    expect(r2.y).toBeCloseTo(r1.y * 2, 5);
    expect(r2.z).toBeCloseTo(r1.z * 2, 5);
  });
});

describe('difficultyBar', () => {
  it('returns HTML with 5 bars', () => {
    var html = difficultyBar(3);
    expect(html).toContain('display:flex');
    // Count bar divs (5 bars)
    var barCount = (html.match(/width:6px/g) || []).length;
    expect(barCount).toBe(5);
  });

  it('highlights correct number of bars', () => {
    var html = difficultyBar(2);
    var coloredBars = (html.match(/var\(--diff-2\)/g) || []).length;
    expect(coloredBars).toBe(2);
  });

  it('handles level 0 (no bars highlighted)', () => {
    var html = difficultyBar(0);
    expect(html).not.toContain('var(--diff-');
  });
});

describe('trafficDot', () => {
  it('returns span with correct color', () => {
    var html = trafficDot(3);
    expect(html).toContain('var(--diff-3)');
    expect(html).toContain('Moderate');
  });

  it('handles level 1 (Empty)', () => {
    var html = trafficDot(1);
    expect(html).toContain('Empty');
  });
});

describe('cfgGetBikeFee', () => {
  it('returns fee for known airline', () => {
    // Set up global BIKE_FEES for testing
    globalThis.BIKE_FEES = {
      FR: { fee: 60, policy: 'Must book', maxKg: 30 },
      __default: { fee: 75, policy: 'Check airline', maxKg: 32 }
    };
    var result = cfgGetBikeFee('FR');
    expect(result.fee).toBe(60);
  });

  it('falls back to __default for unknown airline', () => {
    var result = cfgGetBikeFee('ZZ');
    expect(result.fee).toBe(75);
  });

  it('falls back to __default for empty string', () => {
    var result = cfgGetBikeFee('');
    expect(result.fee).toBe(75);
  });
});

describe('cfgTransformApiResult', () => {
  it('transforms a valid API result', () => {
    globalThis.BIKE_FEES = {
      FR: { fee: 60, policy: 'Must book', maxKg: 30 },
      __default: { fee: 75, policy: 'Check airline', maxKg: 32 }
    };
    var apiResult = {
      airlines: ['FR'],
      price: 89,
      cityFrom: 'London',
      flyFrom: 'STN',
      cityTo: 'Fuerteventura',
      flyTo: 'FUE',
      duration: '4h 30m',
      stops: 0,
      deepLink: 'https://example.com'
    };
    var result = cfgTransformApiResult(apiResult);
    expect(result.airline).toBe('FR');
    expect(result.basePrice).toBe(89);
    expect(result.bikeFee).toBe(60);
    expect(result.from).toBe('London (STN)');
    expect(result.to).toBe('Fuerteventura (FUE)');
    expect(result.source).toBe('api');
    expect(result.bikeFeeEstimate).toBe(false);
  });

  it('marks unknown airline bike fee as estimate', () => {
    var apiResult = {
      airlines: ['ZZ'],
      price: 100,
      cityFrom: 'Test',
      flyFrom: 'TST',
      cityTo: 'Dest',
      flyTo: 'DST'
    };
    var result = cfgTransformApiResult(apiResult);
    expect(result.bikeFeeEstimate).toBe(true);
    expect(result.bikeFee).toBe(75); // __default
  });

  it('handles missing airlines array', () => {
    var apiResult = { price: 50, cityFrom: 'A', flyFrom: 'AA', cityTo: 'B', flyTo: 'BB' };
    var result = cfgTransformApiResult(apiResult);
    expect(result.airline).toBe('Unknown');
  });
});
