import toFixed from '../toFixed';

describe('ts-utils/numbers/toFixed', () => {
  it('returns float with fixed decimals without rounding', () => {
    expect(toFixed(1.123)).toBe(1.1);
    expect(toFixed(5.47826, 3)).toBe(5.478);
  });
  it('returns input number', () => {
    expect(toFixed(22)).toBe(22);
    expect(toFixed(0, 0)).toBe(0);
    expect(toFixed(Number.NaN)).toBe(Number.NaN);
  });
});
