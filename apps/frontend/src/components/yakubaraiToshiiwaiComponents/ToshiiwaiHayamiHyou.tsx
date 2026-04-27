import styled from '@emotion/styled'
import { useState, useEffect } from 'react'

const ToshimawariNenpyouSectionWrapper = styled.section`
  width: 100vw;
  position: relative;
  display: flex;
  align-items: center;
  background: var(--color-oud) url('/top-motion/haikei.webp') center top / 100% auto repeat-y;
  background-attachment: fixed;
`

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 21rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  @media (max-width: 1024px) {
    padding: 3rem 1.5rem;
    gap: 2rem;
    margin: 0 0 0 8rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    gap: 1.5rem;
    align-items: center;
    margin: 0 2rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0.5rem;
    gap: 1rem;
    margin: 0 0.5rem;
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
  max-width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 4rem;
  border: 1px solid var(--color-gray);
  border-radius: 8px;

  @media (max-width: 1024px) {
    max-width: 80%;
    padding: 1.5rem 4rem;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 1rem 1.5rem;
  }

  @media (max-width: 480px) {
    max-width: 90%;
    padding: 0.75rem 1rem;
  }
`

const NenpyouImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
  display: block;
`

const ToshimawariNenpyouSection = () => {
  const [imageSrc, setImageSrc] = useState('/yakubaraiPhoto/yakubarai-06.png')

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setImageSrc('/yakubaraiPhoto/s-yakubarai-06.png')
      } else {
        setImageSrc('/yakubaraiPhoto/yakubarai-06.png')
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
    <ToshimawariNenpyouSectionWrapper>
      <ContentContainer>
        <MainTitle>歳祝い早見表</MainTitle>

        <ImageContainer>
          <NenpyouImage src={imageSrc} alt='年廻り早見表' />
        </ImageContainer>
      </ContentContainer>
    </ToshimawariNenpyouSectionWrapper>
  )
}

export default ToshimawariNenpyouSection
