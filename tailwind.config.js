const { backgroundColor } = require("tailwindcss/defaultTheme");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-student":
          "url('https://images.unsplash.com/photo-1596495578065-6e0763fa1178?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDEzNDF8MHwxfHNlYXJjaHwxMDZ8fG1hdGh8ZW58MHx8fA&ixlib=rb-1.2.1&q=85&w=528&dpr=2')",
      }),
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
      "text-blue-200",
      "text-blue-300",
      "text-blue-400",
      "text-blue-500",
      "text-red-100",
      "text-red-500",
      "text-purple-600",
      "text-green-100",
      "text-green-600",
      "text-green-700",
      "text-yellow-500",
      "text-yellow-100",
      "text-yellow-200",
      "text-yellow-400",
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
