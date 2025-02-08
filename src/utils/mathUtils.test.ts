import { describe, expect, it } from 'vitest';
import { formatNumberForDispay, isEven } from './mathUtils';

describe('isEven', () => {
  it('should return true for even numbers', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(0)).toBe(true);
    expect(isEven(-2)).toBe(true);
  });

  it('should return false for odd numbers', () => {
    expect(isEven(3)).toBe(false);
    expect(isEven(-1)).toBe(false);
  });

  it('should return false for non-integer values', () => {
    expect(isEven(2.5)).toBe(false);
  });
});

describe('formatNumberForDispay', () => {
  it('should format numbers with spaces as thousand separators', () => {
    expect(formatNumberForDispay(1000)).toBe('1 000');
    expect(formatNumberForDispay(1234567)).toBe('1 234 567');
  });

  it('should handle zero correctly', () => {
    expect(formatNumberForDispay(0)).toBe('0');
  });

  it('should format negative numbers correctly', () => {
    expect(formatNumberForDispay(-1234567)).toBe('-1 234 567');
  });

  it('should format floating-point numbers correctly', () => {
    expect(formatNumberForDispay(1234.56)).toBe('1 234.56');
  });

  it('should return single-digit numbers as is', () => {
    expect(formatNumberForDispay(9)).toBe('9');
  });
});
