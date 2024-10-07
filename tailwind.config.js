/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fff7ed",
          100: "#ffecd4",
          200: "#ffd5a8",
          300: "#ffb771",
          400: "#ff8d38",
          500: "#fe721a",
          600: "#ef5007",
          700: "#c63a08",
          800: "#9d300f",
          900: "#7e2910",
          950: "#441206",
        },

        secondary: {
          50: "#06050B",
        },
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
