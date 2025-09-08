'use client'

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import styled from '@emotion/styled'

interface PlantData {
  id: number
  name: string
  imagePath: string
  japaneseName: string
}

const summerPlants: PlantData[] = [
  {
    id: 1,
    name: 'Taisanboku',
    imagePath: '/Plant-natu/natu-taisanboku.png',
    japaneseName: 'タイサンボク',
  },
  {
    id: 2,
    name: 'Maizurusou',
    imagePath: '/Plant-natu/natu-maizurusou.png',
    japaneseName: 'マイズルソウ',
  },
  {
    id: 3,
    name: 'Kemansou',
    imagePath: '/Plant-natu/natu-kemansou.png',
    japaneseName: 'ケマンソウ',
  },
  {
    id: 4,
    name: 'Sugi',
    imagePath: '/Plant-natu/natu-sugi.png',
    japaneseName: 'スギ',
  },
  {
    id: 5,
    name: 'Sidareyanagi',
    imagePath: '/Plant-natu/natu-sidareyanagi.png',
    japaneseName: 'シダレヤナギ',
  },
  {
    id: 6,
    name: 'Oobananoenreisou',
    imagePath: '/Plant-natu/natu-oobananoenreisou.png',
    japaneseName: 'オオバナノエンレイソウ',
  },
  {
    id: 7,
    name: 'Kumagaisou',
    imagePath: '/Plant-natu/natu-kumagaisou.png',
    japaneseName: 'クマガイソウ',
  },
]

const SummerPlantContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: visible;
  padding: 80px 0;
  background: var(--color-oud) url('/top-motion/haikei.png') center top / 100% auto repeat-y;
  background-attachment: fixed;

  @media (max-width: 768px) {
    padding: 60px 0;
  }

  @media (max-width: 480px) {
    padding: 40px 0;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  max-width: 1200px;
  position: relative;
  overflow: visible;
  flex-direction: row-reverse;

  @media (max-width: 768px) {
    gap: 16px;
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    gap: 12px;
    padding: 0 12px;
  }
`

const TitleSection = styled.div`
  flex-shrink: 0;
  margin: 0 120px 0 20px;

  @media (max-width: 768px) {
    margin: 0 60px 0 12px;
  }

  @media (max-width: 480px) {
    margin: 0 40px 0 8px;
  }
`

const VerticalTitle = styled.div`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  color: var(--color-brown);
  font-weight: bold;
  font-size: var(--font-size-2xl);
  line-height: 1.6;
  letter-spacing: 0.3em;
  font-family: 'Noto Serif JP', serif;
  span {
    font-size: var(--font-size-5xl);
    font-weight: 700;
    color: var(--color-brown);
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-xl);

    span {
      font-size: var(--font-size-4xl);
    }
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-lg);

    span {
      font-size: var(--font-size-3xl);
    }
  }
`

const PlantGallery = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  flex: 1;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  padding-right: 0;
  position: relative;
  z-index: 2;

  /* スライドバーを非表示 */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media (max-width: 768px) {
    gap: 1rem;
  }

  @media (max-width: 480px) {
    gap: 0.8rem;
  }
`

const PlantItem = styled.div`
  flex-shrink: 0;
  position: relative;
  z-index: 2;
`

const PlantImageContainer = styled.div`
  position: relative;
  width: 227px;
  height: 298px;
  margin-bottom: 8px;
  border: 1px solid var(--color-gray);
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--color-white);
  z-index: 2;

  @media (max-width: 768px) {
    width: 180px;
    height: 240px;
  }

  @media (max-width: 480px) {
    width: 150px;
    height: 200px;
  }
`

const NameBarBackground = styled.div`
  position: absolute;
  top: 200px;
  bottom: 0;
  left: -160px;
  width: 1100px;
  height: 100px;
  border-radius: 8px;
  background-color: var(--color-shuiro);
  opacity: 1;
  z-index: 1;
  transform: translateY(50px);

  @media (max-width: 1200px) {
    left: -13.33%;
    width: 91.67%;
  }

  @media (max-width: 768px) {
    left: -10%;
    width: 85%;
    height: 80px;
    top: 150px;
  }

  @media (max-width: 480px) {
    left: -5%;
    width: 80%;
    height: 60px;
    top: 120px;
  }
`

const NameBarContainer = styled.div`
  position: relative;
  width: 100%;
  height: 32px;
  z-index: 3;

  @media (max-width: 768px) {
    height: 28px;
  }

  @media (max-width: 480px) {
    height: 24px;
  }
`

const NameBar = styled.div`
  position: absolute;
  top: -8px;
  left: -4px;
  right: -4px;
  height: 32px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;

  @media (max-width: 768px) {
    height: 28px;
    top: -6px;
  }

  @media (max-width: 480px) {
    height: 24px;
    top: -4px;
  }
`

const PlantName = styled.span`
  color: var(--color-white);
  font-size: var(--font-size-sm);
  font-weight: 500;
  letter-spacing: 0.05em;
  font-family: 'Noto Serif JP', serif;
  z-index: 4;
  position: relative;

  @media (max-width: 768px) {
    font-size: var(--font-size-xs);
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`

const SummerPlantSlide: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const galleryRef = useRef<HTMLDivElement>(null)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === summerPlants.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? summerPlants.length - 1 : prevIndex - 1))
  }

  // タッチスワイプ機能
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    }
    if (isRightSwipe) {
      prevSlide()
    }
  }

  // 7つ全ての植物を表示
  const getVisiblePlants = () => {
    return summerPlants
  }

  const visiblePlants = getVisiblePlants()

  return (
    <SummerPlantContainer>
      <ContentWrapper>
        {/* 右側の縦書きタイトル */}
        <TitleSection>
          <VerticalTitle>
            <span>夏</span>ノ草花
          </VerticalTitle>
        </TitleSection>

        {/* 左側の植物画像ギャラリー */}
        <PlantGallery ref={galleryRef} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
          {visiblePlants.map((plant, index) => (
            <PlantItem key={`${plant.id}-${currentIndex}-${index}`}>
              {/* 植物画像 */}
              <PlantImageContainer>
                <Image src={plant.imagePath} alt={plant.japaneseName} fill className='object-cover' />
              </PlantImageContainer>

              {/* 朱色の背景バー（画像の一部にかかる） */}
              <NameBarContainer>
                <NameBar>
                  <PlantName>{plant.japaneseName}</PlantName>
                </NameBar>
              </NameBarContainer>
            </PlantItem>
          ))}
        </PlantGallery>

        {/* 名前部分の背景バー（長方形） */}
        <NameBarBackground />
      </ContentWrapper>
    </SummerPlantContainer>
  )
}

export default SummerPlantSlide
