const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: {
        DEFAULT: '#5CA5A5',
      },
      neutral: {
        lightest: '#EFFAFA',
        light: '#B7C4C4',
        dark: '#7C8F8F',
        darkest: '#2B3939',
      },
      white: '#FFF',
    },
    extend: {
      fontFamily: {
        sans: ['SpartanVariable', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        body: ['.9375rem', 1.6],
      },
    },
  },
}
