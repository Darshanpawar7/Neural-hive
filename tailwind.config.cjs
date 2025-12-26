const typography = require("@tailwindcss/typography");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,ts,md}"],
  theme: {
    extend: {
      colors: {
        nhpurple: "#7C4DFF",
        nhneon: "#A277FF",
        nhbg: "#0A0A0F",
        nhpanel: "#141420",
        nhtext: "#EDEDF7",
        accent: "#7C4DFF"
      },
      boxShadow: {
        glow: "0 6px 30px rgba(124,77,255,0.15)"
      },
      fontFamily: {
        heading: ['"Space Grotesk"', "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: [typography]
};
