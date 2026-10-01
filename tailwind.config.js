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
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.2s ease-out',
        'slide-up': 'slide-up 0.3s ease-out',
      },
    },
  },
  plugins: [],
};
