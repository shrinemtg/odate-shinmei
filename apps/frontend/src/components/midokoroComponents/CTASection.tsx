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
  position: relative;
`

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 40px;
  align-items: start;
  min-height: 600px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`

const TitleArea = styled.div`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  height: 78%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`

const MainTitle = styled.h2`
  color: var(--color-brown);
  font-family: 'Noto Serif JP', serif;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0.7em;
  line-height: 1.8;
  margin: 0;
`

const CenterArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`

const MainImage = styled.div`
  width: 500px;
  height: 400px;
  border: 2px solid var(--color-oud);
  border-radius: 8px;
  overflow: hidden;
  background: var(--color-light-gray);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const TextContent = styled.div`
  text-align: center;
  max-width: 600px;
`

const ContentTitle = styled.h3`
  color: var(--color-gray);
  font-family: 'Noto Serif JP', serif;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 24px;
  letter-spacing: 0.05em;
`

const DescriptionText = styled.p`
  color: var(--color-gray);
  font-family: 'Noto Serif JP', serif;
  font-size: 16px;
  line-height: 2;
  margin: 0 24px;
  white-space: pre-line;
`

const RightArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  height: 100%;
  position: relative;
`

const CatSilhouette = styled.div`
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-brown);
  position: absolute;
  bottom: -82px;
  right: 1000px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const PlantSection = () => (
  <PlantSectionWrapper>
    <Container>
      <ContentGrid>
        <TitleArea>
          <MainTitle>黒猫のジジ</MainTitle>
        </TitleArea>

        <CenterArea>
          <MainImage>
            <img src='/neko/zizi.png' alt='黒猫のジジ' />
          </MainImage>
          <TextContent>
            <ContentTitle>大館神明社の境内に現れる黒猫のジジ</ContentTitle>
            <DescriptionText>
              色合いと光る瞳から、黒猫は古くから日本で特に大切にされ、 魔除けや商売繁盛の象徴として親しまれてきました。
              黒猫のジジも、見つけると縁起が良いと言われています。
              大館神明社にお越しの際は、ぜひジジを探してみてください。
            </DescriptionText>
          </TextContent>
        </CenterArea>

        <RightArea>
          <CatSilhouette>
            <img src='/neko/neko05.png' alt='猫のシルエット' />
          </CatSilhouette>
        </RightArea>
      </ContentGrid>
    </Container>
  </PlantSectionWrapper>
)

export default PlantSection
