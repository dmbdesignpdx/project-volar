import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  reactCompiler: true,
  turbopack: {
    root: __dirname,
  },
  devIndicators: false,
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
    cssChunking: true,
  },
  compiler: {
    reactRemoveProperties: true,
  },
};


export default nextConfig;
