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
      },
    },
  },
  plugins: [require("daisyui")],
};
