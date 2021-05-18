const { backgroundColor } = require("tailwindcss/defaultTheme");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lexend", ...defaultTheme.fontFamily.sans],
      },
      primary: "#4495f0",
      secondary: "#ff8e4f",
    },
  },
  variants: {
    extend: {
      borderWidth: ["active"],
      fontFamily: ["hover", "focus"],
    },
  },
  options: {
    safelist: [
      "text-red-500",
      "text-purple-600",
      "text-green-600",
      "text-green-700",
      "text-yellow-500",
      "text-yellow-400",
      "text-yellow-200",
      "text-yellow-800",
      "text-green-300",
      "text-green-400",
      "text-gray-400",
      "px-4",
    ],
    blocklist: [/^debug-/],
    keyframes: true,
    fontFace: true,
  },
  plugins: [require("tailwindcss-hero-patterns")],
};
