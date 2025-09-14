import Head from 'next/head'
import LifeRtualsPageContent from '../components/liferRtualsComponents/LifeRtualsPageContent'

const LifeRtualsPage = () => {
  return (
    <>
      <Head>
        <title>人生儀礼 | 大館神明社</title>
        <meta
          name='description'
          content='大館神明社の人生儀礼のご案内。お宮参り、七五三、成人式、結婚式、還暦などの人生の節目の儀式を承っております。'
        />
        <meta name='keywords' content='人生儀礼,大館神明社,お宮参り,七五三,成人式,結婚式,還暦,儀式' />
      </Head>
      <LifeRtualsPageContent />
    </>
  )
}

export default LifeRtualsPage
