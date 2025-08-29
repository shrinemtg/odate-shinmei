import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  trailingSlash: true,
  compiler: {
    emotion: true,
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
