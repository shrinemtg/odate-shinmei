import styled from '@emotion/styled'

const IntroSectionWrapper = styled.section`
  width: 100vw;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 0 3rem 0;
  background: var(--color-oud) url('/top-motion/haikei.webp') center top / 100% auto repeat-y;
  background-attachment: fixed;

  @media (max-width: 1024px) {
    min-height: 280px;
    padding: 2.5rem 0 2.5rem 0;
  }

  @media (max-width: 768px) {
    min-height: 240px;
    padding: 2rem 0 2.5rem 0;
  }

  @media (max-width: 480px) {
    min-height: 200px;
    padding: 1.5rem 0 2rem 0;
  }
`

const IntroTitle = styled.h2`
  color: var(--color-brown);
  font-size: var(--font-size-4xl);
  font-weight: 600;
  letter-spacing: 0.1em;
  font-family: serif;
  margin-bottom: 24px;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: var(--font-size-3xl);
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-2xl);
    margin-bottom: 16px;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-xl);
    margin-bottom: 12px;
  }
`

const IntroTextContainer = styled.div`
  color: var(--color-brown);
  font-size: var(--font-size-base);
  font-family: serif;
  line-height: 2;
  text-align: center;
  max-width: 520px;
  margin: 0 auto 48px auto;

  @media (max-width: 1024px) {
    font-size: var(--font-size-base);
    line-height: 1.8;
    max-width: 480px;
    margin: 0 auto 40px auto;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
    line-height: 1.6;
    max-width: 80%;
    margin: 0 auto 32px auto;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-sm);
    line-height: 1.5;
    max-width: 80%;
    margin: 0 auto 24px auto;
  }
`

const IntroParagraph = styled.p`
  margin: 0;
`

const IntroSection = () => (
  <IntroSectionWrapper>
    <IntroTitle>年中行事</IntroTitle>
    <IntroTextContainer>
      <IntroParagraph>
        大館神明社では、季節ごとに様々な祭事や行事を行っております。
        古くから伝わる伝統行事を通じて、地域の皆様とともに四季を感じ 神様への感謝の気持ちを表します
        年間を通して行われる様々な神事や祭りに どうぞお気軽にご参加ください。
      </IntroParagraph>
    </IntroTextContainer>
  </IntroSectionWrapper>
)

export default IntroSection
