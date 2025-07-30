import type { AppProps } from 'next/app'
import '../global.css'
import '../styles/variables.css'
import MenuBar from '../components/MenuBar'
import FooterSection from '../components/FooterSection'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MenuBar />
      <Component {...pageProps} />
      <FooterSection />
    </>
  )
}
