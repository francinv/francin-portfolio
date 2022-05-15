/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['repository-images.githubusercontent.com', 'avatars.githubusercontent.com'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
