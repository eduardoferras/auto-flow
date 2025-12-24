import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    prependData: `@use "@styles/main.scss" as *;`,
  },
};

export default nextConfig;
