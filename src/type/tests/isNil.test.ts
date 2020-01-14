import isNil from '../isNil';

describe('ts-utils/type/isNil', () => {
  it('returns true', () => {
    expect(isNil(null)).toBe(true);
    expect(isNil(undefined)).toBe(true);
  });
  it('returns false', () => {
    expect(isNil(0)).toBe(false);
  });
});
