/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-background-img': "url('./src/assets/background.JPG')",
      },
      colors: {

      }
    },
  },
  plugins: [],
}

