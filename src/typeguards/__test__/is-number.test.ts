import { describe, expect, test } from 'vitest';
import { isNumber } from '../is-number.js';

describe('isNumber', () => {
  test('should return true if the value is a number or parseable as a number', () => {
    expect(isNumber(13)).toBe(true);
    expect(isNumber('13')).toBe(true);
    expect(isNumber(NaN)).toBe(false);
    expect(isNumber('dasdasd')).toBe(false);
    expect(isNumber({})).toBe(false);
    expect(isNumber([])).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(true)).toBe(false);
    expect(isNumber(false)).toBe(false);
    expect(isNumber(Infinity)).toBe(false);
  });
});
