/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'light-gray': '#3f3f3f',
        'primary-orange': '#ff8d27',
      }
    },
  },
  plugins: [],
}
