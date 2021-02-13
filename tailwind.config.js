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
        badge: ['.6875rem', 1.28],
      },
      boxShadow: {
        DEFAULT: '0px 15px 20px -5px rgba(13, 113, 130, 0.15)',
      },
      borderRadius: {
        card: '.3125rem',
        tag: '.25rem',
      },
      width: {
        featured: '.3125rem',
        22: '5.5rem',
      },
      height: {
        22: '5.5rem',
        39: '9.75rem',
      },
      maxWidth: {
        container: '72.375rem',
      },
      padding: {
        19: '4.75rem',
        30: '7.5rem',
      },
      backgroundImage: {
        'header-desktop': 'url(../images/bg-header-desktop.svg)',
        'header-mobile': 'url(../images/bg-header-mobile.svg)',
      },
    },
  },
}
