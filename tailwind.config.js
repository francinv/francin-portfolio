/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './modules/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    borderWidth: {
      0.5: '0.5px',
      DEFAULT: '1px',
      2: '2px',
    },
    extend: {
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
      fontFamily: {
        primary: 'Lucida Grande',
        secondary: 'Monaco',
        tertiary: 'Avenir',
      },
      fontSize: {
        xs: '10px',
        sm: '12px',
        md: '14px',
        lg: '16px',
        xl: '18px',
      },
      colors: {
        black: {
          100: 'rgba(0,0,0,0.5)',
          200: '#231E1B',
          300: '#2B211E',
          1000: '#000000',
        },
        gray: {
          100: 'rgb(59, 51, 47)',
          200: 'rgba(87, 88, 84, 0.5)',
          300: '#6b6462',
          400: '#908E90',
          500: '#3A363A',
          600: '#1C1C1D',
          700: '#59585d',
          800: 'rgb(71, 71, 71)',
        },
        blue: {
          100: '#2878B7',
          200: '#3A82F7',
        },
        purple: {
          100: '#63288A',
        },
        red: {
          100: '#FC615C',
        },
        yellow: {
          100: '#FCBB40',
        },
        green: {
          100: '#34C648',
        },
        white: {
          100: 'rgba(255,255,255,0.2)',
          1000: '#FFFFFF',
        },
      },
      spacing: {
        7.5: '7.5px',
        15: '15px',
      },
    },
  },
  plugins: [],
};
