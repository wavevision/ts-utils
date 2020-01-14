const splitCamelCase = (s: string): Array<string> =>
  s.split(/(?=[A-Z])/).map(s => s.toLowerCase());

export default splitCamelCase;
