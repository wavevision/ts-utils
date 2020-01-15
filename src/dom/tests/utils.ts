export const CLASS_NAME = 'test';
export const SELECTOR = `.${CLASS_NAME}`;

export const createParentWithChild = (): [HTMLElement, HTMLElement] => {
  const parent = document.createElement('div');
  const child = document.createElement('div');
  child.className = CLASS_NAME;
  parent.appendChild(child);
  document.body.appendChild(parent);
  return [parent, child];
};
