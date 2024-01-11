/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      myBorder: '#a342ff',
      myBG: '#f2f2f2',
      darkBG: '#fcfcfd',
      white: '#ffffff',
      black: '#000000',
      mytext: '#3b3b3b',
      gray: '#D3D3D3'
    },
    fontFamily: {
      mulish: ['Mulish']
    }
  },
  plugins: [],
}

