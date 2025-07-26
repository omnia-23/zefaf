/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Kufi Arabic", "sans-serif"],
      },
      colors: {
        primary: "#DB0962",
        mainColor: "rgb(0, 171, 170)",
        mainColorBolder: "rgb(11, 129, 128)",
      },
    },
  },
  plugins: [],
});
