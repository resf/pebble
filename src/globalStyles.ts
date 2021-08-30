import { globalCss } from '@stitches/react';

export default globalCss({
  '@import': [
    'https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;700&display=swap',
    'https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@400;700&display=swap'
  ],
  '*': {
    fontFamily: '"Red Hat Text", sans-serif'
  },
  'h1, h2, h3, h4, h5, h6': {
    fontFamily: '"Red Hat Display", sans-serif'
  }
});
