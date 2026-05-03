import type { NextConfig } from "next";
import { redirects } from "./src/config/redirects";

const nextConfig: NextConfig = {
  async redirects() {
    return redirects.map((r) => ({
      source: r.source,
      destination: r.destination,
      permanent: r.permanent,
    }));
  },
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
