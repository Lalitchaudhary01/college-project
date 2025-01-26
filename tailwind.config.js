module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nhg: ["NHaasGroteskDSPro-65Md", "sans-serif"],
      },
      backgroundImage: {
        "crypto-pattern": "url('https://wallpaperaccess.com/full/2095724.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
