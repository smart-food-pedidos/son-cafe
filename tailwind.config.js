/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html,js}',
  ],
  theme: {
    fontFamily: {
      'sans': ['Commissioner', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        "home": "url('../assets/bg.webp')"
      }
    },
  },
  plugins: [],
}