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

  @media (min-width: 481px) {
    height: 40vh;
    min-height: 300px;
    max-height: 400px;
  }

  @media (min-width: 769px) {
    height: 50vh;
    min-height: 350px;
    max-height: 500px;
  }

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

  @media (min-width: 355px) {
    top: 20%;
    height: 100%;
  }
  @media (min-width: 481px) {
    top: 20%;
    height: 100%;
  }

  @media (min-width: 769px) {
    top: 0%;
    height: 120%;
  }

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
  font-size: var(--font-size-base);
  font-weight: 600;
  writing-mode: horizontal-tb;
  letter-spacing: 0.1em;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  font-family: serif;
  line-height: 1.2;
  text-align: center;
  margin: 0;

  @media (min-width: 481px) {
    font-size: var(--font-size-lg);
    letter-spacing: 0.1em;
  }

  @media (min-width: 769px) {
    writing-mode: vertical-rl;
    font-size: var(--font-size-xl);
    letter-spacing: 0.15em;
  }

  @media (min-width: 1025px) {
    font-size: var(--font-size-2xl);
    letter-spacing: 0.2em;
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
