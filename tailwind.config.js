/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        monospace: ["Courier New", "Courier", "monospace"],
      },
      colors: {
        light: "#f8f8f8",
        dark: "#282d35",
        "very-dark": "#21222a",
      },
    },
  },
  plugins: [],
};
