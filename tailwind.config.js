module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        '2xl': '1400px',
      },
      colors: {
        title: "#E4F6ED",
        background: "#DFF9F7",
        blue: {
          450: "#5684AE",
          950: "#0F4C81"
        },
        red: {
          450: "#FFE4C8",
          950: "#F9BE81"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
