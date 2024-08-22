/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', './src/**/*.{js,css}',  "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        yellow: '#F5Cc00',
        vanilla: '#F4E9B4',
        black: '#0D1321',
        navy: '#12213c',
        blue: '#345270',
        grey: '#628395',
        french: '#ABBBC2',
        white: '#F3F2EF',
      },
      rotate: {
        rotate: 'transform(90deg)',
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@designbycode/tailwindcss-text-stroke')
  ],
}
