module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif", "system-ui"],
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",

      // Custom iPad Pro-only breakpoint
      lt: { raw: "(width: 1024px) and (height: 1366px)" }, // Portrait
      "lt-landscape": { raw: "(width: 1366px) and (height: 1024px)" },

      // More specific iPad breakpoints that won't conflict
      // lt: {
      //   raw: "(min-width: 1024px) and (max-width: 1024px) and (min-height: 1366px) and (max-height: 1366px)",
      // },
      // "ipad-landscape": {
      //   raw: "(min-width: 1366px) and (max-width: 1366px) and (min-height: 1024px) and (max-height: 1024px)",
      // },
    },
  },
  plugins: [],
};
