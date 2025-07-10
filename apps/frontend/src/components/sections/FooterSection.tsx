import Image from 'next/image'
import styled from '@emotion/styled'

const Footer = styled.footer`
  width: 100vw;
  background: #dbcead;
  position: relative;
  min-height: 120px;
  padding: 0;
  margin: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Cloud = styled.div`
  position: absolute;
  left: -160px;
  bottom: 0;
  width: 480px;
  height: 180px;
  z-index: 1;
  pointer-events: none;
`

const LogoArea = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 38px 0 28px 0;
`

const FooterSection = () => (
  <Footer>
    <Cloud>
      <Image
        src='/top-motion/footer-kumo.png'
        alt='雲'
        width={420}
        height={240}
        style={{ width: '100%', height: 'auto', display: 'block' }}
        priority
      />
    </Cloud>
    <LogoArea>
      <Image
        src='/top-motion/montuki-rogo.png'
        alt='神社ロゴ'
        width={150}
        height={150}
        style={{ marginBottom: 8, filter: 'brightness(0) invert(1)' }}
        priority
      />
    </LogoArea>
  </Footer>
)

export default FooterSection
