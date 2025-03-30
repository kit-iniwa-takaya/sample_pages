import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: '/sample_pages',
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
