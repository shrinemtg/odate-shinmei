import Head from 'next/head'
import { Home } from '../components/pages/index'

const HomePage = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://odate-shinmei.jp/#organization',
        name: '大館神明社',
        alternateName: '大館神明社',
        url: 'https://odate-shinmei.jp',
        logo: {
          '@type': 'ImageObject',
          url: 'https://odate-shinmei.jp/top-motion/montuki-rogo.webp',
        },
        description:
          '秋田県大館市に鎮座する由緒ある神社。御祈祷、お守り、年中行事を通じて地域の文化と交流の中心として親しまれています。',
        address: {
          '@type': 'PostalAddress',
          addressLocality: '大館市',
          addressRegion: '秋田県',
          addressCountry: 'JP',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          url: 'https://odate-shinmei.jp/contact',
        },
      },
      {
        '@type': 'Place',
        '@id': 'https://odate-shinmei.jp/#place',
        name: '大館神明社',
        description: '秋田県大館市に鎮座する神社',
        address: {
          '@type': 'PostalAddress',
          addressLocality: '大館市',
          addressRegion: '秋田県',
          addressCountry: 'JP',
        },
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://odate-shinmei.jp/#localbusiness',
        name: '大館神明社',
        description: '御祈祷、お守り、年中行事を承る神社',
        url: 'https://odate-shinmei.jp',
        telephone: '',
        address: {
          '@type': 'PostalAddress',
          addressLocality: '大館市',
          addressRegion: '秋田県',
          addressCountry: 'JP',
        },
        openingHours: 'Mo-Su 09:00-17:00',
        priceRange: '$$',
        serviceArea: {
          '@type': 'GeoCircle',
          geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: 40.2719,
            longitude: 140.5644,
          },
          geoRadius: '50000',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: '神社サービス',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: '御祈祷',
                description: '各種御祈祷を承ります',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'お守り・授与品',
                description: 'お守りや御朱印などの授与品',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: '年中行事',
                description: '年間を通じた祭事や行事',
              },
            },
          ],
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://odate-shinmei.jp/#website',
        url: 'https://odate-shinmei.jp',
        name: '大館神明社',
        description: '大館神明社の公式サイト',
        publisher: {
          '@id': 'https://odate-shinmei.jp/#organization',
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://odate-shinmei.jp/search?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  }

  return (
    <>
      <Head>
        <title>大館神明社 | 秋田県大館市の神社 御祈祷・お守り・年中行事</title>
        <meta
          name='description'
          content='秋田県大館市にある大館神明社の公式サイト。御祈祷、お守り、年中行事のご案内。厄払い、年祝い、各種御祈祷を承っております。'
        />
        <meta name='keywords' content='大館神明社,秋田県,大館市,神社,御祈祷,お守り,年中行事,厄払い,年祝い' />
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>
      <Home />
    </>
  )
}

export default HomePage
