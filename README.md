# @resf/pebble

> Pebble is the upcoming UI design kit for the RESF&#x27;s web experiences.

[![NPM](https://img.shields.io/npm/v/@resf/pebble.svg)](https://www.npmjs.com/package/@resf/pebble)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Development

You can develop Pebble using one of two methods:

### With the Dockerfile (recommended)

To work on them through a Dockerfile, use the Dockerfile in
`scripts/Dockerfile.dev`. It will perform all of the steps you would have to do
manually (`npm install` in the source and example, start the compilers, and run
the example site) automatically, so you can focus on working instead of setting
up the dev environment.

```bash
docker build -t pebble -f scripts/Dockerfile.dev .
docker run --rm -p 3000:3000 -v $(pwd):/app pebble
```

### Manually, with NPM

First, install the main library dependencies.

```bash
npm install
```

Then, install the example site dependencies.

```bash
cd example && npm install
```

Once done, you can run `npm start` and `npm run css:watch` to begin compiling
the sources, including stylesheet.

To start the example site server, go into the `example` folder and run
`npm start`.

## Installation

```bash
npm install --save @resf/pebble
```

## Usage

```tsx
import React from 'react'

import { Button } from '@resf/pebble'
import '@resf/pebble/dist/styles.css'

const Example = () => {
  return <Button small primary>Hey guys!</Button>
}
```

## License

This project, the source code within it, and all produced distributions of it,
are licensed purely under the BSD 3-Clause license, a copy of which can be found
in the accompanying [LICENSE](./LICENSE) file.
