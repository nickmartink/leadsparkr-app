module.exports = {
  content: [
    './pages/**/*.{html,js,tsx}',
    './components/**/*.{html,js,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-purple': {
          DEFAULT: '#2B1F31'
        },
        'brand-blue': {
          DEFAULT: '#413D65'
        },
        'brand-aqua': {
          DEFAULT: '#5FB9B0'
        },
        'brand-green': {
          DEFAULT: '#BEF992'
        },
        'brand-neon': {
          DEFAULT: '#00FF6F'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
