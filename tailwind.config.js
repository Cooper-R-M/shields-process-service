/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', './src/**/*.{js,css}',  "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        ["roboto slab"]:
        ["libre franklin"]
      },
      colors: {
        yellow: '#F5Cc00',
        vanilla: '#F4E9B4',
        black: '#0D1321',
        navy: '#12213c',
        navy2: '#143e68',
        blue: '#345270',
        grey: '#628395',
        french: '#ABBBC2',
        white: '#F3F2EF',
        brown2: '#B04A10',
        brown3: '#D9631F',
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
