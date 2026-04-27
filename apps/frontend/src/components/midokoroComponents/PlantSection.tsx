import styled from '@emotion/styled'

const PlantSectionWrapper = styled.section`
  width: 100%;
  padding: 80px 0;
  position: relative;
  background: var(--color-oud) url('/top-motion/haikei.webp') center top / 100% auto repeat-y;
  background-attachment: fixed;

  @media (max-width: 1024px) {
    padding: 80px 0;
  }

  @media (max-width: 768px) {
    padding: 80px 0;
  }

  @media (max-width: 480px) {
    padding: 80px 0;
  }
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: 1024px) {
    padding: 0 20px;
  }

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
  align-items: start;

  @media (max-width: 1024px) {
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 480px) {
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
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    height: 350px;
    margin-left: -30px;
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

const MainTitle = styled.h2`
  color: var(--color-brown);
  font-family: 'Noto Serif JP', serif;
  font-size: var(--font-size-2xl);
  font-weight: 600;
  letter-spacing: 0.1em;
  line-height: 1.8;
  margin: 0;
  white-space: nowrap;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 240px;

  span {
    font-size: var(--font-size-5xl);
    font-weight: 700;
    color: var(--color-brown);
  }

  @media (max-width: 1024px) {
    font-size: var(--font-size-xl);
    letter-spacing: 0.08em;
    height: 220px;

    span {
      font-size: var(--font-size-4xl);
    }
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-lg);
    letter-spacing: 0.05em;
    text-align: center;
    white-space: normal;
    writing-mode: horizontal-tb;
    text-orientation: initial;
    height: auto;
    padding-top: 0;
    justify-content: center;
    order: 1; /* モバイルで最初に表示 */

    span {
      font-size: var(--font-size-4xl);
    }
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-base);

    span {
      font-size: var(--font-size-3xl);
    }
  }
`

const DescriptionArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 4rem;
  width: 100%;
  max-width: 100%;

  @media (max-width: 1024px) {
    margin-top: 4rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 90%;
    justify-content: center;
    margin: 2rem auto;
    order: 2;
  }
`

const DescriptionText = styled.p`
  color: var(--color-gray);
  font-family: 'Noto Serif JP', serif;
  font-size: var(--font-size-base);
  line-height: 1.8;
  margin: 0;
  white-space: pre-line;

  @media (max-width: 1024px) {
    font-size: var(--font-size-base);
    line-height: 1.75;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
    line-height: 1.7;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-sm);
    line-height: 1.6;
  }
`

const PlantSection = () => (
  <PlantSectionWrapper>
    <Container>
      <ContentGrid>
        <ImageArea>
          <img src='/Plant-haru/plant-01.webp' alt='境内の観葉植物' />
        </ImageArea>
        <DescriptionArea>
          <DescriptionText>
            大館神明社では、四季折々の観葉植物も大きな見どころのひとつです。 これらの植物は丁寧に手入れされており
            訪れる人々に季節の移ろいと 自然の美しさを感じていただけるよう心がけています。
            特に、希少な品種や地域特有の植物も多く 植物愛好家や写真愛好家にも人気のスポットとなっています。
          </DescriptionText>
        </DescriptionArea>
        <MainTitle>
          境内の<span>観葉植物</span>
        </MainTitle>
      </ContentGrid>
    </Container>
  </PlantSectionWrapper>
)

export default PlantSection
