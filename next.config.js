// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      unstablePersistentCaching: true,
    },
  },
};
// test
export default nextConfig;
