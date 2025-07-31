import styled from '@emotion/styled'

const YakubaraiNenpyouSectionWrapper = styled.section`
  width: 68%;
  max-width: 1200px;
  margin: 2rem 12rem;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`

const MainTitle = styled.h2`
  font-size: var(--font-size-4xl);
  font-weight: 600;
  color: var(--color-shuiro);
  font-family: var(--font-family-serif);
  margin: 0;
  text-align: center;
`

const ImageContainer = styled.div`
  width: 100%;
  max-width: 900px;
  border: 2px solid var(--color-brown);
  border-radius: 8px;
  overflow: hidden;
  background: #f8f6f3;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`

const NenpyouImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
  display: block;
`

const ExplanationText = styled.div`
  width: 100%;
  max-width: 900px;
  color: var(--color-gray);
  font-size: var(--font-size-base);
  line-height: 1.8;
  font-family: var(--font-family-serif);
  text-align: center;
  margin-top: 2rem;

  p {
    margin: 0 0 0.5rem 0;
  }
`

const YakubaraiNenpyouSection = () => {
  return (
    <YakubaraiNenpyouSectionWrapper>
      <MainTitle>令和7年 厄年</MainTitle>

      <ImageContainer>
        <NenpyouImage src='/yakubaraiPhoto/yakubarai-04.png' alt='令和7年厄年表' />
      </ImageContainer>

      <ExplanationText>
        <p>厄年の年齢は、一般的に数え年で数えられ</p>
        <p>男性では25歳・42歳・61歳、女性では19歳・33歳・37歳が該当します。</p>
        <p>特に男性の42歳と女性の33歳は「大厄」と呼ばれています</p>
      </ExplanationText>
    </YakubaraiNenpyouSectionWrapper>
  )
}

export default YakubaraiNenpyouSection
