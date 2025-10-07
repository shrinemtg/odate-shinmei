import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../global.css'
import '../styles/variables.css'
import MenuBar from '../components/MenuBar'
import FooterSection from '../components/FooterSection'
import PasswordProtection from '../components/PasswordProtection'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='大舘神明社の公式サイト' />
        <title>大舘神明社</title>

        {/* ファビコン設定 - Next.js 15の自動認識機能を使用 */}
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <link rel='icon' href='/icon.svg' type='image/svg+xml' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
      </Head>
      <PasswordProtection>
        <MenuBar />
        <Component {...pageProps} />
        <FooterSection />
      </PasswordProtection>
    </>
  )
}
