/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    fontFamily: {
      iransansxL: ["iransansxL", "sans-serif"],
      iransansxR: ["iransansxR", "sans-serif"],
      iransansxM: ["iransansxM", "sans-serif"],
      iransansxB: ["iransansxB", "sans-serif"],
    },
    extend: {
      screens: {
        'xl': '1200px',
        'l': '992px',
        'sm':'480px',
      },
    },
  },
  plugins: [],
}

