import styled from '@emotion/styled'

const IntroSectionWrapper = styled.section`
  width: 100vw;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 56px 0;
`

const IntroTitle = styled.h2`
  color: var(--color-brown);
  font-size: var(--font-size-4xl);
  font-weight: 600;
  letter-spacing: 0.1em;
  font-family: serif;
  margin-bottom: 24px;
  text-align: center;
`

const IntroTextContainer = styled.div`
  color: var(--color-brown);
  font-size: var(--font-size-base);
  font-family: serif;
  line-height: 2;
  text-align: center;
  max-width: 520px;
  margin: 0 auto 48px auto;
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
