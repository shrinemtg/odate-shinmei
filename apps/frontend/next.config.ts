import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  trailingSlash: false, // リダイレクト問題を解決するためfalseに変更
  compiler: {
    emotion: true,
  },
  // Vercelデプロイのため、output: 'export'を削除
  images: {
    unoptimized: true,
  },
  // SEOとインデックス最適化のための追加設定
  experimental: {
    optimizeCss: true,
  },
  // リダイレクトを明示的に制御
  async redirects() {
    return []
  },
}

export default nextConfig
