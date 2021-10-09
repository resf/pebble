const colors = require('tailwindcss/colors');
module.exports = {
  purge: [ 'src/**/*.{ts,tsx}' ],

  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: [ 'Red Hat Text', 'sans-serif' ],
      mono: [ 'Overpass Mono', 'monospace' ]
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
