// Data integrity tests — validates BIKE_FEES, DESTINATIONS, LOCATION_TO_DEST
// Run: node tests/data-integrity.test.js
var assert = require('assert');
var fs = require('fs');
var path = require('path');
var vm = require('vm');

// Extract data objects from index.html — use the largest inline script block
var html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
var scriptRe = /<script>([\s\S]*?)<\/script>/gi;
var scriptSrc = '';
var m;
while ((m = scriptRe.exec(html)) !== null) {
  if (m[1].length > scriptSrc.length) scriptSrc = m[1];
}
if (!scriptSrc) { console.error('No script block found'); process.exit(1); }

function extractObject(varName) {
  var re = new RegExp('var\\s+' + varName + '\\s*=\\s*([\\s\\S]*?);\\s*(?:var\\s|function\\s|$)');
  var m = scriptSrc.match(re);
  if (!m) return null;
  try { return new Function('return ' + m[1])(); } catch (e) { return null; }
}

function extractArray(varName) {
  // For arrays like DESTINATIONS = [ ... ];
  var startMarker = 'var ' + varName + ' = [';
  var idx = scriptSrc.indexOf(startMarker);
  if (idx === -1) return null;
  var depth = 0;
  var start = idx + ('var ' + varName + ' = ').length;
  for (var i = start; i < scriptSrc.length; i++) {
    if (scriptSrc[i] === '[') depth++;
    else if (scriptSrc[i] === ']') {
      depth--;
      if (depth === 0) {
        try { return new Function('return ' + scriptSrc.substring(start, i + 1))(); } catch (e) { return null; }
      }
    }
  }
  return null;
}

var BIKE_FEES = extractObject('BIKE_FEES');
var DESTINATIONS = extractArray('DESTINATIONS');

// Extract LOCATION_TO_DEST
var ltdMatch = scriptSrc.match(/var\s+LOCATION_TO_DEST\s*=\s*(\{[^}]+\})/);
var LOCATION_TO_DEST = ltdMatch ? new Function('return ' + ltdMatch[1])() : null;

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
  assert(BIKE_FEES, 'Failed to extract BIKE_FEES from index.html');
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

// ── DESTINATIONS ──

console.log('\nDESTINATIONS data integrity');

test('DESTINATIONS array loaded', function () {
  assert(Array.isArray(DESTINATIONS), 'Failed to extract DESTINATIONS');
  assert.strictEqual(DESTINATIONS.length, 8, 'Expected 8 destinations, got ' + DESTINATIONS.length);
});

test('All destinations have required fields', function () {
  var required = ['id', 'name', 'country', 'flag', 'region', 'tagline', 'airportIATA', 'image', 'highlights'];
  DESTINATIONS.forEach(function (dest) {
    required.forEach(function (field) {
      assert(dest[field] !== undefined && dest[field] !== null, dest.id + ' missing ' + field);
    });
  });
});

test('All IDs are unique', function () {
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

test('All destinations have season object with start/end/peak', function () {
  DESTINATIONS.forEach(function (dest) {
    assert(typeof dest.season === 'object', dest.id + '.season is not an object');
    assert(typeof dest.season.start === 'number', dest.id + '.season.start not a number');
    assert(typeof dest.season.end === 'number', dest.id + '.season.end not a number');
    assert(Array.isArray(dest.season.peak), dest.id + '.season.peak not an array');
  });
});

test('All destinations have airports array', function () {
  DESTINATIONS.forEach(function (dest) {
    assert(Array.isArray(dest.airports), dest.id + '.airports is not an array');
  });
});

test('Expected destination IDs present', function () {
  var expected = ['fuerteventura', 'romania', 'crete', 'mallorca', 'tuscany', 'dolomites', 'alps', 'japan'];
  var ids = new Set(DESTINATIONS.map(function (d) { return d.id; }));
  expected.forEach(function (eid) {
    assert(ids.has(eid), 'Missing destination: ' + eid);
  });
});

// ── LOCATION_TO_DEST ──

console.log('\nLOCATION_TO_DEST mapping');

test('LOCATION_TO_DEST object loaded', function () {
  assert(LOCATION_TO_DEST, 'Failed to extract LOCATION_TO_DEST');
});

test('All mapped destinations exist in DESTINATIONS', function () {
  var destIds = new Set(DESTINATIONS.map(function (d) { return d.id; }));
  Object.keys(LOCATION_TO_DEST).forEach(function (locId) {
    var destId = LOCATION_TO_DEST[locId];
    assert(destIds.has(destId), 'Mapping "' + locId + '" \u2192 "' + destId + '" but "' + destId + '" not in DESTINATIONS');
  });
});

test('Expected mappings present', function () {
  assert.strictEqual(LOCATION_TO_DEST['transfagarasan'], 'romania');
  assert.strictEqual(LOCATION_TO_DEST['alpe-dhuez'], 'alps');
  assert.strictEqual(LOCATION_TO_DEST['stelvio'], 'dolomites');
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

console.log('\n' + passed + ' passed, ' + failed + ' failed');
if (failed > 0) process.exit(1);
