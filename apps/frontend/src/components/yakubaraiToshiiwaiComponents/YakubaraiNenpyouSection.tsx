import styled from '@emotion/styled'
import { useState, useEffect } from 'react'

const YakubaraiNenpyouSectionWrapper = styled.section`
  width: 100%;
  max-height: 90%;
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    max-height: 90%;
  }

  @media (max-width: 768px) {
    max-height: 80%;
    margin: 0 auto;
  }

  @media (max-width: 480px) {
    max-height: 70%;
    margin: 0;
  }
`

const ContentContainer = styled.div`
  width: 100%;
  max-width: 80%;
  margin: 0 0 0 7rem;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 80%;
    margin: 0 0 0 7rem;
    padding: 3rem 1.5rem;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    max-width: 90%;
    margin: 3rem auto 4rem;
    padding: 2rem 1rem;
    gap: 1.5rem;
    align-items: center;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    padding: 1.5rem 0.5rem;
    gap: 1rem;
    margin: 3rem auto 4rem;
  }
`

const MainTitle = styled.h2`
  font-size: var(--font-size-5xl);
  font-weight: 600;
  color: var(--color-shuiro);
  font-family: var(--font-family-serif);
  margin: 0;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: var(--font-size-4xl);
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-3xl);
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-2xl);
  }
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

  @media (max-width: 1024px) {
    max-width: 700px;
  }

  @media (max-width: 768px) {
    max-width: calc(100% - 2rem);
  }

  @media (max-width: 480px) {
    border-width: 1px;
  }
`

const NenpyouImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
  display: block;
`

const ExplanationText = styled.div`
  width: 100%;
  max-width: 90%;
  color: var(--color-gray);
  font-size: var(--font-size-base);
  line-height: 1.8;
  font-family: var(--font-family-serif);
  text-align: center;
  margin-top: 2rem;

  p {
    margin: 0 0 0.5rem 0;
  }

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 90%;
    font-size: var(--font-size-base);
    line-height: 1.7;
    margin-top: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
    width: 100%;
    max-width: 90%;
    line-height: 1.6;
    margin-top: 1rem;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-xs);
    line-height: 1.5;
    margin-top: 0.75rem;
  }
`

const YakubaraiNenpyouSection = () => {
  const [imageSrc, setImageSrc] = useState('/yakubaraiPhoto/yakubarai-04.png')

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setImageSrc('/yakubaraiPhoto/s-yakubarai-04.png')
      } else {
        setImageSrc('/yakubaraiPhoto/yakubarai-04.png')
      }
    }

    // 初期設定
    handleResize()

    // リサイズイベントリスナーを追加
    window.addEventListener('resize', handleResize)

    // クリーンアップ
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <YakubaraiNenpyouSectionWrapper>
      <ContentContainer>
        <MainTitle>令和7年 厄年</MainTitle>

        <ImageContainer>
          <NenpyouImage src={imageSrc} alt='令和7年厄年表' />
        </ImageContainer>

        <ExplanationText>
          <p>厄年の年齢は、一般的に数え年で数えられ</p>
          <p>男性では25歳・42歳・61歳、女性では19歳・33歳・37歳が該当します。</p>
          <p>特に男性の42歳と女性の33歳は「大厄」と呼ばれています</p>
        </ExplanationText>
      </ContentContainer>
    </YakubaraiNenpyouSectionWrapper>
  )
}

export default YakubaraiNenpyouSection
