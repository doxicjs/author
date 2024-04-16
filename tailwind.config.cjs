/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        neutral: {
          black: '#000',
          950: '#1C2B3A',
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
    }
  },
  plugins: []
};