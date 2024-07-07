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
      gray: "#F2EEE6",
    },
    screens: {
      lg: { max: "1024px" },
      tab: { max: "991px" },
      mob: { max: "768px" },
    },
  },
};
