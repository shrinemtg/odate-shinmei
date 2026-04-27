import { useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import AccessSection from './AccessSection'
import ContactSection from './ContactSection'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`

const CatAnimation = styled.div<{ scrollProgress: number }>`
  position: fixed;
  bottom: 20px;
  right: 40px;
  width: 220px;
  height: 140px;
  z-index: 1000;
  pointer-events: none;
  transition: transform 0.1s ease-out;
  transform: ${({ scrollProgress }) => {
    // 滑らかな弧を描く移動パスを計算
    const startX = 280 // 画面外の開始位置（右側）
    const startY = -150 // 上部の開始位置
    const endX = -240 // 左上の停止位置
    const endY = -360 // 左上の停止位置

    // スクロール進捗に基づいて位置を計算
    const progress = Math.min(Math.max(scrollProgress, 0), 1)

    // 弧を描く移動パス（ベジェ曲線風）- 制御点を調整
    const controlX = 60 // 制御点Xを調整して滑らかな弧を実現
    const controlY = -200 // 制御点Yを調整して滑らかな弧を実現

    // 二次ベジェ曲線風の計算
    const t = progress
    const x = startX * Math.pow(1 - t, 2) + controlX * 2 * (1 - t) * t + endX * Math.pow(t, 2)
    const y = startY * Math.pow(1 - t, 2) + controlY * 2 * (1 - t) * t + endY * Math.pow(t, 2)

    return `translate(${x}px, ${y}px)`
  }};

  @media (max-width: 1024px) {
    display: none;
  }
`

const AccessContactWrapper = () => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current) return

      const rect = wrapperRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const wrapperHeight = rect.height

      // 2つのセクション全体のスクロール進捗を計算
      const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + wrapperHeight)))

      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // 初期位置を設定

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Wrapper ref={wrapperRef}>
      <AccessSection />
      <ContactSection />
      <CatAnimation scrollProgress={scrollProgress}>
        <Image
          src='/neko/neko04.webp'
          alt='猫のイラスト'
          width={220}
          height={140}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            display: 'block',
          }}
          priority
        />
      </CatAnimation>
    </Wrapper>
  )
}

export default AccessContactWrapper
