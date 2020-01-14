import shallowStringify from '../shallowStringify';

describe('ts-utils/strings/shallowStringify', () => {
  it('returns stringified object', () => {
    expect(
      shallowStringify({
        prop1: 'value',
        prop2: true,
        prop3: {
          nestedProp1: {
            nestedProp2: 'value',
          },
        },
      }),
    ).toBe('{"prop1":"value","prop2":"true","prop3":"[object Object]"}');
  });
});
