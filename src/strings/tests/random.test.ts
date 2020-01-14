import random from '../random';

describe('ts-utils/strings/random', () => {
  it('generates a random string', () => {
    expect(random()).toHaveLength(5);
    expect(random(8)).toHaveLength(8);
  });
});
