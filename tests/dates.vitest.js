import { describe, it, expect } from 'vitest';
import { formatDateForKiwi, addDays, monthName } from '../app.js';

describe('formatDateForKiwi', () => {
  it('converts YYYY-MM-DD to DD/MM/YYYY', () => {
    expect(formatDateForKiwi('2026-07-15')).toBe('15/07/2026');
  });

  it('handles padded single-digit month and day', () => {
    expect(formatDateForKiwi('2026-01-05')).toBe('05/01/2026');
  });

  it('handles December 31st', () => {
    expect(formatDateForKiwi('2026-12-31')).toBe('31/12/2026');
  });

  it('handles January 1st', () => {
    expect(formatDateForKiwi('2027-01-01')).toBe('01/01/2027');
  });

  it('returns empty for empty string', () => {
    expect(formatDateForKiwi('')).toBe('');
  });

  it('returns empty for null', () => {
    expect(formatDateForKiwi(null)).toBe('');
  });

  it('returns empty for undefined', () => {
    expect(formatDateForKiwi(undefined)).toBe('');
  });

  it('returns empty for malformed date (wrong separator)', () => {
    expect(formatDateForKiwi('2026/07/15')).toBe('');
  });

  it('returns empty for partial date', () => {
    expect(formatDateForKiwi('2026-07')).toBe('');
  });
});

describe('addDays', () => {
  it('adds 7 days within same month', () => {
    expect(addDays('2026-07-15', 7)).toBe('2026-07-22');
  });

  it('adds 1 day', () => {
    expect(addDays('2026-07-15', 1)).toBe('2026-07-16');
  });

  it('handles month rollover', () => {
    expect(addDays('2026-07-28', 5)).toBe('2026-08-02');
  });

  it('handles year rollover', () => {
    expect(addDays('2026-12-28', 5)).toBe('2027-01-02');
  });

  it('handles leap year Feb 28 + 1', () => {
    expect(addDays('2024-02-28', 1)).toBe('2024-02-29');
  });

  it('handles leap year Feb 29 + 1', () => {
    expect(addDays('2024-02-29', 1)).toBe('2024-03-01');
  });

  it('handles non-leap year Feb 28 + 1', () => {
    expect(addDays('2026-02-28', 1)).toBe('2026-03-01');
  });

  it('zero days returns same date', () => {
    expect(addDays('2026-07-15', 0)).toBe('2026-07-15');
  });

  it('handles negative days', () => {
    expect(addDays('2026-07-15', -5)).toBe('2026-07-10');
  });

  it('handles negative days across month boundary', () => {
    expect(addDays('2026-08-02', -5)).toBe('2026-07-28');
  });

  it('handles negative days across year boundary', () => {
    expect(addDays('2026-01-05', -10)).toBe('2025-12-26');
  });

  it('handles large forward jump (365 days)', () => {
    expect(addDays('2026-03-01', 365)).toBe('2027-03-01');
  });

  it('returns empty for null input', () => {
    expect(addDays(null, 5)).toBe('');
  });

  it('returns empty for empty string', () => {
    expect(addDays('', 5)).toBe('');
  });

  it('returns empty for invalid date string', () => {
    expect(addDays('not-a-date', 5)).toBe('');
  });
});

describe('monthName', () => {
  it('returns Jan for 1', () => {
    expect(monthName(1)).toBe('Jan');
  });

  it('returns Dec for 12', () => {
    expect(monthName(12)).toBe('Dec');
  });

  it('returns empty for 0', () => {
    expect(monthName(0)).toBe('');
  });

  it('returns empty for 13', () => {
    expect(monthName(13)).toBe('');
  });

  it('returns empty for negative', () => {
    expect(monthName(-1)).toBe('');
  });
});
