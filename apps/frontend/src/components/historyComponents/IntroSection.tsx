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

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`

const ImageWrapper = styled.div`
  width: 300px;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
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
    <ImageContainer>
      <ImageWrapper>
        <img src='/his/his-06.png' alt='神社の歴史写真1' />
      </ImageWrapper>
      <ImageWrapper>
        <img src='/his/his-07.png' alt='神社の歴史写真2' />
      </ImageWrapper>
      <ImageWrapper>
        <img src='/his/his-08.png' alt='神社の歴史写真3' />
      </ImageWrapper>
    </ImageContainer>
  </IntroSectionWrapper>
)

export default IntroSection
