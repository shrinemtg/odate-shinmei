import styled from '@emotion/styled'

const PlantSectionWrapper = styled.section`
  width: 100%;
  padding: 80px 0;
  position: relative;
  background: var(--color-oud) url('/top-motion/haikei.webp') center top / 100% auto repeat-y;
  background-attachment: fixed;

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
  gap: 3rem;
  align-items: start;
  min-height: 600px;

  @media (max-width: 1024px) {
    grid-template-columns: 1.1fr 2fr 1fr;
    gap: 0.8rem;
    align-items: start;
    min-height: 200px;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    min-height: auto;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    min-height: auto;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`

const TitleArea = styled.div`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  height: 78%;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 900px) {
    writing-mode: horizontal-tb;
    text-orientation: initial;
    height: auto;
    justify-content: center;
    margin-bottom: 16px;
    order: 1; /* モバイルで最初に表示 */
  }

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

  @media (max-width: 1024px) {
    font-size: var(--font-size-4xl);
    letter-spacing: 0.3em;
    text-align: center;
    margin: 0 0 0 5rem;
  }

  @media (max-width: 900px) {
    font-size: var(--font-size-4xl);
    letter-spacing: 0.3em;
    text-align: center;
    margin: 4rem auto 0 auto;
  }

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

  @media (max-width: 900px) {
    gap: 24px;
    order: 2; /* モバイルで2番目に表示 */
  }

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

  @media (max-width: 900px) {
    width: 100%;
    max-width: 400px;
    height: 320px;
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

  @media (max-width: 900px) {
    max-width: 75%;
  }

  @media (max-width: 768px) {
    max-width: 80%;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`

const ContentTitle = styled.h3`
  color: var(--color-gray);
  font-family: 'Noto Serif JP', serif;
  font-size: var(--font-size-2xl)
  font-weight: 600;
  margin-bottom: 24px;
  letter-spacing: 0.05em;

  @media (max-width: 900px) {
    font-size: var(--font-size-xl);
    margin-bottom: 16px;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-xl);
    margin-bottom: 16px;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-lg);
    margin-bottom: 12px;
  }
`

const DescriptionText = styled.p`
  color: var(--color-gray);
  font-family: 'Noto Serif JP', serif;
  font-size: var(--font-size-base);
  line-height: 2;
  margin: 0 0 5rem 0;
  white-space: pre-line;

  @media (max-width: 900px) {
    font-size: var(--font-size-sm);
    line-height: 1.8;
    margin: 0 16px;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
    line-height: 1.8;
    margin: 0 16px;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-sm);
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

  @media (max-width: 900px) {
    align-items: center;
    justify-content: flex-end;

    order: 3; /* モバイルで3番目に表示 */
  }

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;

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
  position: relative;
  top: 12%;
  right: 280%;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media (max-width: 1024px) {
    position: relative;
    top: 12%;
    right: 280%;
  }

  @media (max-width: 900px) {
    position: relative;
    top: 140%;
    right: 25%;
  }

  @media (max-width: 768px) {
    position: relative;
    top: 108%;
    right: 20%;
  }

  @media (max-width: 480px) {
    width: 60px;
    position: relative;
    top: 82%;
    right: 20%;
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
            <img src='/neko/zizi.webp' alt='黒猫のジジ' />
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
            <img src='/neko/neko05.webp' alt='猫のシルエット' />
          </CatSilhouette>
        </RightArea>
      </ContentGrid>
    </Container>
  </PlantSectionWrapper>
)

export default PlantSection
