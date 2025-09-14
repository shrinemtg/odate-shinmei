import type { NextApiRequest, NextApiResponse } from 'next'

interface SitemapUrl {
  loc: string
  lastmod: string
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://odate-shinmei.jp'

  // サイトの全ページを定義
  const pages: SitemapUrl[] = [
    {
      loc: `${baseUrl}/`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'daily',
      priority: 1.0,
    },
    {
      loc: `${baseUrl}/gokitouGosanpai`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: 0.9,
    },
    {
      loc: `${baseUrl}/kakusyuGokitou`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: 0.9,
    },
    {
      loc: `${baseUrl}/omamori`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/yakubaraiToshiiwai`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/lifeRtuals`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/midokoro`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: 0.7,
    },
    {
      loc: `${baseUrl}/history`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: 0.7,
    },
    {
      loc: `${baseUrl}/gaisai`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: 0.7,
    },
    {
      loc: `${baseUrl}/event`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: 0.6,
    },
    {
      loc: `${baseUrl}/notices`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: 0.6,
    },
    {
      loc: `${baseUrl}/contact`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: 0.5,
    },
    {
      loc: `${baseUrl}/privacy-policy`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'yearly',
      priority: 0.3,
    },
  ]

  // XML sitemapを生成
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>`

  res.setHeader('Content-Type', 'text/xml')
  res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=86400') // 24時間キャッシュ
  res.status(200).send(sitemap)
}
