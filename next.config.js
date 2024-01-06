const { withKumaUI } = require("@kuma-ui/next-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    storyblokPreviewToken: process.env.STORYBLOK_PREVIEW_TOKEN,
    storyblokApiToken: process.env.STORYBLOK_API_TOKEN,
    storyblokSpaceId: process.env.STORYBLOK_SPACE_ID,
    storyblokDomain: process.env.STORYBLOK_DOMAIN,
  },
  trailingSlash: true,
};

module.exports = withKumaUI(nextConfig);
