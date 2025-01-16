/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './*.html'],
  theme: {
    extend: {
      colors: {
        primary: '#E34C80',
        secondary:'#5B5B5B',
      },
    },
  },
  plugins: [],
};
