// Unit tests for formatDateForKiwi and addDays — date helpers
// Run: node tests/dates.test.js
var assert = require('assert');

// Extracted from index.html (lines 10567-10580)
function formatDateForKiwi(dateStr) {
  if (!dateStr) return '';
  var p = dateStr.split('-');
  return p[2] + '/' + p[1] + '/' + p[0];
}

function addDays(dateStr, days) {
  var d = new Date(dateStr);
  d.setDate(d.getDate() + days);
  var mm = String(d.getMonth() + 1).padStart(2, '0');
  var dd = String(d.getDate()).padStart(2, '0');
  return d.getFullYear() + '-' + mm + '-' + dd;
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

console.log('formatDateForKiwi');

test('Basic YYYY-MM-DD to DD/MM/YYYY', function () {
  assert.strictEqual(formatDateForKiwi('2026-07-15'), '15/07/2026');
});

test('Padded single-digit month and day', function () {
  assert.strictEqual(formatDateForKiwi('2026-01-05'), '05/01/2026');
});

test('December 31st', function () {
  assert.strictEqual(formatDateForKiwi('2026-12-31'), '31/12/2026');
});

test('January 1st', function () {
  assert.strictEqual(formatDateForKiwi('2027-01-01'), '01/01/2027');
});

test('Empty string returns empty', function () {
  assert.strictEqual(formatDateForKiwi(''), '');
});

test('Null returns empty', function () {
  assert.strictEqual(formatDateForKiwi(null), '');
});

test('Undefined returns empty', function () {
  assert.strictEqual(formatDateForKiwi(undefined), '');
});

console.log('\naddDays');

test('Add 7 days within same month', function () {
  assert.strictEqual(addDays('2026-07-15', 7), '2026-07-22');
});

test('Add 1 day', function () {
  assert.strictEqual(addDays('2026-07-15', 1), '2026-07-16');
});

test('Month rollover: July 28 + 5 = August 2', function () {
  assert.strictEqual(addDays('2026-07-28', 5), '2026-08-02');
});

test('Year rollover: Dec 28 + 5 = Jan 2', function () {
  assert.strictEqual(addDays('2026-12-28', 5), '2027-01-02');
});

test('Leap year: Feb 28 + 1 in 2024', function () {
  assert.strictEqual(addDays('2024-02-28', 1), '2024-02-29');
});

test('Leap year: Feb 29 + 1 in 2024', function () {
  assert.strictEqual(addDays('2024-02-29', 1), '2024-03-01');
});

test('Non-leap year: Feb 28 + 1 in 2026', function () {
  assert.strictEqual(addDays('2026-02-28', 1), '2026-03-01');
});

test('Zero days returns same date', function () {
  assert.strictEqual(addDays('2026-07-15', 0), '2026-07-15');
});

test('Negative days: go back 5 days', function () {
  assert.strictEqual(addDays('2026-07-15', -5), '2026-07-10');
});

test('Negative days across month boundary', function () {
  assert.strictEqual(addDays('2026-08-02', -5), '2026-07-28');
});

test('Negative days across year boundary', function () {
  assert.strictEqual(addDays('2026-01-05', -10), '2025-12-26');
});

test('Large forward jump: 365 days', function () {
  assert.strictEqual(addDays('2026-03-01', 365), '2027-03-01');
});

console.log('\n' + passed + ' passed, ' + failed + ' failed');
if (failed > 0) process.exit(1);
