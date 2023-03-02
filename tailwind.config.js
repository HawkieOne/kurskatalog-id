/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: "#F55065", 
        onyx: "#1F2937",
        midnightGreenEagleGreen: "#60785f",

        ashGrey: "#D0D1D0",
        webGrey: "#B2ADA7",
        whiteBackground: "#F2F2F3",
        lightSeaGreen: "#A1C59F",
        darkSeaGreen: "#60785f",
        boneGrey: "#E6E7E8",
        darkGrey: "#667B86",

        customCourse: "#078863",
        pauseCourse: "#832161",
        exchangeCourse: "#2991cb",
        workCourse: "#388697",

        lightModeLight: "#F8FAFC",
        darkMode: "#374151",
        darkModeLight: "#4B5563",
      },
    },
  },
  plugins: [require("daisyui")],
};
