const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  output: "export",
  // Emit `<route>/index.html` so both `/route` and `/route/` resolve on GitHub Pages
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
