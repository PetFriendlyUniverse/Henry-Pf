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
        yellow: "#E1BC29",
        customProfile: "#f8f7ff",
        green: "#40916c",
        greenHover: "#2d6a4f",
        red: "#dc2f02",
        redHover: "#6a040f",
        blue: "#023e8a",
        blueHover: "#03045e",
        grey: "#e9ecef",
        greyHover: "#ced4da",
        white: "#ffff",
      },
    },

  },
  plugins: [],
};
