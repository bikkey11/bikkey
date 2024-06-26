const { transform, px } = require("framer-motion");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary1: "#080808",
        navbarCol: "#1b1b1b",
        navText: "#9c9c9c",
        homebutton: "#3f8e00",
        workwith: "#656565",
        workwithborder: "#383838",
        tertiary: "#011021",
        reviewCard: "#16111c",
        card: "#09090f"
      },
      screens: {
        xs: "450px"
      },
      fontFamily: {
        poppins: ["poppins", "san-serif"],
        Chakra_Petch: ["Chakra Petch", "poppins"],
      },
      animation: {
      },
      keyframes: {
        navlist: {
          from: {
            opacity: "0",
            transform: "translateY(-20px)"
          },
          to: {
            opacity: "1",
            transform: "translateY(0)"
          }

        },
        navImg: {
          from: {
            opacity: "0",
            transform: "translateY(-20px)"
          },
          to: {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        aboutText: {
          from: {
            opacity: "0",
            transform: "translateX(-20px)"
          },
          to: {
            opacity: "1",
            transform: "translateX(0)"
          }
        },
        aboutCard: {
          "0%": { opacity: "0" },
          "25%": { opacity: "0.01" },
          "50%": { opacity: "0.25" },
          "75%": { opacity: "0.5" },
          "100%": { opacity: "1" }
        },
        hoverCard:{
          "0%":{transform:"rotate(0deg)",opacity:"0.5"},
          "100%":{transform:"rotate(10deg)",opacity:"1"}

        },
        reviewCard:{
          from: {
            opacity: "0",
            transform: "translateX(-20px)"
          },
          to: {
            opacity: "1",
            transform: "translateX(0)"
          }

        }




      }

    },
  },
  plugins: [],
};