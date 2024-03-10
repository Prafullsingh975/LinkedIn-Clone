/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens:{
      screen320:"320px",
      screen375:"375px",
      screen425:"425px",
      sm:"640px",
      laptop:"1024px",
      mdLaptop:"1440px"
    }
  },
  plugins: [],
};
