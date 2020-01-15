const createDataAttribute = (attribute: string, prefix?: string): string =>
  prefix ? `data-${prefix}-${attribute}` : `data-${attribute}`;

export default createDataAttribute;
