import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  images: {
    // Video thumbnails come from WAJA's Cloudinary account; only that account is allowed
    remotePatterns: [new URL("https://res.cloudinary.com/nskvxiwi/**")],
  },
};

export default nextConfig;
