/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      flexGrow: {
        2: 2,
        3: 3,
      },
    },
  },
  plugins: [],
};
