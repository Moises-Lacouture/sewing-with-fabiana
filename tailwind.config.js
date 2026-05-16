/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { cream: '#E8E4DF', burgundy: '#6B2C32', charcoal: '#2D2D2D', steel: '#B0BFD0' },
    },
  },
  plugins: [],
};
