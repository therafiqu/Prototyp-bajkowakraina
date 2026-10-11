import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/rekrutacja",
        destination: "/kontakt",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
