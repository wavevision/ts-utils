export interface DataAttribute {
  readonly asObject: (value?: unknown) => { [K: string]: string };
  readonly assign: <T extends Element = Element>(element: T) => T;
  readonly asString: (value?: unknown) => string;
  readonly name: () => string;
  readonly toString: () => string;
  readonly value: (value?: unknown) => string;
}

const dataAttribute = (attribute: string, prefix?: string): DataAttribute => {
  const currentName = prefix
    ? `data-${prefix}-${attribute}`
    : `data-${attribute}`;
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
  const name: DataAttribute['name'] = () => currentName;
  return {
    asObject,
    assign,
    asString,
    name,
    toString: () => asString(),
    value,
  };
};

export default dataAttribute;
