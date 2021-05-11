module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      portfolio_orange: '#f55800',
      portfolio_mercury: '#e5e5e5',
      portfolio_mineShaft: '#3e3c3c',
      portfolio_downriver: '#091e42',
      portfolio_cod_gray: '#1c1a19',
    },
    extend: {
      fontFamily: {
        inter: ['Inter'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
