import dataAttribute from '../dataAttribute';

describe('ts-utils/dom/dataAttribute', () => {
  describe('default', () => {
    const test = dataAttribute('attribute');
    it('returns formatted data attribute', () => {
      expect(test.name()).toEqual('data-attribute');
      expect(`${test}`).toEqual('data-attribute=""');
    });
  });
  describe('prefix', () => {
    const test = dataAttribute('attribute', 'prefix');
    test.value(true);
    describe('asObject', () => {
      it('returns data attribute object', () => {
        expect(test.asObject()).toEqual({ 'data-prefix-attribute': 'true' });
        expect(test.asObject(false)).toEqual({
          'data-prefix-attribute': 'false',
        });
      });
    });
    describe('assign', () => {
      it('assigns data attribute to an element', () => {
        const element = document.createElement('div');
        test.assign(element);
        expect(element.getAttribute('data-prefix-attribute')).toEqual('false');
      });
    });
    describe('asString', () => {
      it('returns data attribute string', () => {
        expect(test.asString()).toEqual('data-prefix-attribute="false"');
        expect(test.asString('something')).toEqual(
          'data-prefix-attribute="something"',
        );
      });
    });
    describe('name', () => {
      it('returns data attribute name', () => {
        expect(test.name()).toEqual('data-prefix-attribute');
      });
    });
    describe('value', () => {
      it('sets and returns current value', () => {
        expect(test.value()).toBe('something');
        expect(test.value('new')).toBe('new');
      });
    });
  });
});
