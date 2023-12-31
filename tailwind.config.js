/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        monospace: ['Courier New', 'Courier', 'monospace'],
      },
      colors: {
        light: '#f8f8f8',
        'dark-I': '#282d35',
        'dark-II': '#232930',
        'very-dark': '#21222a',
        dark: '#1A202C',
        'dark-text': '#FFFFFF',
      },
      transitionProperty: {
        colors: 'background-color, color',
      },
    },
  },
  plugins: [],
};
