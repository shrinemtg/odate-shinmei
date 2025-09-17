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
  async redirects() {
    return [
      {
        source: '/favicon.ico',
        destination: '/fabikon/favicon-32.ico',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
