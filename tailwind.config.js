/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#111729",
        primary: "#ECB365",
        secondary: "#064663",
        darkSecondary: "#04293A",
      },
      fontFamily: {
        body: ["Be Vietnam Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
