import getElementsBySelector from '../getElementsBySelector';

import { createParentWithChild, SELECTOR } from './utils';

describe('ts-utils/dom/getElementBySelector', () => {
  it('returns HTMLElement or null', () => {
    expect(getElementsBySelector(SELECTOR)).toEqual(
      document.querySelectorAll(SELECTOR),
    );
    const [parent, child] = createParentWithChild();
    expect(getElementsBySelector<HTMLDivElement>(SELECTOR, parent)).toContain(
      child,
    );
  });
});
