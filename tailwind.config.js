/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', './src/**/*.{js,css}',  "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        yellow: '#F5Cc00',
        black: '#0D1321',
        navy: '#05204A',
        grey: '#628395',
      },
      rotate: {
        rotate: 'transform(90deg)',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
