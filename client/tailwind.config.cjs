/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4B3B40",
        secondary: "#82735C",
        crem: "#CACFD6",
        lightwhite: "#D6E5E3",
        customProfile: "#f8f7ff",
        greenHover: "#2d6a4f",
        redHover: "#6a040f",
        blueHover: "#03045e",
        grey: "#e9ecef",
        greyHover: "#ced4da",
      },
    },
  },
  plugins: [],
};
