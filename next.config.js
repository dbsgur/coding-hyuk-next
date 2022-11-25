/** @type {import('next').NextConfig} */
const path = require("path"); // 1. path 선언

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData:
      "@import 'public/styles/colors.scss'; @import 'public/styles/mixin.scss';",
  },
};

module.exports = nextConfig;
