/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    fontSize: null,
    fontFamily: null,
    fontWeight: null,
    spacing: {
      '1': '0.125rem',
      '2': '0.25rem',
      '3': '0.5rem',
      '4': '0.75rem',
      '5': '1rem',
      '6': '1.5rem',
      '7': '2rem',
      '8': '2.5rem',
      '9': '3rem',
      '10': '4rem',
      '11': '5rem',
      '12': '6rem',
      '13': '10rem',
    },
    colors: {
      neutral: {
        black: '#000',
        950: '#0f171f',
        900: '#1D2D3D',
        800: '#344250',
        700: '#4a5764',
        600: '#616c77',
        500: '#77818b',
        400: '#8e969e',
        300: '#a5abb1',
        200: '#bbc0c5',
        100: '#d2d5d8',
        50: '#f4f5f6',
        white: '#fff',
      },
    }
  },
  plugins: []
};