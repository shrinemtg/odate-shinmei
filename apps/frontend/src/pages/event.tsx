import Head from 'next/head'
import EventPageContent from '../components/eventComponents/EventPageContent'

const EventPage = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: '大館神明社 年中行事',
    description:
      '大館神明社の年中行事のご案内。元旦祭、新年祈祷、厄払い、入学祈願、夏越しの大祓い、古例祭、例祭、七五三、年越しの大祓いなど。',
    organizer: {
      '@type': 'Organization',
      name: '大館神明社',
      url: 'https://odate-shinmei.jp',
    },
    location: {
      '@type': 'Place',
      name: '大館神明社',
      address: {
        '@type': 'PostalAddress',
        addressLocality: '大館市',
        addressRegion: '秋田県',
        addressCountry: 'JP',
      },
    },
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: '年中行事カレンダー',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Event',
            name: '元旦祭',
            description: '新年最初の祭事',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Event',
            name: '新年祈祷',
            description: '新年の祈願',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Event',
            name: '厄払い',
            description: '厄年の方の厄払い',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Event',
            name: '七五三',
            description: '子どもの成長を祝う祭事',
          },
        },
      ],
    },
  }

  return (
    <>
      <Head>
        <title>年中行事 | 大館神明社</title>
        <meta
          name='description'
          content='大館神明社の年中行事のご案内。元旦祭、新年祈祷、厄払い、入学祈願、夏越しの大祓い、古例祭、例祭、七五三、年越しの大祓いなど。'
        />
        <meta
          name='keywords'
          content='年中行事,大館神明社,元旦祭,新年祈祷,厄払い,入学祈願,夏越しの大祓い,古例祭,例祭,七五三,年越しの大祓い'
        />
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>
      <EventPageContent />
    </>
  )
}

export default EventPage
