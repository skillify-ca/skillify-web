const { backgroundColor } = require("tailwindcss/defaultTheme");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        shake: "shake 1s relative infinite ease-in",
      },
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
      opacity: ["disabled"],
      backgroundColor: ["hover"],
      ringWidth: ["hover", "active"],
      ringColor: ["hover", "active"],
      ringOffsetWidth: ["hover", "active"],
      ringOffsetColor: ["hover", "active"],
      maxWidth: ["hover", "active"],
      width: ["hover", "active"],
    },
  },
  options: {
    /**
     * PurgeCSS:
     * bg-blue-300
     * bg-yellow-300
     * bg-green-300
     * bg-pink-300
     * bg-purple-600
     * bg-pink-600
     * bg-blue-600
     * bg-purple-400
     * bg-pink-400
     * bg-blue-400
     * hover:bg-purple-400
     * hover:bg-pink-400
     * hover:bg-blue-400
     * bg-green-200
     * bg-blue-200
     * bg-purple-200
     * bg-green-500
     * bg-blue-500
     * bg-purple-500
     * ring-green-500
     * ring-blue-500
     * ring-purple-500
     */

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
    keyframes: {
      shake: {
        "0%": { transform: "translate-x-5" },
        "100%": { translate: "-translate-x-5" },
      },
    },
    fontFace: true,
  },
  plugins: [require("tailwindcss-hero-patterns")],
};
