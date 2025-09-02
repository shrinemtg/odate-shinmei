import styled from '@emotion/styled'

const HeroSectionWrapper = styled.section`
  width: 100vw;
  height: 35vh;
  min-height: 250px;
  max-height: 350px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  /* 小画面モバイル対応 */
  @media (max-width: 480px) {
    height: 45vh;
    min-height: 250px;
    max-height: 400px;
  }

  /* モバイル対応 */
  @media (min-width: 481px) and (max-width: 768px) {
    height: 45vh;
    min-height: 300px;
    max-height: 400px;
  }

  /* タブレット対応 */
  @media (min-width: 769px) and (max-width: 1024px) {
    height: 50vh;
    min-height: 350px;
    max-height: 500px;
  }

  /* 大画面対応 */
  @media (min-width: 1025px) {
    height: 60vh;
    min-height: 400px;
    max-height: 600px;
  }
`

const BackgroundImage = styled.img`
  position: absolute;
  top: 0%;
  left: 0;
  width: 100%;
  height: 130%;
  object-fit: cover;
  z-index: 0;

  /* 小画面モバイル対応 */
  @media (max-width: 480px) {
    top: 20%;
    height: 100%;
  }

  /* モバイル対応 */
  @media (min-width: 481px) and (max-width: 768px) {
    top: 20%;
    height: 100%;
  }

  /* タブレット対応 */
  @media (min-width: 769px) and (max-width: 1024px) {
    top: 0%;
    height: 120%;
  }

  /* 大画面対応 */
  @media (min-width: 1025px) {
    top: 0%;
    height: 125%;
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.45);
  z-index: 1;
`

const HeroTitle = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  color: var(--color-white);
  font-size: var(--font-size-xl);
  font-weight: 600;
  writing-mode: vertical-rl;
  text-orientation: upright;
  letter-spacing: 0.1em;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  font-family: serif;
  line-height: 1.2;
  text-align: center;
  margin: 0;

  /* 小画面モバイル対応 */
  @media (max-width: 480px) {
    writing-mode: vertical-rl !important;
    text-orientation: upright;
    font-size: var(--font-size-base);
    letter-spacing: 0.12em;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  }

  /* モバイル対応 */
  @media (min-width: 481px) and (max-width: 768px) {
    writing-mode: vertical-rl !important;
    text-orientation: upright;
    font-size: var(--font-size-base);
    letter-spacing: 0.1em;
  }

  /* タブレット対応 */
  @media (min-width: 769px) and (max-width: 1024px) {
    writing-mode: vertical-rl !important;
    text-orientation: upright;
    font-size: var(--font-size-lg);
    letter-spacing: 0.12em;
  }

  /* 大画面対応 */
  @media (min-width: 1025px) {
    writing-mode: vertical-rl !important;
    text-orientation: upright;
    font-size: var(--font-size-xl);
    letter-spacing: 0.15em;
  }
`

const HeroSection = () => (
  <HeroSectionWrapper>
    <BackgroundImage src='/gaisai/gaisai-00.png' alt='' />
    <Overlay />
    <HeroTitle>出張祭事</HeroTitle>
  </HeroSectionWrapper>
)

export default HeroSection
