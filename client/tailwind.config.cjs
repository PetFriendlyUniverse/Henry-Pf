/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xsm: "380px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
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
        yellowPalette: "#edf16D",
        colorFilter: "#645E9D",
        russianviolet: "#392B58",
        cornflowerblue: "#6495ed",
        steelblue: "#5380a4",
        ultraviolet: "#645e9d",
        ultravioletLight: "#645e9d82",
        pastelgreen: "#4dbb47",
      },
      dropShadow: {
        custom: "36px 36px 37px rgb(0,0,0)",
        button: "6px 6px 0px rgba(0,0,0)",
        button2: "10px 10px 0 #FBC638",
        input: "inset 19px 19px 38px #9b9b9b, inset -19px -19px 38px #ffffff",
      },
      backgroundImage: {
        whitepattern: "url('./assets/imagenes/backgroundwhite.png')",
        balloon: "url('./assets/imagenes/ASD-01.png')",
        perros: "url('./assets/imagenes/PERR1.png')",
        gatos: "url('./assets/imagenes/CAT.png')",
        contacto: "url('./assets/imagenes/CONTACTO1.png')",
        pcomida: "url('./assets/imagenes/food-01.png')",
        phouse: "url('./assets/imagenes/doghouse-01.png')",
        ptoys: "url('./assets/imagenes/toys-01.png')",
        adopcion: "url('./assets/imagenes/symphony.png')",
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
    plugins: [require("flowbite/plugin")],
  },
};
