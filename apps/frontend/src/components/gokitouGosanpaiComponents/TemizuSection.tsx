import styled from '@emotion/styled'

const TemizuSectionWrapper = styled.section`
  width: 100%;
  height: 460px;
  position: relative;
  overflow: hidden;
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
`

const TextArea = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
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
`

const ContentArea = styled.div`
  flex: 1;
  color: var(--color-white);
  font-family: var(--font-family-serif);
  max-width: 50%;
`

const ContentTitle = styled.h3`
  font-size: var(--font-size-xl);
  font-weight: 600;
  margin: 0 0 1rem 0;
  line-height: 1.4;
`

const ContentText = styled.p`
  font-size: var(--font-size-base);
  line-height: 1.8;
  margin: 0;
  text-align: justify;
  max-width: 400px;
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
