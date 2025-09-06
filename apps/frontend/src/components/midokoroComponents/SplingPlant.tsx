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

const springPlants: PlantData[] = [
  {
    id: 1,
    name: 'Eomekon',
    imagePath: '/Plant-haru/haru-eomekon.png',
    japaneseName: 'エオメコン',
  },
  {
    id: 2,
    name: 'Ikarisou',
    imagePath: '/Plant-haru/haru-ikarisou.png',
    japaneseName: 'イカリソウ',
  },
  {
    id: 3,
    name: 'Ooamana',
    imagePath: '/Plant-haru/haru-ooamana.png',
    japaneseName: 'オオアマナ',
  },
  {
    id: 4,
    name: 'Yamaengosaku',
    imagePath: '/Plant-haru/haru-yamaengosaku.png',
    japaneseName: 'ヤマエンゴサク',
  },
  {
    id: 5,
    name: 'Nioisumire',
    imagePath: '/Plant-haru/haru-nioisumire.png',
    japaneseName: 'ニオイスミレ',
  },
  {
    id: 6,
    name: 'Mamusigusa',
    imagePath: '/Plant-haru/haru-mamusigusa.png',
    japaneseName: 'マムシグサ',
  },
  {
    id: 7,
    name: 'Ranankyurasu',
    imagePath: '/Plant-haru/haru-ranankyurasu.png',
    japaneseName: 'ラナンキュラス',
  },
  {
    id: 8,
    name: 'Hakobe',
    imagePath: '/Plant-haru/haru-hakobe.png',
    japaneseName: 'ハコベ',
  },
  {
    id: 9,
    name: 'Ume',
    imagePath: '/Plant-haru/haru-ume.png',
    japaneseName: 'ウメ',
  },
  {
    id: 10,
    name: 'Ooaraseitou',
    imagePath: '/Plant-haru/haru-ooaraseitou.png',
    japaneseName: 'オオアラセイトウ',
  },
  {
    id: 11,
    name: 'Kurofunetutuzi',
    imagePath: '/Plant-haru/haru-kurofunetutuzi.png',
    japaneseName: 'クロフネツツジ',
  },
]

const SpringPlantContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: visible;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    margin-bottom: 60px;
  }

  @media (max-width: 480px) {
    margin-bottom: 40px;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  overflow: visible;

  @media (max-width: 768px) {
    align-items: flex-start;
    gap: 1.5rem;
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
    padding: 0 12px;
  }
`

const TitleSection = styled.div`
  flex-shrink: 0;
  margin: 0 20px 0 120px;
  position: relative;
  z-index: 10;

  @media (max-width: 768px) {
    margin: 0 16px 0 60px;
  }

  @media (max-width: 480px) {
    margin: 0 16px 0 40px;
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
  position: relative;
  z-index: 10;
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
  right: -160px;
  width: 1100px;
  height: 100px;
  border-radius: 8px;
  background-color: var(--color-shuiro);
  opacity: 1;
  z-index: 0;
  transform: translateY(50px);

  @media (max-width: 1200px) {
    right: -13.33%;
    width: 91.67%;
  }

  @media (max-width: 768px) {
    right: -10%;
    width: 85%;
    height: 80px;
    top: 150px;
  }

  @media (max-width: 480px) {
    right: -5%;
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

const SpringPlantSlide: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const galleryRef = useRef<HTMLDivElement>(null)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === springPlants.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? springPlants.length - 1 : prevIndex - 1))
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

  // 11つ全ての植物を表示
  const getVisiblePlants = () => {
    return springPlants
  }

  const visiblePlants = getVisiblePlants()

  return (
    <SpringPlantContainer>
      <ContentWrapper>
        {/* 左側の縦書きタイトル */}
        <TitleSection>
          <VerticalTitle>
            <span>春</span>ノ花草
          </VerticalTitle>
        </TitleSection>

        {/* 右側の植物画像ギャラリー */}
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
    </SpringPlantContainer>
  )
}

export default SpringPlantSlide
