/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
import type { Config } from "tailwindcss";

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
} satisfies Config);
