/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    async redirects() {
      return [
        {
          source: '/intro.tsx',
          destination: '/',
          permanent: true,
        },
      ]
    },
  }