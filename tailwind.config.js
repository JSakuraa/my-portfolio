const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      orange: {
        DEFAULT: '#FF4C29',
      },
      gray: {
        darkest: '#082032',
        DEFAULT: '#2C394B',
        light: '#334756',
      },
      white: {
        DEFAULT: '#F9FAFB',
      }
    },
  },
  variants: {
    extend: {},
  },
    plugins: [
      require('@tailwindcss/typography'),
    ]
}
