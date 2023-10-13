/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
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
      keyframes: {
        slideIn: {
          "0%": { opacity: 0, transform: "translateX(100%)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
      animation: {
        slideIn: "slideIn .25s ease-in-out forwards var(--delay, 0)",
      },
      transitionDelay: {
        1500: "1500ms",
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
  plugins: [require("tailwindcss-debug-screens")],
};
