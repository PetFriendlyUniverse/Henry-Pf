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

      dropShadow: {
        custom: "36px 36px 37px rgb(0,0,0)",
        button: "6px 6px 0px rgba(0,0,0)",
        button2: "10px 10px 0 #FBC638",
      },

      keyframes: {
        coloranim: {
          "0%": { fill: "#ffffff" },

          "50%": {
            fill: "#FBC638",
          },

          "100%": {
            fill: "#ffffff",
          },
        },
      },

      animation: {
        coloranim: "color_anim 1s infinite 0.6s",
        coloranim2: "color_anim 1s infinite 0.4s",
        coloranim3: "color_anim 1s infinite 0.2s",
      },
    },

    plugins: [],
  },
};
