// next.config.mjs
/**
 * @type {import('next').NextConfig}
 */
const { i18n } = require("./next-i18next.config");

const nextConfig = { i18n, trailingSlash: true };

export default nextConfig;
