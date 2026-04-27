import styled from '@emotion/styled'
import { useState, useEffect } from 'react'
// import { useRouter } from 'next/router'

const ShichigosanPackSectionWrapper = styled.section`
  width: 100%;
  min-height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  background: var(--color-oud) url('/top-motion/haikei.webp') center top / 100% auto repeat-y;
  background-attachment: fixed;

  @media (max-width: 1024px) {
    min-height: 90%;
    margin: 0;
  }

  @media (max-width: 768px) {
    min-height: 80%;
    padding: 2rem 0;
    margin: 0;
  }

  @media (max-width: 480px) {
    min-height: 70%;
    padding: 1rem 0;
    margin: 0;
  }
`

const ContentContainer = styled.div`
  width: 100%;
  max-width: 80%;
  margin: 0 0 0 8.5rem;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 75%;
    margin: 0 0 0 8.5rem;
    padding: 3rem 1.5rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    margin: 0;
    padding: 1rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0.5rem;
  }
`

const MainTitle = styled.h1`
  color: var(--color-gray);
  font-size: var(--font-size-3xl);
  font-weight: 600;
  text-align: center;
  margin-bottom: 3rem;
  font-family: var(--font-family-serif);

  @media (max-width: 1024px) {
    font-size: var(--font-size-2xl);
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-xl);
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-lg);
    margin-bottom: 1rem;
  }
`

const PriceTableContainer = styled.div`
  width: 100%;
  max-width: 900px;
  position: relative;
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--color-oud);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  gap: 2rem;

  @media (max-width: 1024px) {
    max-width: 700px;
    padding: 1.5rem;
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    max-width: 80%;
    padding: 0.75rem;
    margin: 0;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    max-width: 80%;
    padding: 0.5rem;
    margin: 0;
    gap: 1rem;
  }
`

const PriceTableImage = styled.img`
  width: 100%;
  max-width: 1000px;
  height: auto;

  @media (max-width: 1024px) {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    max-width: 70%;
  }

  @media (max-width: 480px) {
    max-width: 90%;
  }
`

const Notes = styled.div`
  text-align: left;
  color: var(--color-gray);
  font-size: var(--font-size-sm);
  font-family: var(--font-family-serif);
  line-height: 1.8;
  margin-bottom: 0;

  p {
    margin: 0;
    padding: 0;
  }

  @media (max-width: 1024px) {
    font-size: var(--font-size-sm);
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    text-align: center;
    font-size: var(--font-size-sm);
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-xs);
    line-height: 1.4;
  }
`

const ShichigosanPackSection = () => {
  const [imageSrc, setImageSrc] = useState('/life/life-08.webp')

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setImageSrc('/life/s-life-08.webp')
      } else {
        setImageSrc('/life/life-08.webp')
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
    <ShichigosanPackSectionWrapper>
      <ContentContainer>
        <MainTitle>七五三パック料金表</MainTitle>

        <PriceTableContainer>
          <PriceTableImage src={imageSrc} alt='七五三パック料金表' />
          <Notes>
            <p>※パックは10月と11月のみ行っています。</p>
            <p>※衣装代には着付けとヘアメイクの料金が含まれています。</p>
          </Notes>
        </PriceTableContainer>
      </ContentContainer>
    </ShichigosanPackSectionWrapper>
  )
}

export default ShichigosanPackSection
