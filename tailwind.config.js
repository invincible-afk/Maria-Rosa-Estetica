/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          lavender: '#E6E1F3',
          beige: '#F5EFE6',
          gold: '#D4AF37',
          dark: {
            lavender: '#2D2B3F',
            beige: '#2C2925',
            gold: '#B69530',
          },
        },
        secondary: {
          mint: '#D6E8D2',
          gray: '#A7A9AC',
          dark: {
            mint: '#2A3F28',
            gray: '#4A4C4E',
          },
        },
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        lato: ['Lato', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};