import getElementByClassName from '../getElementByClassName';

import { CLASS_NAME, createParentWithChild } from './utils';

describe('ts-utils/dom/getElementByClassName', () => {
  it('returns HTMLElement or null', () => {
    expect(getElementByClassName('')).toBeNull();
    const [parent, child] = createParentWithChild();
    expect(getElementByClassName<HTMLDivElement>(CLASS_NAME, parent)).toBe(
      child,
    );
  });
});
