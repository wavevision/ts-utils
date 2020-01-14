const isNil = (n: unknown): n is null | undefined =>
  n === null || n === undefined;

export default isNil;
