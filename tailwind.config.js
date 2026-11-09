/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#0a0b0d',
          800: '#121317',
          700: '#1a1c22',
          600: '#22252d',
          500: '#2c3038',
        },
        olive: {
          50: '#f6f7f0',
          100: '#e8ead4',
          200: '#d1d5a8',
          300: '#b3bb78',
          400: '#94a04f',
          500: '#76823a',
          600: '#5c6830',
          700: '#474f28',
          800: '#373d23',
          900: '#2c3120',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          dark: '#1ebe57',
        },
        shopee: {
          DEFAULT: '#ee4d2d',
          dark: '#d23f23',
        },
      },
      fontFamily: {
        display: ['"Oswald"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '0.8' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'fade-in': 'fade-in 1.2s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
