module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        monserat: ["Montserrat Subrayada", "sans-serif"],
      },
      colors: {
        accent: "#6b5ecd",
        accentMiddle: "#7e6ff3",
        accentContrast: "#50469a",
        accentDark: "#1f1d2c",
        accentDarkMiddle: "#262837",
        accentDarkContrast: "#2e303f",
        primary: "#468EF9",
        secondary: "#0C66EE",
        blue: "#2F7CF0",
        black: "#222222",
        gray: "#666666",
        lightgray: "#DDDDDD",
        green: "#28C165",
        red: "#F4574D",
      },
    },
  },
  plugins: [],
};
