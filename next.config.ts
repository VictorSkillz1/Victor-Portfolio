import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "raw.githubusercontent.com" },\n      { protocol: "https", hostname: "i.ibb.co" }
    ]
  }
};

export default nextConfig;