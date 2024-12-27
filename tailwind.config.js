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
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        title1: '48px',
        title2: '34px',
        title3: '24px',
        title4: '24px',
        body1: '16px',
        body2: '14px',
        caption: '12px',
        overline: '10px',
        overline: '10px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        // '.th1': {
        //   fontSize: '48px',
        // },
        // '.th2': {
        //   fontSize: '34px',
        // },
        // '.th3': {
        //   fontSize: '24px',
        // },
        // '.th4': {
        //   fontSize: '20px',
        // },
        // '.fontBody1': {
        //   fontSize: '16px',
        // },
        // '.fontBody2': {
        //   fontSize: '14px',
        // },
        // '.fontCaption': {
        //   fontSize: '12px',
        // },
        // '.fontOverline': {
        //   fontSize: '10px',
        // },
        '.btnSm': {
          fontWeight: 600,
          fontSize: '14px',
        },
        '.btnMd': {
          fontWeight: 600,
          fontSize: '16px',
        },
        '.btnLg': {
          fontWeight: 600,
          fontSize: '18px',
        },
        '.fontVerySmall': {
          fontWeight: 600,
          fontSize: '12px',
        },
        '.fontSmallest': {
          fontWeight: 600,
          fontSize: '10px',
        },
      });
    },
  ],
};
