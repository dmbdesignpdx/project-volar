import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
    cssChunking: true,
  },
  compiler: {
    reactRemoveProperties: true,
  },
};


export default nextConfig;
