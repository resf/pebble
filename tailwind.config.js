const colors = require('tailwindcss/colors');
module.exports = {
  purge: {
    content: [ 'src/**/*.{ts,tsx}' ],
    safelist: [
      'bg-gray-200',
      'bg-red-200',
      'bg-yellow-200',
      'bg-green-200',
      'bg-blue-200',
      'bg-indigo-200',
      'bg-purple-200',
      'bg-pink-200',
      'dark:bg-gray-900',
      'dark:bg-red-900',
      'dark:bg-yellow-900',
      'dark:bg-green-900',
      'dark:bg-blue-900',
      'dark:bg-indigo-900',
      'dark:bg-purple-900',
      'dark:bg-pink-900'
    ]
  },

  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: [ 'Red Hat Text', 'sans-serif' ],
      mono: [ 'Overpass Mono', 'monospace' ],
      display: [ 'Red Hat Display', 'sans-serif' ]
    },
    extends: {
      colors: {
        gray: colors.gray
      },
    }
  },

  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
};
