// next-i18next.config.js
module.exports = {
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "en",
    localeDetection: true,
  },
  reloadOnPrerender: process.env.NODE_ENV === "development",
};
