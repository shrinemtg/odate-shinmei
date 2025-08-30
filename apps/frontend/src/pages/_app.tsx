import type { AppProps } from 'next/app'
import '../global.css'
import '../styles/variables.css'
import MenuBar from '../components/MenuBar'
import FooterSection from '../components/FooterSection'
import PasswordProtection from '../components/PasswordProtection'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PasswordProtection>
      <MenuBar />
      <Component {...pageProps} />
      <FooterSection />
    </PasswordProtection>
  )
}
