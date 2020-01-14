import makeId from '../makeId';

describe('ts-utils/numbers/makeId', () => {
  it('returns random numeric ID', () => {
    expect(makeId()).toEqual(expect.any(Number));
  });
});
