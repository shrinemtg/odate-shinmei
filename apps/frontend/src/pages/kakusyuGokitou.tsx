import Head from 'next/head'
import KakusyuGokitouPageContent from '../components/kakusyuGokitouComponents/KakusyuGokitouPageContent'

const KakusyuGokitouPage = () => {
  return (
    <>
      <Head>
        <title>各種御祈祷 | 大館神明社</title>
        <meta
          name='description'
          content='大館神明社の各種御祈祷のご案内。家内安全、商売繁盛、学業成就、交通安全、安産祈願など、様々な御祈祷を承っております。'
        />
        <meta name='keywords' content='各種御祈祷,大館神明社,家内安全,商売繁盛,学業成就,交通安全,安産祈願,祈祷' />
      </Head>
      <KakusyuGokitouPageContent />
    </>
  )
}

export default KakusyuGokitouPage
