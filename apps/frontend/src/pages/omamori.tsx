import Head from 'next/head'
import OmamoriPageContent from '../components/omamoriComponents/OmamoriPageContent'

const OmamoriPage = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'お守り・授与品',
    description: '大館神明社のお守りと授与品。合格守り、交通安全守り、厄除開運守り、御朱印、絵馬など。',
    brand: {
      '@type': 'Brand',
      name: '大館神明社',
    },
    manufacturer: {
      '@type': 'Organization',
      name: '大館神明社',
      url: 'https://odate-shinmei.jp',
    },
    category: '神社授与品',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'JPY',
      seller: {
        '@type': 'Organization',
        name: '大館神明社',
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: '授与品カタログ',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: '合格守り',
            description: '学業成就と受験合格を祈願した御守',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: '交通安全守り',
            description: '道中の無事と安全を祈願した御守',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: '厄除開運守り',
            description: '厄除けと開運を祈願した御守',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: '御朱印',
            description: '神社参拝の記念となる御朱印',
          },
        },
      ],
    },
  }

  return (
    <>
      <Head>
        <title>お守り・授与品 | 大館神明社</title>
        <meta
          name='description'
          content='大館神明社のお守りと授与品のご案内。合格守り、交通安全守り、厄除開運守り、御朱印、絵馬など。心を込めてお授けいたします。'
        />
        <meta name='keywords' content='お守り,授与品,大館神明社,合格守り,交通安全守り,厄除開運守り,御朱印,絵馬,神礼' />
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>
      <OmamoriPageContent />
    </>
  )
}

export default OmamoriPage
