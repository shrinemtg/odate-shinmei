import Head from 'next/head'
import HistoryPageContent from '../components/historyComponents/HistoryPageContent'

const HistoryPage = () => (
  <>
    <Head>
      <title>神社のご紹介 | 大館神明社</title>
      <meta
        name='description'
        content='大館神明社の歴史とご紹介。秋田県大館市にある由緒ある神社の歴史、御祭神、境内の見どころについてご案内いたします。'
      />
      <meta name='keywords' content='大館神明社,神社の歴史,秋田県,大館市,御祭神,境内,見どころ,由緒' />
    </Head>
    <HistoryPageContent />
  </>
)

export default HistoryPage
