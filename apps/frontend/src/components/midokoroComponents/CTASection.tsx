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
  position: relative;

  @media (max-width: 768px) {
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    padding: 0 12px;
  }
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
    min-height: auto;
  }

  @media (max-width: 480px) {
    gap: 24px;
  }
`

const TitleArea = styled.div`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  height: 78%;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 768px) {
    writing-mode: horizontal-tb;
    text-orientation: initial;
    height: auto;
    justify-content: center;
    margin-bottom: 16px;
    order: 1; /* モバイルで最初に表示 */
  }
`

const MainTitle = styled.h2`
  color: var(--color-brown);
  font-family: 'Noto Serif JP', serif;
  font-size: var(--font-size-5xl);
  font-weight: 600;
  letter-spacing: 0.5em;
  line-height: 1.8;
  margin: 0;

  @media (max-width: 768px) {
    font-size: var(--font-size-4xl);
    letter-spacing: 0.3em;
    text-align: center;
    margin: 4rem auto 0 auto;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-2xl);
    letter-spacing: 0.2em;
  }
`

const CenterArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media (max-width: 768px) {
    gap: 24px;
    order: 2; /* モバイルで2番目に表示 */
  }

  @media (max-width: 480px) {
    gap: 16px;
  }
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

  @media (max-width: 768px) {
    width: 100%;
    max-width: 400px;
    height: 320px;
  }

  @media (max-width: 480px) {
    height: 250px;
  }
`

const TextContent = styled.div`
  text-align: center;
  max-width: 600px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`

const ContentTitle = styled.h3`
  color: var(--color-gray);
  font-family: 'Noto Serif JP', serif;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 24px;
  letter-spacing: 0.05em;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 16px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 12px;
  }
`

const DescriptionText = styled.p`
  color: var(--color-gray);
  font-family: 'Noto Serif JP', serif;
  font-size: 16px;
  line-height: 2;
  margin: 0 24px;
  white-space: pre-line;

  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 1.8;
    margin: 0 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 1.7;
    margin: 0 8px;
  }
`

const RightArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  height: 100%;
  position: relative;

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
    height: auto;
    order: 3; /* モバイルで3番目に表示 */
  }
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

  @media (max-width: 768px) {
    position: static;
    margin-top: 16px;
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 45px;
    margin-top: 12px;
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
            <ContentTitle>境内に現れる黒猫のジジ</ContentTitle>
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
