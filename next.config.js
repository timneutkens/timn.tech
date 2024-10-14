// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      unstablePersistentCaching: 1,
    },
  },
};

export default nextConfig;
