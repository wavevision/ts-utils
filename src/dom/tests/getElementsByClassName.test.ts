import getElementsByClassName from '../getElementsByClassName';

import { createParentWithChild, CLASS_NAME } from './utils';

describe('ts-utils/dom/getElementsByClassName', () => {
  it('returns HTMLCollection', () => {
    expect(getElementsByClassName('')).toEqual(
      document.getElementsByClassName(''),
    );
    const [parent, child] = createParentWithChild();
    expect(
      getElementsByClassName<HTMLDivElement>(CLASS_NAME, parent),
    ).toContain(child);
  });
});
