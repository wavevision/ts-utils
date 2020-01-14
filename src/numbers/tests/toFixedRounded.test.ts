import toFixedRounded from '../toFixedRounded';

describe('ts-utils/numbers/toFixedRounded', () => {
  it('returns float with rounded decimals', () => {
    expect(toFixedRounded(1.123)).toBe(1.1);
    expect(toFixedRounded(5.236, 2)).toBe(5.24);
  });
});
