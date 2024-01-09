/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: [
        { source: `/:path*`, destination: `http://localhost:3010/:path*` }
      ],
    }
  },
}

module.exports = nextConfig
