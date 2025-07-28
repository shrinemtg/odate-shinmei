import type { AppProps } from 'next/app'
import '../global.css'
import '../styles/variables.css'
import FooterSection from '../components/FooterSection'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <FooterSection />
    </>
  )
}
