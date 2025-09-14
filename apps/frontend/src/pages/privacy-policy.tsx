import Head from 'next/head'
import PrivacyPolicy from '../components/contactComponents/PrivacyPolicy'

const PrivacyPolicyPage = () => {
  return (
    <>
      <Head>
        <title>プライバシーポリシー | 大館神明社</title>
        <meta
          name='description'
          content='大館神明社のプライバシーポリシー。個人情報の取り扱いについてご説明いたします。'
        />
        <meta name='keywords' content='プライバシーポリシー,大館神明社,個人情報保護,個人情報取り扱い' />
      </Head>
      <PrivacyPolicy />
    </>
  )
}

export default PrivacyPolicyPage
