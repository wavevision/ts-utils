import splitCamelCase from '../splitCamelCase';

describe('ts-utils/strings/splitCamelCase', () => {
  it('returns array of lower cased parts', () => {
    expect(splitCamelCase('someCamelCase')).toEqual(['some', 'camel', 'case']);
  });
});
