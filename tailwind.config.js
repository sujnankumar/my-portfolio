/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e40af',
          dark: '#0A2540',
        },
        accent: '#00BFFF',
        background: '#121212',
        'light-bg': '#f8fafc',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      animation: {
        'bounce': 'bounce 2s infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      lineHeight: {
        '12': '3rem',
      },
    },
  },
  plugins: [],
};