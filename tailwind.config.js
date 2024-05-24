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
        'main-background-img': "url('/background.JPG')",
      },
      fontFamily: {
        sans: ['Montserrat'],
        'tc': ['Noto Sans TC'],
        'zh': ['Noto Sans SC'],
        'script': ['Meow Script']
      },
      colors: {
        'main-color': '#07e342',
        'section-bg': "gray-500",
      }
    },
  },
  plugins: [],
}

