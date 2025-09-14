import Head from 'next/head'
import YakurabaiToshiiwaiPageContent from '../components/yakubaraiToshiiwaiComponents/YakurabaiToshiiwaiPageContent'

const YakurabaiToshiiwaiPage = () => {
  return (
    <>
      <Head>
        <title>厄払い・年祝い | 大館神明社</title>
        <meta
          name='description'
          content='大館神明社の厄払いと年祝いのご案内。厄年のお祓い、七五三、還暦、古希、喜寿などの年祝いの祈祷を承っております。'
        />
        <meta name='keywords' content='厄払い,年祝い,大館神明社,厄年,七五三,還暦,古希,喜寿,祈祷' />
      </Head>
      <YakurabaiToshiiwaiPageContent />
    </>
  )
}

export default YakurabaiToshiiwaiPage
