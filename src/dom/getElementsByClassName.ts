import { ParentElement } from './types';

const getElementsByClassName = <T extends HTMLElement = HTMLElement>(
  className: string,
  parent: ParentElement = document,
): HTMLCollectionOf<T> =>
  parent.getElementsByClassName(className) as HTMLCollectionOf<T>;

export default getElementsByClassName;
