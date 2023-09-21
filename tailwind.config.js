/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      header: ['"Bebas Neue"', "sans-serif"],
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        novaBlue: "#156AF5",
        novaYellow: "#FFFF2B",
        novaPurple: "#6020F1",
        novaDarkGrey: "#161616",
        novaGrey: "#334047",
        novaLightGrey: "#F6F6F6",
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
