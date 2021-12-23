module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cream: '#EFE9F4',
        bluecity: '#0093d2',
        bluecity_dark: '#004981'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
