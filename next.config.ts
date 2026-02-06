import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "/website_frontend"; // derived from your git repo url

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // This tells Next.js the site lives at /website_frontend, not the root domain
  // We only apply this in production (GitHub Pages), not local dev
  basePath: isProd ? repoName : "",
  assetPrefix: isProd ? repoName : "",
};

export default nextConfig;