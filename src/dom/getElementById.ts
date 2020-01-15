const getElementById = <T extends HTMLElement = HTMLElement>(
  id: string,
): T | null => document.getElementById(id) as T;

export default getElementById;
