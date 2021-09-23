module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-portrait': "url('/img/Headshot_Final_Portrait.jpg')",
        'hero-landscape': "url('/img/Headshot_Final_Landscape.jpg')",
      })
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
