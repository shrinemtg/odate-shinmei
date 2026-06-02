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
        {/*
          再訪問者のイントロ演出スキップを「描画前」に確定させるための同期スクリプト。
          トップは初回訪問のLCPを早めるため intro を既定で描画(SSR)するが、再訪問者には
          描画前に html.skip-intro を付与して global.css 側で intro を隠す（ちらつき防止）。
        */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(localStorage.getItem('hasVisitedBefore')==='true'){document.documentElement.classList.add('skip-intro')}}catch(e){}",
          }}
        />
        <meta name='description' content='大舘神明社の公式サイト' />
        <title>大舘神明社</title>

        {/*
          フォント読み込み: global.css の @import から head の link へ移動。
          @import はリクエストが直列化（HTML→CSS→フォントCSS→フォント）し描画をブロックするため、
          preconnect で接続を先行確立し、stylesheet を並列取得する。
          フォント・ウェイト・display=swap は従来と完全に同一（見た目は変わらない）。
        */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;500;600;700&display=swap'
        />

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
