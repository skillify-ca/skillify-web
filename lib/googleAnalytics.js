export const load = () => {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    // eslint-disable-next-line no-undef
    dataLayer.push(arguments);
  }
  gtag("js", new Date());

  gtag("config", "UA-235433930-1");
};
