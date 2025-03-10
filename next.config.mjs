// next.config.mjs
// import pkg from "./next-i18next.config.js"; // Import the entire module
// const { i18n } = pkg; // Destructure `i18n` from the imported module

const nextConfig = {
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "en",
    localeDetection: false,
  },
  trailingSlash: true,
};

export default nextConfig;
