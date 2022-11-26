/** @type {import('next').NextConfig} */
const path = require("path"); // 1. path 선언
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

module.exports = (phase) => {
  // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  // when `next build` or `npm run build` is used
  const isProd =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== "1";
  // when `next build` or `npm run build` is used
  const isStaging =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === "1";

  console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`);

  const env = {
    RESTURL_SPEAKERS: (() => {
      if (isDev) return "http://localhost:4000/speakers";
      if (isProd) {
        return "https://www.siliconvalley-codecamp.com/rest/speakers/ps";
      }
      if (isStaging) return "http://localhost:11639";
      return "RESTURL_SPEAKERS:not (isDev,isProd && !isStaging,isProd && isStaging)";
    })(),
    RESTURL_SESSIONS: (() => {
      if (isDev) return "http://localhost:4000/sessions";
      if (isProd) return "https://www.siliconvalley-codecamp.com/rest/sessions";
      if (isStaging) return "http://localhost:11639";
      return "RESTURL_SESSIONS:not (isDev,isProd && !isStaging,isProd && isStaging)";
    })(),
  };

  // next.config.js object
  return {
    env,
  };
};
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   sassOptions: {
//     includePaths: [path.join(__dirname, "styles")],
//     prependData:
//       "@import 'public/styles/colors.scss'; @import 'public/styles/mixin.scss';",
//   },
// };

// module.exports = nextConfig;
