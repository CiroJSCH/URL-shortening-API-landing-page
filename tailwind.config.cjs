/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-cyan': 'hsl(180, 66%, 49%)',
        'primary-violet': 'hsl(257, 27%, 26%)',
        secondary: 'hsl(0, 87%, 67%)',
        'gray-500': 'hsl(0, 0%, 75%)',
        'gray-600': 'hsl(257, 7%, 63%)',
        'gray-700': 'hsl(255, 11%, 22%)',
        'gray-800': 'hsl(260, 8%, 14%)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'boost-mobile': "url('@/assets/images/bg-boost-mobile.svg')",
        'boost-desktop': "url('@/assets/images/bg-boost-desktop.svg')",
      },
    },
    screens: {
      xl: '1440px',
    },
  },
  plugins: [],
};
