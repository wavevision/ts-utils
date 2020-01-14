import { parse, UrlWithParsedQuery } from 'url';

const parseCurrentUrl = (): UrlWithParsedQuery =>
  parse(window.location.href, true);

export default parseCurrentUrl;
