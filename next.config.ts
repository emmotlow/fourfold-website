import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/service-delivery",
        destination: "/how-we-work",
        permanent: true,
      },
      {
        source: "/outcome-driven-management",
        destination: "/blog/outcome-driven-management",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
