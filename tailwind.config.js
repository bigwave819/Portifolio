/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/*.{html,js}"],
  safelist: [
    'rotate-45',
    '-rotate-45'
  ],
  theme: {
    extend: {
      colors:{
        'beige' : '#1e2021',
        'beige-0' : '#242729',
        'beige-1' : '#262a2b',
        'beige-2' : '#181a1b',
        'beige-text' : '#e8e6e3',
        'beige-text-hover' : '#cecac3',
        'beige-text-1' : '#9d9487',
        'shuttle-gray' : '#586064', 
        'blue-text' : '#6398f1',
        'sky' : 'colors.sky',
        'cyan' : 'colors.cyan',
        'indigo-top' : '#182e6e',
        'indigo-top-hover' : '#18338c',
        'royal-blue' : '#19212c',
        'tan' : '#afa99e',
        'tan-1' : '#d9d6d1', 
        'new-brown' : '#9d9487',
        'new-tan' : '#b0a99f',
      }
    },
  },
  plugins: [],
}

