const color = require("./node_modules/tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      lexend: ["Lexend Deca", "sans-serif"],
    },
    colors: {
      ...color,
      "donate-100": "#faf8f5",
      "donate-200": "#b5f562",
    },
  },
  plugins: [require("daisyui")],
};
