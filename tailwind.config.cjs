/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        aquire: ['Aquire', 'sans-serif'],
        aquirelight: ['AquireLight', 'sans-serif'],
        aquirebold: ['AquireBold', 'sans-serif'],
        altedin: ['Altedin', 'sans-serif'],
        altedinbold: ['AltedinBold', 'sans-serif']
      },
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        customBlue: "#004D80",
        customGreen: "#5E5E5E ",
        customOrange: "#FFA500",
        customdarkBlue: "#002E5A",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.jpg')",
      },
    },
  },
  plugins: [],
};