/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  safelist: [
    {
      pattern: /^(col-span|row-span)-\d+$/,
      variants: ['lg','md','sm','xl'],
    },
    {
      pattern: /^bg-gradient-.+/,
    },
    {
      pattern: /^from-.+/,
    },
    {
      pattern: /^to-.+/,
    }
  ],
  theme: {
    fontFamily: {
      'sans': ['"Source Sans Pro"', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        'graybg':'#e7ecef',
        'blue1':'#00111a'
      }
    },
  },
  plugins: [],
}

