import styled from '@emotion/styled'

const EventHeroSectionWrapper = styled.section`
  width: 100%;
  height: 60vh;
  min-height: 400px;
  max-height: 600px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-oud) url(/eventPhoto/event-00.png) center center / 100% auto no-repeat;

  /* モバイル対応 */
  @media (max-width: 480px) {
    height: 50vh;
    min-height: 300px;
    max-height: 450px;
  }

  /* タブレット対応 */
  @media (min-width: 481px) and (max-width: 768px) {
    height: 55vh;
    min-height: 350px;
    max-height: 500px;
  }

  /* 中画面対応 */
  @media (min-width: 769px) and (max-width: 1024px) {
    height: 60vh;
    min-height: 400px;
    max-height: 550px;
  }

  /* 大画面対応 */
  @media (min-width: 1025px) {
    height: 60vh;
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

  /* モバイル対応 */
  @media (max-width: 768px) {
    font-size: var(--font-size-xl);
    letter-spacing: 0.15em;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  }

  /* タブレット対応 */
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: var(--font-size-2xl);
    letter-spacing: 0.18em;
  }

  /* 大画面対応 */
  @media (min-width: 1025px) {
    font-size: var(--font-size-2xl);
    letter-spacing: 0.2em;
  }
`

const HeroSection = () => (
  <EventHeroSectionWrapper>
    <Overlay />
    <HeroTitle>年中行事</HeroTitle>
  </EventHeroSectionWrapper>
)

export default HeroSection
