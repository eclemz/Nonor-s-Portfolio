module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",

      lt: {
        raw: "(min-width: 1024px) and (max-width: 1024px) and (min-height: 1366px) and (max-height: 1366px)",
      },
      "ipad-landscape": {
        raw: "(min-width: 1366px) and (max-width: 1366px) and (min-height: 1024px) and (max-height: 1024px)",
      },
    },
  },
  plugins: [],
};
