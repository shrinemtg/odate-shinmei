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
  background: url(/his/his-01.png) center center / cover no-repeat;
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
  font-size: var(--font-size-5xl);
  font-weight: 600;
  writing-mode: vertical-rl;
  letter-spacing: 0.2em;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  font-family: serif;
  line-height: 1.2;
  margin: 0;
`

const HeroSection = () => (
  <HeroSectionWrapper>
    <Overlay />
    <HeroTitle>神社のご紹介</HeroTitle>
  </HeroSectionWrapper>
)

export default HeroSection
