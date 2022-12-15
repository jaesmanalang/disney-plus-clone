/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "rgba(109, 109, 110, 0.7)",
      },
      flexGrow: {
        2: 2,
        3: 3,
      },
    },
  },
  plugins: [],
};
