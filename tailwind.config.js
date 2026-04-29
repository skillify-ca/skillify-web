const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        108: "27rem",
      },
      height: {
        108: "27rem",
        160: "40rem",
      },
      animation: {
        shake: "shake 0.5s ease-in-out",
        hit: "hit 1s ease-in-out",
        fadeIn: "fadeIn 2s ease-in-out",
        fadeIn_half: "fadeInHalf 1s ease-in-out",
        iconPulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      colors: {
        textPrimary: "var(--color-text-primary)",
        brandPrimary: "var(--color-brand-primary)",
        backgroundPrimary: "var(--color-background-primary)",
        backgroundSecondary: "var(--color-background-secondary)",
        backgroundHover: "var(--color-background-hover)",
        inputTextPrimary: "var(--color-input-text-primary)",
        charmander: "#F18701",
        rattata: "#7678ED",
        pikachu: "#F7B801",
        murkrow: "#18124D",
        bulbasaur: {
          200: "#F0FFE9",
          500: "#5BB84C",
        },
        moltres: {
          200: "#FFE8E8",
          500: "#D00000",
        },
        black: {
          transparent: "#000000e1",
          500: "#000000",
        },
        mewtwo: "#E2E3FB",
      },

      backgroundImage: (theme) => ({
        "email-capture": "url('/images/landingPage/Rectangle5.png')",
        "hero-student":
          "url('https://images.unsplash.com/photo-1596495578065-6e0763fa1178?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDEzNDF8MHwxfHNlYXJjaHwxMDZ8fG1hdGh8ZW58MHx8fA&ixlib=rb-1.2.1&q=85&w=528&dpr=2')",
        "finance-life":
          "url('https://images.unsplash.com/photo-1494995971821-13e351803d47?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGxpZmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')",
        home: "url('https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80')",
        car: "url('https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80')",
        essentials:
          "url('https://images.unsplash.com/photo-1520061012101-6277a74655bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
        phone:
          "url('https://images.unsplash.com/photo-1425315283416-2acc50323ee6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80')",
        signInBackground: "url('/images/onboarding/sign-in-background.svg')",
      }),
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        "resource-row": "100px 1fr 236px",
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%, 75%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },

        hit: {
          "0%, 100%": { transform: "scale(1) translate(0px, 0px)" },
          "25%, 75%": { transform: "scale(1.25) translate(-30px, 0px)" },
          "50%": { transform: "scale(1.5) translate(-75px, 0px)" },
        },
        fadeIn: {
          "0%": { opacity: "0.1" },
          "25%": { opacity: "0.25" },
          "50%": { opacity: "0.5" },
          "75%": { opacity: "0.75" },
          "100%": { opacity: "1" },
        },
        fadeInHalf: {
          "0%": { opacity: "0.1", transform: "scale(1)" },
          "25%": {
            opacity: "0.25",
            transform: "scale(1.25)",
          },
          "50%": {
            opacity: "0.5",
            transform: "scale(1.5)",
          },
          "75%": {
            opacity: "0.75",
            transform: "scale(1.25)",
          },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideDownAndFade: {
          from: { opacity: 0, transform: "translateY(-2px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        slideLeftAndFade: {
          from: { opacity: 0, transform: "translateX(2px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        slideUpAndFade: {
          from: { opacity: 0, transform: "translateY(2px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        slideRightAndFade: {
          from: { opacity: 0, transform: "translateX(2px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: { opacity: 0, transform: "translate(-50%, -48%) scale(0.96)" },
          to: { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
        },
        iconPulse: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.5)" },
          "100%": { transform: "scale(1)" },
        },
      },
      outline: {
        black: "2px solid #000000",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
    },
    animation: {
      slideDownAndFade: "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      slideLeftAndFade: "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      slideRightAndFade:
        "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      overlayShow: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
    },
  },

  options: {
    keyframes: true,
    fontFace: true,
  },
  plugins: [],
};
