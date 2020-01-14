import camelCaseToDashCase from '../camelCaseToDashCase';

describe('ts-utils/strings/camelCaseToDash', () => {
  it('converts camelcase to dash', () => {
    expect(camelCaseToDashCase('camelCase')).toBe('camel-case');
  });
});
