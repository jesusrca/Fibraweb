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
      {
        protocol: 'https',
        hostname: 'mindful-butterfly-86d5d20e3b.strapiapp.com', // <--- TU NUEVO DOMINIO DE STRAPI
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // (Opcional: Por si Strapi Cloud usa Cloudinary interno)
      },
    ],
  },
};
export default nextConfig;

