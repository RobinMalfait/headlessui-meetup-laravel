let colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./{pages,components,ui}/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ...colors,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
