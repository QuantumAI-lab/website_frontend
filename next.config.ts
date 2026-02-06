import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    /*remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],*/
    unoptimized: true,//for GitHub Pages
  },
};

export default nextConfig;
