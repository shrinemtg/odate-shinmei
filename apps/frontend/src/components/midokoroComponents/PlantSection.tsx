import styled from '@emotion/styled'

const PlantSectionWrapper = styled.section`
  width: 100%;
  padding: 80px 0;
  position: relative;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
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
`

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: 100%;
  padding-top: 160px;
`

const TitleArea = styled.div`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 240px;
  padding-top: 100px;
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
`

const DescriptionArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 20px;
`

const DescriptionText = styled.p`
  color: var(--color-gray);
  font-family: 'Noto Serif JP', serif;
  font-size: 15px;
  line-height: 1.8;
  margin: 0;
  white-space: pre-line;
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
