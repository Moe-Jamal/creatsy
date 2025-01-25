/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    // container: {
    //   center: true,
    //   padding: {
    //     DEFAULT: "1rem",
    //     sm: "1rem",
    //     lg: "4rem",
    //     xl: "5rem",
    //     "2xl": "0",
    //     // "3xl": "10rem",
    //   },
    //   screens: {
    //     sm: "100%",
    //     md: "100%",
    //     lg: "100%",
    //     xl: "1240px",
    //     "2xl": "1496px",
    //     // mobile: "480px",
    //     // tablet: "778px",
    //     // notebook: "1024px",
    //   },
    // },
    extend: {
      colors: {
        "main-color": "#191919",
        "secondry-color": "#A3D14A",
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
