import getElementsByClassName from './getElementsByClassName';
import { ParentElement } from './types';

const getElementByClassName = <T extends HTMLElement = HTMLElement>(
  className: string,
  parent: ParentElement = document,
): T | null => getElementsByClassName<T>(className, parent).item(0);

export default getElementByClassName;
