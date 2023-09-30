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
        'blue3': '#8ecae6',
        'blue2': '#219ebc',
        'blue1': '#023047',
        'green1':'#2a9d8f',
        'yellow1':'#ffb703',
        'orange1':'#fb8500',
        'pink1':'#ff6392',
        'red1':'#e63946'
      }
    },
  },
  plugins: [],
}

