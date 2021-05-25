module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-portrait': "url('./img/Headshot_20210524_Portrait.jpg')",
        'hero-landscape': "url('./img/Headshot_20210524_Landscape.jpg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
