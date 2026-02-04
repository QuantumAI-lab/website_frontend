import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',      // Generates an 'out' folder instead of a server build
  images: {
    unoptimized: true,   // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
