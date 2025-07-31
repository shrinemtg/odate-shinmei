import styled from '@emotion/styled'

const ToshiiwaiSectionWrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: flex;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`

const PhotoSection = styled.div`
  flex: 1;
  margin: 0 0 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const PhotoWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

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

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
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
`

const TextContent = styled.div`
  flex: 1;
  color: var(--color-gray);
  font-size: var(--font-size-base);
  line-height: 1.8;
  font-family: var(--font-family-serif);
  margin: 3rem 0 0 0;

  p {
    margin: 0 0 1.5rem 0;
  }

  p:last-child {
    margin-bottom: 0;
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
          <p>特定の節目の年齢を迎えた方の健康と長寿を祝い、感謝と敬意を表すものです。</p>
          <p>奈良時代に中国より伝わり現代に受け継がれています</p>
          <p>61歳以上になると周りがお祝いし、それまでの節目の年は自分自身で祝う事が昔の風習でした。</p>
          <p>現在では、家族や親しい人々が集まり、人生の節目を祝う大切な機会となっています。</p>
        </TextContent>
        <MainTitle>歳祝い</MainTitle>
      </ContentSection>
    </ToshiiwaiSectionWrapper>
  )
}

export default ToshiiwaiSection
