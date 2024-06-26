/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat'],
        'tc': ['Noto Sans TC'],
        'zh': ['Noto Sans SC'],
        'script': ['Meow Script']
      },
      colors: {
        'brand': '#07e342',
      }
    },
  },
  plugins: [],
}

