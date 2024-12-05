/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: "500px",
      lg: "1024px",
      xl: "1440px",
    },
    keyframes: {
      spinRight: {
        "0%, 100%": { transform: "skew-y-0" },
        "90%": { transform: "skew-y-12" },
      },
      spinLeft: {
        "0%, 100%": { transform: "skew-y-0" },
        "90%": { transform: "-skew-y-12" },
      },
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
