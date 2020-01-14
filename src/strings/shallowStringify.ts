const shallowStringify = (object: unknown): string =>
  JSON.stringify(object, (k, v) => (k ? String(v) : v));

export default shallowStringify;
