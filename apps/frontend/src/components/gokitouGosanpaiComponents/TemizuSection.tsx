import styled from '@emotion/styled'

const TemizuSectionWrapper = styled.section`
  width: 100%;
  height: 460px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 350px;
  }

  @media (max-width: 480px) {
    height: 300px;
  }
`

const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background: url('/gokitou/gokitou-06.png') center center / cover no-repeat;
  position: relative;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 100%);
  display: flex;
  align-items: center;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`

const TextArea = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 90%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 100%;
    gap: 1.5rem;
    margin: 0 0 0 6rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin: 0 auto;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 95%;
    margin: 0 auto;
  }
`

const VerticalTitle = styled.h2`
  color: var(--color-white);
  font-size: var(--font-size-5xl);
  font-weight: 600;
  font-family: var(--font-family-serif);
  writing-mode: vertical-rl;
  letter-spacing: 0.2em;
  line-height: 1.2;
  margin: 0;
  margin: 0 3rem;

  @media (max-width: 1024px) {
    font-size: var(--font-size-5xl);
    margin: 0 1rem;
  }

  @media (max-width: 768px) {
    writing-mode: horizontal-tb;
    font-size: var(--font-size-3xl);
    margin: 0;
    text-align: center;
    align-self: center;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-3xl);
  }
`

const ContentArea = styled.div`
  flex: 1;
  color: var(--color-white);
  font-family: var(--font-family-serif);
  max-width: 60%;

  @media (max-width: 768px) {
    max-width: 90%;
    margin: 0 auto;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`

const ContentTitle = styled.h3`
  font-size: var(--font-size-xl);
  font-weight: 600;
  margin: 0 0 1rem 0;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: var(--font-size-base);
    margin: 0 0 0.75rem 0;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-sm);
    margin: 0 0 0.5rem 0;
  }
`

const ContentText = styled.p`
  font-size: var(--font-size-base);
  line-height: 1.8;
  margin: 0;
  text-align: justify;
  max-width: 400px;

  @media (max-width: 768px) {
    font-size: var(--font-size-xs);
    line-height: 1.6;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-xs);
    line-height: 1.5;
  }
`

const TemizuSection = () => {
  return (
    <TemizuSectionWrapper>
      <BackgroundImage />
      <Overlay>
        <TextArea>
          <VerticalTitle>手水の作法</VerticalTitle>
          <ContentArea>
            <ContentTitle>手水</ContentTitle>
            <ContentText>
              手水の起源は、神話『古事記』に登場する 伊邪那岐命（いざなぎのみこと）が黄泉の国から戻った際に
              川で身を清めた「禊祓（みそぎはらい）」に由来します。
              この禊の風習が簡略化され、現在の手水舎での作法として受け継がれています。
            </ContentText>
          </ContentArea>
        </TextArea>
      </Overlay>
    </TemizuSectionWrapper>
  )
}

export default TemizuSection
