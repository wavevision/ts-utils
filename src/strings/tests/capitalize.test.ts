import capitalize from '../capitalize';

describe('ts-utils/strings/capitalize', () => {
  it('returns capitalized string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });
});
