import Head from 'next/head'
import GokitouGosanpaiPageContent from '../components/gokitouGosanpaiComponents/GokitouGosanpaiPageContent'

const GokitouGosanpaiPage = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: '御祈祷・御参拝',
    description: '大館神明社での御祈祷と御参拝のご案内。手水の作法、参拝手順、各種御祈祷のご予約について。',
    provider: {
      '@type': 'Organization',
      name: '大館神明社',
      url: 'https://odate-shinmei.jp',
    },
    serviceType: '神社参拝・御祈祷',
    areaServed: {
      '@type': 'Place',
      name: '秋田県大館市',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: '御祈祷サービス',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '各種御祈祷',
            description: '家内安全、商売繁盛、学業成就、交通安全、安産祈願など',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '参拝案内',
            description: '手水の作法、参拝手順のご案内',
          },
        },
      ],
    },
  }

  return (
    <>
      <Head>
        <title>御祈祷・御参拝 | 大館神明社</title>
        <meta
          name='description'
          content='大館神明社での御祈祷と御参拝のご案内。手水の作法、参拝手順、各種御祈祷のご予約について。正しい参拝方法をご案内いたします。'
        />
        <meta name='keywords' content='御祈祷,御参拝,大館神明社,手水,参拝手順,祈祷予約,参拝方法,神社参拝' />
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>
      <GokitouGosanpaiPageContent />
    </>
  )
}

export default GokitouGosanpaiPage
