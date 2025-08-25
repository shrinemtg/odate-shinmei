import Image from 'next/image'
import styled from '@emotion/styled'

const logoImage = { src: '/top-motion/montuki-rogo.png', width: 200, height: 300 }

interface LogoCrossfadeProps {
  visible: boolean
  fade: number
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9998;
  pointer-events: none;
  background: transparent;
`

const LogoContainer = styled.div<{ fade: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
  opacity: ${(props) => 1 - props.fade};
  transition: opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
  background: transparent;

  @media (max-width: 1024px) {
    transform: translate(-50%, -50%) scale(0.9);
  }

  @media (max-width: 768px) {
    transform: translate(-50%, -50%) scale(0.8);
  }

  @media (max-width: 640px) {
    transform: translate(-50%, -50%) scale(0.7);
  }

  @media (max-width: 480px) {
    transform: translate(-50%, -50%) scale(0.6);
  }

  @media (max-width: 375px) {
    transform: translate(-50%, -50%) scale(0.5);
  }
`

const LogoCrossfade = ({ visible, fade }: LogoCrossfadeProps) => {
  if (!visible) return null

  return (
    <Container>
      {/* ロゴ */}
      <LogoContainer fade={fade}>
        <Image src={logoImage.src} width={logoImage.width} height={logoImage.height} alt='logo' />
      </LogoContainer>
    </Container>
  )
}

export default LogoCrossfade
