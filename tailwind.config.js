/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  important: true,
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "2rem",
        lg: "2rem",
        xl: "60px",
        "2xl": "60px",
      },
    },
    extend: {
      colors: {
        "main-color": "#191919",
        "secondry-color": "#A3D14A",
        "hr-color": "#dedede",
      },
      screens: {
        "lg-xl": "1150px",
      },
      padding: {
        "sec-p": "60px",
      },
    },
  },
  plugins: [],
};
