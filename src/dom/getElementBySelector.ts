import { ParentElement } from './types';

const getElementBySelector = <T extends HTMLElement = HTMLElement>(
  selector: string,
  parent: ParentElement = document,
): T => parent.querySelector(selector) as T;

export default getElementBySelector;
