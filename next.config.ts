import type { NextConfig } from "next";
import { basePath } from "./site.config";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
};

export default nextConfig;
