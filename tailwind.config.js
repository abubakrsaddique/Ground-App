/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "white",
      black: "black",
      lightgreen: "rgb(143, 182, 159)",
      brown: "#302A25",
      lightbrown: "rgb(169 164 161)",
      darkbrown: "#302A25",
      red: "rgb(239 68 68)",
      gray: "#F2EEE6",
      "custom-hsla1": "hsla(40, 32%, 93%, 0)",
      "custom-hsla2": "hsla(40, 32%, 93%, 0.63)",
      "custom-f2eee6": "#f2eee6",
    },
    screens: {
      lg: { max: "1024px" },
      tab: { max: "991px" },
      mob: { max: "768px" },
    },
  },
};
