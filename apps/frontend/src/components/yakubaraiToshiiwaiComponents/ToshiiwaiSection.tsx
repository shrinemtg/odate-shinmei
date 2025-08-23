import styled from '@emotion/styled'

const ToshiiwaiSectionWrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: flex;
  align-items: flex-start;

  @media (max-width: 1024px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 1rem;
    align-items: center;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0.5rem;
    gap: 1.5rem;
  }
`

const PhotoSection = styled.div`
  flex: 1;
  margin: 0 0 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    margin: 0 0 0 1.5rem;
  }

  @media (max-width: 768px) {
    margin: 0;
    order: 3;
    width: 100%;
    justify-content: center;
  }
`

const PhotoWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    max-width: 350px;
    height: 250px;
  }

  @media (max-width: 768px) {
    max-width: 300px;
    height: 200px;
  }

  @media (max-width: 480px) {
    max-width: 250px;
    height: 180px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`

const ContentSection = styled.div`
  flex: 1;
  display: flex;
  gap: 1rem;

  @media (max-width: 1024px) {
    gap: 0.75rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    order: 2;
    width: 100%;
    align-items: center;
  }

  @media (max-width: 480px) {
    gap: 0.75rem;
  }
`

const MainTitle = styled.h2`
  font-size: var(--font-size-5xl);
  font-weight: 600;
  color: var(--color-brown);
  writing-mode: vertical-rl;
  letter-spacing: 0.2em;
  font-family: var(--font-family-serif);
  line-height: 1.2;
  flex-shrink: 0;

  @media (max-width: 1024px) {
    font-size: var(--font-size-4xl);
  }

  @media (max-width: 768px) {
    writing-mode: horizontal-tb;
    font-size: var(--font-size-3xl);
    text-align: center;
    letter-spacing: 0.1em;
    order: 1;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-2xl);
  }
`

const TextContent = styled.div`
  flex: 1;
  color: var(--color-gray);
  font-size: var(--font-size-base);
  line-height: 1.8;
  font-family: var(--font-family-serif);
  margin: 3rem 0 0 0;
  padding: 0 1rem;

  p {
    margin: 0 0 1.5rem 0;
  }

  p:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 1024px) {
    font-size: var(--font-size-base);
    line-height: 1.7;
    margin: 2rem 0 0 0;
    padding: 0 0.75rem;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
    line-height: 1.6;
    margin: 0;
    text-align: center;
    order: 2;
    width: 90%;
    max-width: 600px;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-xs);
    line-height: 1.5;
    padding: 0 0.5rem;
  }
`

const ToshiiwaiSection = () => {
  return (
    <ToshiiwaiSectionWrapper>
      <PhotoSection>
        <PhotoWrapper>
          <img src='/yakubaraiPhoto/yakubarai-03.png' alt='歳祝い' />
        </PhotoWrapper>
      </PhotoSection>

      <ContentSection>
        <TextContent>
          特定の節目の年齢を迎えた方の健康と長寿を祝い、感謝と敬意を表すものです。
          <br />
          奈良時代に中国より伝わり現代に受け継がれています
          <br />
          61歳以上になると周りがお祝いし、それまでの節目の年は自分自身で祝う事が昔の風習でした。
          <br />
          現在では、家族や親しい人々が集まり、人生の節目を祝う大切な機会となっています。
        </TextContent>
        <MainTitle>歳祝い</MainTitle>
      </ContentSection>
    </ToshiiwaiSectionWrapper>
  )
}

export default ToshiiwaiSection
