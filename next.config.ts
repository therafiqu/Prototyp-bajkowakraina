import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Apache/shared hosting serves directory indexes reliably
  trailingSlash: true,
  // Default next/image optimizer requires a Node server
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
