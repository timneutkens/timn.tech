module.exports = {
  rewrites: () => [
    {
      source: "/",
      destination: "/api/language-detect",
    },
  ],
  experimental: { unstable_webpack5cache: true },
};
