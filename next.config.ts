import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337', // El puerto donde vive Strapi
        pathname: '/uploads/**',
      },
    ],
  },
};
export default nextConfig;
