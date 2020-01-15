import { resolve } from 'path';
import { copyFileSync, writeFileSync } from 'fs';

import pkg from '../package.json';

const ROOT = resolve(__dirname, '..');
const DIST = resolve(ROOT, 'dist');

const COPY = ['LICENSE', 'README.md'];

const run = (): void => {
  delete pkg.scripts;
  delete pkg.types;
  pkg.main = 'index.js';
  COPY.forEach(file => copyFileSync(resolve(ROOT, file), resolve(DIST, file)));
  writeFileSync(resolve(DIST, 'package.json'), JSON.stringify(pkg, null, 2));
};

run();
