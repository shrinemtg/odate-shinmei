import Head from 'next/head'
import MidokoroPageContent from '../components/midokoroComponents/MidokoroPageContent'

const MidokoroPage = () => {
  return (
    <>
      <Head>
        <title>見どころ - 大館神明社</title>
        <meta
          name='description'
          content='大館神明社の見どころをご紹介します。大絵馬、四季折々の観葉植物、伝統的な社殿建築など、歴史と文化が息づく魅力をご覧ください。'
        />
        <meta name='keywords' content='大館神明社, 見どころ, 大絵馬, 観葉植物, 社殿建築, 秋田県, 大館市' />
        <meta property='og:title' content='見どころ - 大館神明社' />
        <meta
          property='og:description'
          content='大館神明社の見どころをご紹介します。歴史と文化が息づく魅力をご覧ください。'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://odate-shinmei.com/midokoro' />
        <meta property='og:image' content='https://odate-shinmei.com/og-image.jpg' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='見どころ - 大館神明社' />
        <meta
          name='twitter:description'
          content='大館神明社の見どころをご紹介します。歴史と文化が息づく魅力をご覧ください。'
        />
        <meta name='twitter:image' content='https://odate-shinmei.com/og-image.jpg' />
        <link rel='canonical' href='https://odate-shinmei.com/midokoro' />
      </Head>
      <main>
        <MidokoroPageContent />
      </main>
    </>
  )
}

export default MidokoroPage
