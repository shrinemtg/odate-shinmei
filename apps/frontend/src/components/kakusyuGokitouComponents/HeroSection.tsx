import styled from '@emotion/styled'

const HeroSectionWrapper = styled.section`
  width: 100vw;
  height: 60vh;
  min-height: 400px;
  max-height: 600px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(/kakusyuGokitouPhoto/kakusyugokitou-01.png) center center / cover no-repeat;

  @media (max-width: 1024px) {
    height: 50vh;
    min-height: 350px;
    max-height: 500px;
  }

  @media (max-width: 768px) {
    height: 40vh;
    min-height: 300px;
    max-height: 400px;
  }

  @media (max-width: 480px) {
    height: 35vh;
    min-height: 250px;
    max-height: 350px;
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
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

  @media (max-width: 1024px) {
    font-size: var(--font-size-xl);
    letter-spacing: 0.15em;
  }

  @media (max-width: 768px) {
    writing-mode: horizontal-tb;
    font-size: var(--font-size-lg);
    text-align: center;
    letter-spacing: 0.1em;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-base);
  }
`

const HeroSection = () => (
  <HeroSectionWrapper>
    <Overlay />
    <HeroTitle>各種御祈祷</HeroTitle>
  </HeroSectionWrapper>
)

export default HeroSection
