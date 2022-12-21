/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "rgba(255, 255, 255, 0.8)",
        secondary: "rgba(255, 255, 255, 0.3)",
        hover: "rgba(255, 255, 255, 0.08)",
      },
      flexGrow: {
        2: 2,
        3: 3,
      },
    },
  },
  plugins: [],
};
