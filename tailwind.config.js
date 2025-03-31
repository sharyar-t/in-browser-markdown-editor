/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        slate: {
          100: '#FFFFFF',
          200: '#F5F5F5',
          300: '#E4E4E4',
          400: '#C1C4CB',
          500: '#7C8187',
          600: '#5A6069',
          700: '#35393F',
          800: '#2B2D31',
          900: '#1D1F22',
          1000: '#151619',
        },
        orange: {
          300: '#F39765',
          500: '#E46643',
        },
      },
    },
  },
  plugins: [],
}
