/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "t-",
  theme: {
    extend: {
      screens: {
        lg: '970px',
      },
      colors: {
        custom: {
          teal: '#00B9AE',
          dark1: '#16181E',
          dark2: '#21242D',
          dark3: '#2c2f36',
        },
      },
      boxShadow: {
        'strong-top': '0 -30px 70px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],

};
