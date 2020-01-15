import { ParentElement } from './types';

const getElementsBySelector = <T extends HTMLElement = HTMLElement>(
  selector: string,
  parent: ParentElement = document,
): NodeListOf<T> => parent.querySelectorAll(selector);

export default getElementsBySelector;
