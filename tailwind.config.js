/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: {
          black: '#131127',
          white: '#FCFCFD',
          dark: '#FBAB18',
        },
        secondary: {
          blue: '#3BBBEC',
          gray: '#B3B2B7',
          green: '#2BC058',
          red: '#EF453C',
          bluegray: '#64748B',
        },
        danger: '#EF4444',
        success: '#10B981',
      },
    },
  },
  plugins: [],
};
