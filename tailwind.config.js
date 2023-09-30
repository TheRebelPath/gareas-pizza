/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#a71d2a',
        secondary: '#da7f36',
      },
      backgroundImage: {
        'price-tag': "url('../src/assets/pricetag.png')",
      },
    },
  },
  plugins: [],
};
