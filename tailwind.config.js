/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', './src/**/*.{js,css}',  "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        yellow: '#F5Cc00',
        black: '#0D1321',
        navy: '#05204A',
        blue: '#628395',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
