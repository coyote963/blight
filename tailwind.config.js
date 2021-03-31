module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media'] or 'class'
  theme: {
    extend: {
      colors : {
        navy: '#4d6093',
        sand: '#ebe1cf',
        mediumbrown: '#c6b597', 
        darkbrown: '#805c3d',
        darkgrey: '#1b1b1b',
        chestnut: '#AF4846',
        grullo: '#A2988F',
        grulloshade: '#90847A',
        celladon: '#A0E8AF',
        lemon: '#F6FEAA'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  fontFamily: {
    sans: ['Graphik', 'sans-serif'],
    serif: ['Merriweather', 'serif'],
    display: ['datale']
  },
}