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

        {/* ファビコン設定 */}
        <link rel='icon' type='image/svg+xml' href='/fabikon/rogo.svg' />
        <link rel='icon' type='image/x-icon' href='/fabikon/favicon-16.v2.ico' />
        <link rel='icon' type='image/x-icon' sizes='16x16' href='/fabikon/favicon-16.v2.ico' />
        <link rel='icon' type='image/x-icon' sizes='32x32' href='/fabikon/favicon-32.v2.ico' />
        <link rel='icon' type='image/x-icon' sizes='48x48' href='/fabikon/favicon-48.v2.ico' />
        <link rel='apple-touch-icon' sizes='180x180' href='/fabikon/rogo-180.v2.png' />
        <link rel='icon' type='image/png' sizes='192x192' href='/fabikon/rogo-192.v2.png' />
        <link rel='icon' type='image/png' sizes='512x512' href='/fabikon/rogo-512.v2.png' />
        <link rel='manifest' href='/fabikon/manifest.json' />
      </Head>
      <PasswordProtection>
        <MenuBar />
        <Component {...pageProps} />
        <FooterSection />
      </PasswordProtection>
    </>
  )
}
