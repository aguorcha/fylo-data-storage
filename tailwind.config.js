/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', 
    './src/**/*.{vue, js, ts, jsx, tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif']
      },
      colors: {
        'gradient': 'linear-gradient(to right, hsl(6, 100%, 80%), hsl(335, 100%, 65%))',
        'pale-blue': 'hsl(243, 100%, 93%)',
        'grayish-blue': 'hsl(229, 7%, 55%)',
        'dark-blue': 'hsl(228, 56%, 26%)',
        'very-dark-blue': 'hsl(229, 57%, 11%)',
      },
    },
  },
  plugins: [],
}

