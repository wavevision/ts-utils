import toFixedCelled from '../toFixedCelled';

describe('ts-utils/numbers/toFixedCelled', () => {
  it('returns float with celled decimals', () => {
    expect(toFixedCelled(1.023)).toBe(1.1);
    expect(toFixedCelled(2.4465, 3)).toBe(2.447);
  });
});
