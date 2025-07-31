/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  // disable: process.env.NODE_ENV === 'development', // optional
  runtimeCaching: [
    {
      urlPattern: /^\/api\/data/,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'api-data-cache',
        expiration: {
          maxEntries: 10,
          maxAgeSeconds: 60 * 60,
        },
        networkTimeoutSeconds: 3,
      },
    },
  ],
});

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
};

module.exports = withPWA(nextConfig);
