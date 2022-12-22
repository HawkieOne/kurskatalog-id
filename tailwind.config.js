/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: "#F55065",
        onyx: "#1F2937",
        cream: "#FDF2E7",
        creamDark: "#FBE5CF",
        lightGreen: "#E4F9F5",
        aquamarine: "#30E3CA",
        midnightGreenEagleGreen: "#13505B",
        deepBlue: "#11999E",
        darkMossgreen: "#40514E",

        ashGrey: "#D0D1D0",
        webGrey: "#B2ADA7",
        whiteBackground: "#F2F2F3",
        lightSeaGreen: "#A1C59F",
        boneGrey: "#E6E7E8",
        darkGrey: "#667B86",
      },
    },
  },
  plugins: [require("daisyui")],
};
