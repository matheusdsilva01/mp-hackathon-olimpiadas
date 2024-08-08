/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/src",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "codante.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "img.olympics.com",
      },
    ],
  },
}

module.exports = nextConfig
