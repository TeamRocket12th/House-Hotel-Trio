// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: true,
  theme: {
    screens: {
      md: '769px',
      lg: '1024px',
      xl: '1366px'
    },

    extend: {
      colors: {
        primary: '#38470B',
        secondary: '#949C7C'
      }
    },
    fontFamily: {
      sans: ['Noto Sans', 'sans-serif'],
      tc: ['Noto Sans Tc', 'sans-serif']
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
