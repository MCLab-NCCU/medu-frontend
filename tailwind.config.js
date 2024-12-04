/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: "500px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
