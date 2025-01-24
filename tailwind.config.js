/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "main-color": "#191919",
        "secondry-color": "#A3D14A",
      },
      screens: {
        "lg-xl": "1150px",
      },
    },
  },
  plugins: [],
};
