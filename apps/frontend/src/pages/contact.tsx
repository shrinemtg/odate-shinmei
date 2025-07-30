import Head from 'next/head'
import ContactPageContent from '../components/contactComponents/ContactPageContent'

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>お問い合わせ - 大館神明社</title>
        <meta name='description' content='大館神明社へのお問い合わせ・ご予約はこちらからお気軽にお申し込みください。' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ContactPageContent />
    </>
  )
}

export default ContactPage
