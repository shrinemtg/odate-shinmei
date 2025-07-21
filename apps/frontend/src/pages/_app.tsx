import type { AppProps } from 'next/app'
import '../global.css'
import '../styles/variables.css'
import FooterSection from '../components/sections/FooterSection'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <FooterSection />
    </>
  )
}
