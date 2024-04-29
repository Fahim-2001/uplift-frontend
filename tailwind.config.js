/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        base:'#ffffff',
        primary:'#f97316',
        hover: '#ea580c',
        secondary:'#000000',
        placeholder:'#898989'
      },
      padding:{
        primary:"0.25rem 1.25rem"
      }
    },
  },
  plugins: [],
}

