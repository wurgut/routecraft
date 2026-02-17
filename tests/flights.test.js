// Integration tests for netlify/functions/flights.js — serverless flight proxy
// Run: node tests/flights.test.js
var assert = require('assert');
var path = require('path');

// Load the handler
var mod = require(path.join(__dirname, '..', 'netlify', 'functions', 'flights.js'));
var handler = mod.handler;

// Save and mock fetch globally
var originalFetch = global.fetch;
var savedKey = process.env.KIWI_API_KEY;

function mockFetch(statusCode, body) {
  global.fetch = function () {
    return Promise.resolve({
      ok: statusCode >= 200 && statusCode < 300,
      status: statusCode,
      json: function () { return Promise.resolve(body); }
    });
  };
}

function restoreEnv() {
  global.fetch = originalFetch;
  if (savedKey) process.env.KIWI_API_KEY = savedKey;
  else delete process.env.KIWI_API_KEY;
}

var passed = 0;
var failed = 0;

function test(name, fn) {
  return fn().then(function () {
    passed++;
    console.log('  \u2713 ' + name);
  }).catch(function (e) {
    failed++;
    console.error('  \u2717 ' + name + ': ' + e.message);
  });
}

async function run() {
  console.log('flights.handler — API key validation');

  await test('Missing API key returns 502', async function () {
    delete process.env.KIWI_API_KEY;
    var res = await handler({ queryStringParameters: { type: 'locations', term: 'London' } });
    assert.strictEqual(res.statusCode, 502);
    assert(JSON.parse(res.body).error.includes('API key'));
  });

  // Set a test key for remaining tests
  process.env.KIWI_API_KEY = 'test-key-123';

  console.log('\nflights.handler — type=locations');

  await test('Invalid type returns 400', async function () {
    var res = await handler({ queryStringParameters: { type: 'invalid' } });
    assert.strictEqual(res.statusCode, 400);
  });

  await test('Missing term returns 400', async function () {
    var res = await handler({ queryStringParameters: { type: 'locations' } });
    assert.strictEqual(res.statusCode, 400);
  });

  await test('Term too short returns 400', async function () {
    var res = await handler({ queryStringParameters: { type: 'locations', term: 'L' } });
    assert.strictEqual(res.statusCode, 400);
  });

  await test('Valid locations search returns mapped cities', async function () {
    mockFetch(200, {
      locations: [
        { name: 'London', code: 'LON', country: { name: 'United Kingdom', code: 'GB' } },
        { name: 'Londrina', code: 'LDB', country: { name: 'Brazil', code: 'BR' } }
      ]
    });
    var res = await handler({ queryStringParameters: { type: 'locations', term: 'Lon' } });
    assert.strictEqual(res.statusCode, 200);
    var data = JSON.parse(res.body);
    assert.strictEqual(data.cities.length, 2);
    assert.strictEqual(data.cities[0].name, 'London');
    assert.strictEqual(data.cities[0].code, 'LON');
    assert.strictEqual(data.cities[0].country, 'United Kingdom');
    assert.strictEqual(data.cities[0].countryCode, 'GB');
  });

  await test('Empty locations response returns empty array', async function () {
    mockFetch(200, { locations: [] });
    var res = await handler({ queryStringParameters: { type: 'locations', term: 'Xyzzy' } });
    assert.strictEqual(res.statusCode, 200);
    var data = JSON.parse(res.body);
    assert.strictEqual(data.cities.length, 0);
  });

  await test('Location with missing country handled', async function () {
    mockFetch(200, {
      locations: [{ name: 'Nowhere', code: 'NWR', country: null }]
    });
    var res = await handler({ queryStringParameters: { type: 'locations', term: 'Now' } });
    var data = JSON.parse(res.body);
    assert.strictEqual(data.cities[0].country, '');
    assert.strictEqual(data.cities[0].countryCode, '');
  });

  console.log('\nflights.handler — type=search');

  await test('Missing fly_from returns 400', async function () {
    var res = await handler({ queryStringParameters: { type: 'search', fly_to: 'FUE', date_from: '01/07/2026' } });
    assert.strictEqual(res.statusCode, 400);
  });

  await test('Missing fly_to returns 400', async function () {
    var res = await handler({ queryStringParameters: { type: 'search', fly_from: 'LON', date_from: '01/07/2026' } });
    assert.strictEqual(res.statusCode, 400);
  });

  await test('Missing date_from returns 400', async function () {
    var res = await handler({ queryStringParameters: { type: 'search', fly_from: 'LON', fly_to: 'FUE' } });
    assert.strictEqual(res.statusCode, 400);
  });

  await test('Valid search returns mapped flights', async function () {
    mockFetch(200, {
      data: [{
        price: 89,
        airlines: ['FR'],
        flyFrom: 'STN',
        flyTo: 'FUE',
        cityFrom: 'London',
        cityTo: 'Fuerteventura',
        route: [
          { local_departure: '2026-07-01T06:00:00.000Z', local_arrival: '2026-07-01T10:30:00.000Z' }
        ],
        fly_duration: '4h 30m',
        dTime: 1751349600,
        aTime: 1751365800,
        deep_link: 'https://kiwi.com/booking/123',
        bags_price: { '1': 25 }
      }]
    });
    var res = await handler({ queryStringParameters: {
      type: 'search', fly_from: 'LON', fly_to: 'FUE',
      date_from: '01/07/2026', date_to: '08/07/2026'
    } });
    assert.strictEqual(res.statusCode, 200);
    var data = JSON.parse(res.body);
    assert.strictEqual(data.flights.length, 1);
    var f = data.flights[0];
    assert.strictEqual(f.price, 89);
    assert.deepStrictEqual(f.airlines, ['FR']);
    assert.strictEqual(f.stops, 0); // 1 route segment = 0 stops
    assert.strictEqual(f.durationMin, 270); // 4*60+30
    assert.strictEqual(f.cityFrom, 'London');
    assert.strictEqual(f.deepLink, 'https://kiwi.com/booking/123');
    assert.strictEqual(data.currency, 'EUR');
  });

  await test('Multi-segment flight counts stops correctly', async function () {
    mockFetch(200, {
      data: [{
        price: 120,
        airlines: ['LH', 'LH'],
        flyFrom: 'MUC',
        flyTo: 'FUE',
        cityFrom: 'Munich',
        cityTo: 'Fuerteventura',
        route: [
          { local_departure: '2026-07-01T08:00:00.000Z', local_arrival: '2026-07-01T10:00:00.000Z' },
          { local_departure: '2026-07-01T12:00:00.000Z', local_arrival: '2026-07-01T16:30:00.000Z' }
        ],
        fly_duration: '8h 30m',
        dTime: 1751356800,
        aTime: 1751387400,
        deep_link: '',
        bags_price: {}
      }]
    });
    var res = await handler({ queryStringParameters: {
      type: 'search', fly_from: 'MUC', fly_to: 'FUE',
      date_from: '01/07/2026'
    } });
    var data = JSON.parse(res.body);
    assert.strictEqual(data.flights[0].stops, 1); // 2 segments = 1 stop
  });

  await test('Empty search results handled', async function () {
    mockFetch(200, { data: [] });
    var res = await handler({ queryStringParameters: {
      type: 'search', fly_from: 'LON', fly_to: 'FUE', date_from: '01/07/2026'
    } });
    var data = JSON.parse(res.body);
    assert.strictEqual(data.flights.length, 0);
  });

  console.log('\nflights.handler — error handling');

  await test('Kiwi API error returns 502', async function () {
    mockFetch(500, {});
    var res = await handler({ queryStringParameters: { type: 'locations', term: 'London' } });
    assert.strictEqual(res.statusCode, 502);
    var data = JSON.parse(res.body);
    assert(data.error.includes('API request failed'));
  });

  await test('Response includes CORS and cache headers', async function () {
    mockFetch(200, { locations: [] });
    var res = await handler({ queryStringParameters: { type: 'locations', term: 'London' } });
    assert.strictEqual(res.headers['Access-Control-Allow-Origin'], '*');
    assert(res.headers['Cache-Control'].includes('max-age=300'));
  });

  await test('No query params returns 400', async function () {
    var res = await handler({ queryStringParameters: {} });
    assert.strictEqual(res.statusCode, 400);
  });

  await test('Null queryStringParameters handled', async function () {
    var res = await handler({});
    assert.strictEqual(res.statusCode, 400);
  });

  // Cleanup
  restoreEnv();

  console.log('\n' + passed + ' passed, ' + failed + ' failed');
  if (failed > 0) process.exit(1);
}

run();
