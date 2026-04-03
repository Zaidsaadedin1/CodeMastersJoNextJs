// next-i18next.config.js

const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "default",
    locales: ["default", "en", "ar"],
    localeDetection: false,
  },
  defaultNS: "common",
  localePath: path.resolve("./public/locales"),
  react: { useSuspense: false },
};
