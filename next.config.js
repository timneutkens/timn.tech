// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      unstablePersistentCaching: 1,
    },
  },
};
// test
export default nextConfig;
