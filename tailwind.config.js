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
      portfolio_spring_wood: '#fbf8f7',
    },
    height: {
      half_screen: '50vh',
      twenty_screen: '20vh',
      thirty_screen: '30vh',
      half_width: '50vw',
    },
    extend: {
      backgroundImage: () => ({
        'book-store': "linear-gradient(179.35deg, rgba(38, 38, 38, 0) 0.85%, rgba(38, 38, 38, 0.9) 84%),url('./assets/images/book-store.png')",
        'covid-19-tracker': "linear-gradient(179.35deg, rgba(38, 38, 38, 0) 0.85%, rgba(38, 38, 38, 0.9) 84%),url('./assets/images/covid-19-tracker.png')",
        'library-app': "linear-gradient(179.35deg, rgba(38, 38, 38, 0) 0.85%, rgba(38, 38, 38, 0.9) 84%),url('./assets/images/library-app.png')",
        'schedule-tracker': "linear-gradient(179.35deg, rgba(38, 38, 38, 0) 0.85%, rgba(38, 38, 38, 0.9) 84%),url('./assets/images/schedule-tracker.png')",
        'tic-tac-toe': "linear-gradient(179.35deg, rgba(38, 38, 38, 0) 0.85%, rgba(38, 38, 38, 0.9) 84%),url('./assets/images/tic-tac-toe.png')",

      }),
      fontFamily: {
        inter: ['Inter'],
        creteRound: ['Crete Round'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
