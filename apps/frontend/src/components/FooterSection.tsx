import Image from 'next/image'
import Link from 'next/link'
import styled from '@emotion/styled'

const Footer = styled.footer`
  width: 100%;
  background: var(--color-oud);
  position: relative;
  min-height: 120px;
  padding: 0;
  margin: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    min-height: 100px;
  }

  @media (max-width: 768px) {
    min-height: 80px;
  }

  @media (max-width: 480px) {
    min-height: 70px;
  }
`

const Cloud = styled.div`
  position: absolute;
  left: -160px;
  bottom: 0;
  width: 480px;
  height: 180px;
  z-index: 1;
  pointer-events: none;

  @media (max-width: 1024px) {
    left: -120px;
    width: 360px;
    height: 135px;
  }

  @media (max-width: 768px) {
    left: -80px;
    width: 240px;
    height: 90px;
  }

  @media (max-width: 480px) {
    left: -60px;
    width: 180px;
    height: 68px;
  }
`

const LogoArea = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 38px 0 28px 0;

  @media (max-width: 1024px) {
    margin: 30px 0 22px 0;
  }

  @media (max-width: 768px) {
    margin: 24px 0 18px 0;
  }

  @media (max-width: 480px) {
    margin: 20px 0 15px 0;
  }
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
      <Link href='/' style={{ textDecoration: 'none' }}>
        <Image
          src='/top-motion/montuki-rogo.png'
          alt='神社ロゴ'
          width={150}
          height={150}
          style={{
            marginBottom: 8,
            filter: 'brightness(0) invert(1)',
            cursor: 'pointer',
            width: 'auto',
            height: 'auto',
            maxWidth: '150px',
            maxHeight: '150px',
          }}
          priority
        />
      </Link>
    </LogoArea>
  </Footer>
)

export default FooterSection
