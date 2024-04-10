import { describe, expect, test } from 'vitest';
import { isDefined } from '../is-defined.js';

describe('isDefined function', () => {
  test('should return true for defined values', () => {
    expect(isDefined('hello')).toBe(true);
    expect(isDefined(123)).toBe(true);
    expect(isDefined([])).toBe(true);
    expect(isDefined({})).toBe(true);
    expect(isDefined(false)).toBe(true);
  });

  test('should return false for null or undefined values', () => {
    expect(isDefined(null)).toBe(false);
    expect(isDefined(undefined)).toBe(false);
  });
});
