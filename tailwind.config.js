/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      screens: {
        xl: '1160px',
      },
      center: true,
    },
    maxWidth: {
      'dashboard': '81.25rem',
    },
    minHeight: {
      '20': '80px',
    },
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
    },
    extend: {
      spacing: {
        '1.5': '0.375rem',
        '48.5': '12.125rem',
        '75': '18.75rem',
        '76.25': '19.063rem',
      },
      borderRadius: {
        'base': '2rem',
        '5': '1.25rem',
      },
      colors: {
        white: '#F8F9FA',
        black: '#141414',
        'grey-1': '#2C2C2C',
        'grey-2': '#A1A1A1',
        'grey-3': '#ADB5BD',
      },
      fontSize: {
        '4': '1rem',
        base: '0.875rem',
        '7': '1.75rem',
        '17.5': '4.375rem',
      },
      letterSpacing: {
        '4': '0.04px',
        '2': '0.02px',
        'title': '101.5%'
      },
      lineHeight: {
        '4': '107%',
      }
    },
  },
  plugins: [require('tailwindcss-animated')],
}
