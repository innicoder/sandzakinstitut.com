import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static exports for Cloudflare Pages
  output: 'export',
  
  // Disable image optimization as it requires Node.js runtime
  images: {
    unoptimized: true
  },
  
  // Optional: Add trailing slashes for better compatibility
  trailingSlash: true,
};

export default nextConfig;
