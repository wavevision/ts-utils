import getName from '../getName';

describe('ts-utils/components/getName', () => {
  it('returns component displayName', () => {
    const Test = (): null => null;
    expect(getName(Test)).toBe('Test');
  });
  it('returns fallback name for unknown component', () => {
    expect(getName(() => null)).toBe('Component');
  });
});
