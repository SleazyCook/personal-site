// const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    content: [
      './src/*.js',
      './src/*.jsx'
    ],
  },

  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
