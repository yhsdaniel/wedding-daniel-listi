import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com', // need 2 url links for different image sources
      },
      {
        protocol: 'https',
        hostname: 'envelope.id', // need 2 url links for different image sources
      },
      {
        protocol: 'https',
        hostname: 's3.envelope.id', // need 2 url links for different image sources
      },
      {
        protocol: 'https',
        hostname: 'wp.envelope.id', // need 2 url links for different image sources
      },
    ],
  },
};

export default nextConfig;
