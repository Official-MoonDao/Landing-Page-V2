/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.5s linear",
        fadeInLeft: "fadeInLeft 1.5s ease-in-out",
      },
      colors: {
        "moon-blue": "#0B3B8E",
        "moon-orange": "#D7594F",
        "moon-gold": "#F9B95C",
        "moon-deepblue": "#132456",
        "moon-pink": "#ff03f8",
        "moon-salmon": "#e76e6b",
        "moon-lightblue": "#69e9f1",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        GoodTimes: ["Good Times", "sans-serif"],
      },

      keyframes: {
        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        fadeInLeft: {
          "0%": {
            opacity: 0,
            transform: "translateX(-3rem)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0rem)",
          },
        },
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        treasury: "1396px",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
