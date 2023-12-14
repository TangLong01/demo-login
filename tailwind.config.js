/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      greenDefault: "mediumseagreen",
      gray: "gray",
      white: "white",
      black: "black",
      homeBg: "#F0FFF0",
    },
    backgroundImage: {
      "bg-login": "url('images/bg-login.png')",
    },
  },
  plugins: [],
};
