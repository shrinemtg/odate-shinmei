import Head from 'next/head'
import GaisaiPageContent from '../components/gaisaiComponents/GaisaiPageContent'

const GaisaiPage = () => {
  return (
    <>
      <Head>
        <title>出張祭事 | 大館神明社</title>
        <meta
          name='description'
          content='大館神明社の出張祭事のご案内。地域の祭事や特別な儀式への出張祈祷を承っております。お気軽にお問い合わせください。'
        />
        <meta name='keywords' content='出張祭事,大館神明社,出張祈祷,祭事,儀式,地域行事' />
      </Head>
      <GaisaiPageContent />
    </>
  )
}

export default GaisaiPage
