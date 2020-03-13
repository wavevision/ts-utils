import camelCaseToDashCase from '../strings/camelCaseToDashCase';

export interface DataAttribute {
  readonly asObject: (value?: unknown) => { [K: string]: string };
  readonly assign: <T extends Element = Element>(element: T) => T;
  readonly asString: (value?: unknown) => string;
  readonly get: <T extends Element = Element>(element: T) => string | null;
  readonly has: <T extends Element = Element>(element: T) => boolean;
  readonly name: () => string;
  readonly remove: <T extends Element = Element>(element: T) => T;
  readonly toJSON: () => { [K: string]: string };
  readonly toString: () => string;
  readonly value: (value?: unknown) => string;
}

const dataAttribute = (attribute: string, prefix?: string): DataAttribute => {
  const currentName = camelCaseToDashCase(
    prefix ? `data-${prefix}-${attribute}` : `data-${attribute}`,
  );
  let currentValue = '';
  const value: DataAttribute['value'] = v => {
    if (typeof v !== 'undefined') currentValue = `${v}`;
    return currentValue;
  };
  const asObject: DataAttribute['asObject'] = v => ({
    [currentName]: value(v),
  });
  const assign: DataAttribute['assign'] = e => {
    e.setAttribute(currentName, currentValue);
    return e;
  };
  const asString: DataAttribute['asString'] = v =>
    `${currentName}="${value(v)}"`;
  const get: DataAttribute['get'] = e => e.getAttribute(currentName);
  const has: DataAttribute['has'] = e => get(e) !== null;
  const name: DataAttribute['name'] = () => currentName;
  const remove: DataAttribute['remove'] = e => {
    e.removeAttribute(currentName);
    return e;
  };
  return {
    asObject,
    assign,
    asString,
    get,
    has,
    name,
    remove,
    toString: () => asString(),
    toJSON: () => asObject(),
    value,
  };
};

export default dataAttribute;
