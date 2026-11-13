// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  experimental: {
    agentUpgrade: "experimental-future",
    goRoutes: true
  }
};

export default nextConfig;
