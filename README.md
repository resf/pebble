## This repository has been archived. We have decided not to proceed with the development of Pebble UI at this time.

# @resf/pebble

> Pebble is the upcoming UI design kit for the RESF&#x27;s web experiences.

[![NPM](https://img.shields.io/npm/v/@resf/pebble.svg)](https://www.npmjs.com/package/@resf/pebble)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Development

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
