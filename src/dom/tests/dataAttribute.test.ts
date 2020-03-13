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
        expect(test.get(test.assign(element))).toEqual('false');
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
    describe('get', () => {
      it('returns value of a data attribute on an element', () => {
        expect(test.get(document.createElement('div'))).toBe(null);
      });
    });
    describe('has', () => {
      it('returns whether an element has a data attribute', () => {
        expect(test.has(document.createElement('div'))).toBe(false);
      });
    });
    describe('name', () => {
      it('returns data attribute name', () => {
        expect(test.name()).toEqual('data-prefix-attribute');
      });
    });
    describe('remove', () => {
      it('removes data attribute from an element', () => {
        const element = document.createElement('div');
        test.assign(element);
        expect(test.has(test.assign(element))).toBe(true);
        expect(test.has(test.remove(element))).toBe(false);
      });
    });
    describe('toString', () => {
      it('formats data attribute as string', () => {
        expect(String(test)).toEqual('data-prefix-attribute="something"');
      });
    });
    describe('toJSON', () => {
      it('serializes data attribute for JSON format', () => {
        expect(JSON.stringify(test)).toEqual(
          '{"data-prefix-attribute":"something"}',
        );
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
