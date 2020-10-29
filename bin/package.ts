import { resolve } from 'path';
import { copyFileSync, writeFileSync } from 'fs';

import pkg from '../package.json';

const ROOT = resolve(__dirname, '..');
const DIST = resolve(ROOT, 'dist');

const COPY = ['LICENSE', 'README.md'];

const run = (): void => {
  COPY.forEach(file => copyFileSync(resolve(ROOT, file), resolve(DIST, file)));
  writeFileSync(
    resolve(DIST, 'package.json'),
    JSON.stringify(
      {
        ...pkg,
        main: 'index.js',
        scripts: undefined,
        types: undefined,
      },
      null,
      2,
    ),
  );
};

run();
