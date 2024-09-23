/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      lexend: ["Lexend Deca", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};
