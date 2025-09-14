import Head from 'next/head'
import NoticeListPage from '../components/homeComponents/NoticeListPage'

export default function NoticesPage() {
  return (
    <>
      <Head>
        <title>お知らせ | 大館神明社</title>
        <meta
          name='description'
          content='大館神明社からのお知らせ。祭事の日程、特別祈祷、休社日などの最新情報をお知らせいたします。'
        />
        <meta name='keywords' content='お知らせ,大館神明社,祭事日程,特別祈祷,休社日,最新情報' />
      </Head>
      <NoticeListPage />
    </>
  )
}
