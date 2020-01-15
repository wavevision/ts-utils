import getElementById from '../getElementById';

describe('ts-utils/dom/getElementById', () => {
  it('returns HTMLElement or null', () => {
    expect(getElementById('')).toBeNull();
    const element = document.createElement('div');
    element.id = 'test';
    document.body.appendChild(element);
    expect(getElementById<HTMLDivElement>('test')).toBe(element);
  });
});
