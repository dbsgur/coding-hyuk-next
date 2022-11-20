/** @type {import('next').NextConfig} */
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
