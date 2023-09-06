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
      },
      fontSize: {
        base: '0.875rem',
      },
      letterSpacing: {
        'minus-4': '-0.25rem',
      }
    },
  },
  plugins: [],
}
