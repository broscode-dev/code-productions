/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./*.html"],
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
          100: "#121212",
        },
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        md: "0px 2px 10px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
