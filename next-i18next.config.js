// next-i18next.config.js
module.exports = {
  i18n: {
    defaultLocale: "en", // The default language of your application
    locales: ["en", "ar"], // Add the languages you want to support
  },
  react: {
    useSuspense: false, // Disable suspense for i18next if needed
  },
};
