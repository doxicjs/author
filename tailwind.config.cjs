/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    fontSize: {
      "xs": "0.75rem",
      "sm": "0.875rem",
      "base": "1rem",
      "md": "1.125rem",
      "lg1": "1.25rem",
      "lg2": "1.5rem",
      "lg3": "1.75rem",
      "xl1": "2rem",
      "xl2": "2.25rem",
      "xl3": "2.625rem",
      "xxl1": "3rem",
      "xxl2": "3.375rem",
      "xxl3": "3.75rem",
      "xxxl1": "4.25rem",
      "xxxl2": "4.75rem",
      "xxxx1": "5.25rem",
      "xxxx2": "5.75rem",
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