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

      // Custom iPad Pro-only breakpoint
      lt: { raw: "(width: 1024px) and (height: 1366px)" }, // Portrait
      "lt-landscape": { raw: "(width: 1366px) and (height: 1024px)" },
    },
  },
  plugins: [],
};
