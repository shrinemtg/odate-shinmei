import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  trailingSlash: false, // リダイレクト問題を解決するためfalseに変更
  compiler: {
    emotion: true,
  },
  // Vercelデプロイのため、output: 'export'を削除
  // output:'export' を外したので画像最適化が使える。unoptimized を false にして
  // デバイス別のレスポンシブ画像(srcset/webp)を配信し、モバイルの画像転送量・デコードを削減する
  // （見た目は不変：デスクトップは高解像度のまま、モバイルだけ最適サイズを配信）。
  images: {
    unoptimized: false,
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
