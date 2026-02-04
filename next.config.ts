/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // required for GitHub Pages
  },
  basePath: process.env.NODE_ENV === "production" ? "//website_frontend/" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/website_frontend/" : "",
};

export default nextConfig;
