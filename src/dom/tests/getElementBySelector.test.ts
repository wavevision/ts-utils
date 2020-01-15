import getElementBySelector from '../getElementBySelector';

import { createParentWithChild, SELECTOR } from './utils';

describe('ts-utils/dom/getElementBySelector', () => {
  it('returns HTMLElement or null', () => {
    expect(getElementBySelector(SELECTOR)).toBeNull();
    const [parent, child] = createParentWithChild();
    expect(getElementBySelector<HTMLDivElement>(SELECTOR, parent)).toBe(child);
  });
});
