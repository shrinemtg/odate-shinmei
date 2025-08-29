import styled from '@emotion/styled'

const PlantSectionWrapper = styled.section`
  width: 100%;
  padding: 80px 0;
  position: relative;

  @media (max-width: 768px) {
    padding: 60px 0;
  }

  @media (max-width: 480px) {
    padding: 40px 0;
  }
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    padding: 0 12px;
  }
`

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 0.5fr;
  gap: 24px;
  align-items: start;
  min-height: 500px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    min-height: auto;
  }

  @media (max-width: 480px) {
    gap: 24px;
  }
`

const ImageArea = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  background: var(--color-light-gray);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: -40px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: 300px;
    margin-left: 0;
    order: 3; /* モバイルで3番目に表示 */
  }

  @media (max-width: 480px) {
    height: 250px;
  }
`

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: 100%;
  padding-top: 160px;

  @media (max-width: 768px) {
    padding-top: 0;
    gap: 24px;
    order: 2; /* モバイルで2番目に表示 */
  }

  @media (max-width: 480px) {
    gap: 16px;
  }
`

const TitleArea = styled.div`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 240px;
  padding-top: 100px;

  @media (max-width: 768px) {
    writing-mode: horizontal-tb;
    text-orientation: initial;
    height: auto;
    padding-top: 0;
    justify-content: center;
    order: 1; /* モバイルで最初に表示 */
  }
`

const MainTitle = styled.h2`
  color: var(--color-brown);
  font-family: 'Noto Serif JP', serif;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0.1em;
  line-height: 1.8;
  margin: 0;
  white-space: nowrap;
  span {
    font-size: 48px;
    font-weight: 700;
    color: var(--color-brown);
  }

  @media (max-width: 768px) {
    font-size: 20px;
    letter-spacing: 0.05em;
    text-align: center;
    white-space: normal;

    span {
      font-size: 36px;
    }
  }

  @media (max-width: 480px) {
    font-size: 18px;

    span {
      font-size: 28px;
    }
  }
`

const DescriptionArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 20px;

  @media (max-width: 768px) {
    padding-left: 0;
  }
`

const DescriptionText = styled.p`
  color: var(--color-gray);
  font-family: 'Noto Serif JP', serif;
  font-size: 1rem;
  line-height: 1.8;
  margin: 0;
  white-space: pre-line;

  @media (max-width: 768px) {
    font-size: 0.875rem;
    line-height: 1.7;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
    line-height: 1.6;
  }
`

const PlantSection = () => (
  <PlantSectionWrapper>
    <Container>
      <ContentGrid>
        <ImageArea>
          <img src='/Plant-haru/plant-01.png' alt='境内の観葉植物' />
        </ImageArea>
        <TextArea>
          <DescriptionArea>
            <DescriptionText>
              大館神明社では、四季折々の観葉植物も大きな見どころのひとつです。 これらの植物は丁寧に手入れされており
              訪れる人々に季節の移ろいと 自然の美しさを感じていただけるよう心がけています。
              特に、希少な品種や地域特有の植物も多く 植物愛好家や写真愛好家にも人気のスポットとなっています。
            </DescriptionText>
          </DescriptionArea>
        </TextArea>
        <TitleArea>
          <MainTitle>
            境内の<span>観葉植物</span>
          </MainTitle>
        </TitleArea>
      </ContentGrid>
    </Container>
  </PlantSectionWrapper>
)

export default PlantSection
