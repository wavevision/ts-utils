const getName = <T>(c: import('react').ComponentType<T>): string =>
  c.displayName || c.name || 'Component';

export default getName;
