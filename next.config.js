/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "codante.s3.amazonaws.com",
      },
    ],
  },
}

module.exports = nextConfig
