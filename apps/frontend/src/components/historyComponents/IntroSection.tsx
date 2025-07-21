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
  margin: 0 auto;
`

const IntroParagraph = styled.p`
  margin: 0;
`

const IntroSection = () => (
  <IntroSectionWrapper>
    <IntroTitle>歴史</IntroTitle>
    <IntroTextContainer>
      <IntroParagraph>
        はじまりは平安時代までさかのぼるとされ、
        <br />
        地元の人々を守る「産土神(うぶすながみ)」として
        <br />
        信仰されてきました。
        <br />
        江戸時代には佐竹藩とのゆかりもあり、地域の発展とともに歩んできました。
      </IntroParagraph>
    </IntroTextContainer>
  </IntroSectionWrapper>
)

export default IntroSection
