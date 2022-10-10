/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        primary: "#462020",
        second: "#8D2E36",
        info: "#717171",
        white: "#fff",
        graytwocolor: "#2F2F2F",
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in-out",
        "slide-up": "slideUp 1s ease-in-out",
        "zoom-out": "zoomOut 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0.3" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
        zoomOut: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

// extend: {

//   },
