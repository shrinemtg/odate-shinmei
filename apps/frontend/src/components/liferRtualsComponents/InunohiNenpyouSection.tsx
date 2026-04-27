import styled from '@emotion/styled'
import { useState, useEffect } from 'react'

const InunohiNenpyouSectionWrapper = styled.section`
  width: 100%;
  padding: 5rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  background: var(--color-oud) url('/top-motion/haikei.webp') center top / 100% auto repeat-y;
  background-attachment: fixed;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 5rem auto;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 5rem auto;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 5rem auto;
    gap: 1.5rem;
  }
`

const MainTitle = styled.h2`
  font-size: var(--font-size-4xl);
  font-weight: 600;
  color: var(--color-shuiro);
  font-family: var(--font-family-serif);
  padding: 3rem 0 0;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: var(--font-size-3xl);
    padding: 3rem 0 1rem;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-2xl);
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-xl);
  }
`

const ImageContainer = styled.div`
  width: 60%;
  max-width: 800px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 3rem;
  border: 1px solid var(--color-gray);
  border-radius: 8px;

  @media (max-width: 1024px) {
    padding: 2rem 2rem;
    width: 58%;
  }

  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 0.75rem 1rem;
  }
`

const NenpyouImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
  display: block;
`

const ReservationButton = styled.a`
  background: var(--color-shuiro);
  color: var(--color-white);
  border: none;
  border-radius: 8px;
  padding: 1rem 2rem;
  font-size: var(--font-size-base);
  font-weight: 600;
  font-family: var(--font-family-serif);
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-end;
  margin: 2rem auto 3rem;
  text-decoration: none;
  display: block;
  width: fit-content;

  &:hover {
    background: #7a2e2b;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(153, 58, 55, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 1024px) {
    padding: 0.875rem 1.75rem;
    font-size: var(--font-size-base);
  }

  @media (max-width: 768px) {
    align-self: center;
    padding: 0.75rem 1.5rem;
    font-size: var(--font-size-sm);
    order: 5;
  }

  @media (max-width: 480px) {
    padding: 0.625rem 1.25rem;
    font-size: var(--font-size-xs);
  }
`

const InunohiNenpyouSection = () => {
  const [imageSrc, setImageSrc] = useState('/life/life-03.webp')

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setImageSrc('/life/s-life-03.webp')
      } else {
        setImageSrc('/life/life-03.webp')
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
    <InunohiNenpyouSectionWrapper>
      <MainTitle>令和7年 戌の日</MainTitle>

      <ImageContainer>
        <NenpyouImage src={imageSrc} alt='戌の日早見表' />
      </ImageContainer>

      <ReservationButton href='/contact'>ご予約はコチラ</ReservationButton>
    </InunohiNenpyouSectionWrapper>
  )
}

export default InunohiNenpyouSection
