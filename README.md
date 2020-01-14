# Wavevision TypeScript Utils

[![Build Status](https://travis-ci.org/wavevision/ts-utils.svg?branch=master)](https://travis-ci.org/wavevision/ts-utils)
[![Coverage Status](https://coveralls.io/repos/github/wavevision/ts-utils/badge.svg?branch=master)](https://coveralls.io/github/wavevision/ts-utils?branch=master)
[![npm](https://img.shields.io/npm/v/@wavevision/ts-utils)](https://www.npmjs.com/package/@wavevision/ts-utils)

Set of useful TypeScript utilities and helpers.

## Installation

Via [Yarn](https://yarnpkg.com)

```bash
yarn add @wavevision/ts-utils
```

or [npm](https://npmjs.com)

```bash
npm install --save @wavevision/ts-utils
```

## Contents

The package contains useful functions for:

- [components](./src/components) – get `displayName` of a React component with fallback for unknown
- [numbers](./src/numbers) – generate numeric IDs, format floats
- [strings](./src/strings) – generate random strings, format, capitalize, shallow stringify objects
- [type](./src/type) – type safe checkers
- [url](./src/url) – parse current URL including query string **(browser only)**
