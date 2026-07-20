/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#83c437',
          blue: '#1d83de',
          'dark-blue': '#042882',
          'darker-blue': '#0062ce',
          gray: '#282828',
          'light-gray': '#bbbbbb',
          yellow: '#fdc300',
        },
      },
      fontFamily: {
        slab: ['Roboto Slab', 'serif'],
        condensed: ['Roboto Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
