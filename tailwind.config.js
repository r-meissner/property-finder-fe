/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        indigo: {
          100: '#e0e7ff',
          300: '#a5b4fc',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
        },
        purple: {
          500: '#8b5cf6',
        },
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dark'],
  },
};
