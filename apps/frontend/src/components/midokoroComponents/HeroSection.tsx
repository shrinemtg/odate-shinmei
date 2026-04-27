import styled from '@emotion/styled'

const HeroSectionWrapper = styled.section`
  width: 100vw;
  height: 90vh;
  min-height: 400px;
  max-height: 600px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(/ema/ema-hero.webp) center center / cover no-repeat;

  /* モバイル対応 */
  @media (max-width: 768px) {
    height: 70vh;
    min-height: 300px;
    max-height: 500px;
  }

  /* 小画面モバイル対応 */
  @media (max-width: 480px) {
    height: 65vh;
    min-height: 250px;
    max-height: 400px;
  }

  /* タブレット対応 */
  @media (min-width: 769px) and (max-width: 1024px) {
    height: 80vh;
    min-height: 350px;
    max-height: 550px;
  }

  /* 大画面対応 */
  @media (min-width: 1025px) {
    height: 90vh;
    min-height: 400px;
    max-height: 600px;
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
  font-size: var(--font-size-2xl);
  font-weight: 600;
  writing-mode: vertical-rl;
  letter-spacing: 0.2em;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  font-family: serif;
  line-height: 1.2;
  margin: 0;

  /* タブレット対応 */
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: var(--font-size-xl);
    letter-spacing: 0.15em;
  }

  /* モバイル対応 */
  @media (max-width: 768px) {
    font-size: var(--font-size-lg);
    letter-spacing: 0.12em;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  }

  /* 小画面モバイル対応 */
  @media (max-width: 480px) {
    font-size: var(--font-size-base);
    letter-spacing: 0.1em;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);
  }

  /* 大画面対応 */
  @media (min-width: 1025px) {
    font-size: var(--font-size-2xl);
    letter-spacing: 0.2em;
  }
`

const HeroSection = () => (
  <HeroSectionWrapper>
    <Overlay />
    <HeroTitle>大館神明社の見どころ</HeroTitle>
  </HeroSectionWrapper>
)

export default HeroSection
