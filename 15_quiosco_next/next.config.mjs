/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
          {
              protocol: "https",
              hostname: "res.cloudinary.com"
          }
      ]
  },
  experimental: {
    optimizePackageImports: ['tailwindcss']
  }
};

export default nextConfig
