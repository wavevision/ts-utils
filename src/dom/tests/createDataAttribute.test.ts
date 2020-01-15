import createDataAttribute from '../createDataAttribute';

describe('ts-utils/dom/createDataAttribute', () => {
  it('returns formatted data attribute', () => {
    expect(createDataAttribute('attribute')).toEqual('data-attribute');
    expect(createDataAttribute('attribute', 'prefix')).toEqual(
      'data-prefix-attribute',
    );
  });
});
