import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  trailingSlash: true,
  compiler: {
    emotion: true,
  },
  // Vercelデプロイのため、output: 'export'を削除
  images: {
    unoptimized: true,
  },
}

export default nextConfig
