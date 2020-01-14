import parseCurrentUrl from '../parseCurrentUrl';

describe('ts-utils/url/parseCurrentUrl', () => {
  it('returns parsed URL including query string', () => {
    Object.defineProperty(window, 'location', {
      value: { href: 'http://domain.tld/path/?param=1' },
    });
    const parsed = parseCurrentUrl();
    expect(parsed.host).toBe('domain.tld');
    expect(parsed.protocol).toBe('http:');
    expect(parsed.path).toBe('/path/?param=1');
    expect(parsed.pathname).toBe('/path/');
    expect(parsed.query).toEqual({ param: '1' });
  });
});
