import "../styles/globals.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    default: "default",
    list: [
      { name: "default", class: "theme-default", color: "#ffffff" },
      { name: "dracula", class: "theme-dracula", color: "#000000" },
    ],
  },
};
