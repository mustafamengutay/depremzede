/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xl: '1160px',
    },
    container: {
      center: true,
    },
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        white: '#F8F9FA',
        black: '#141414',
        'grey-1': '#2C2C2C',
      },
      fontSize: {
        base: '0.875rem',
        '7': '1.75rem',
      },
      letterSpacing: {
        '4': '0.04px',
      }
    },
  },
  plugins: [],
}
