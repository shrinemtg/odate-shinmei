import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import styled from '@emotion/styled'

// 雲や画像のデータ
const leftClouds = [
  { src: '/top-motion/hidari-1-kumo.png', width: 900, height: 400, zIndex: 10, top: -100, left: -150 },
  { src: '/top-motion/hidari-2-kumo.png', width: 500, height: 350, zIndex: 11, top: 150, left: -150 },
  { src: '/top-motion/hidari-3-kumo.png', width: 850, height: 350, zIndex: 7, top: 300, left: -150 },
  { src: '/top-motion/hidari-4-kumo.png', width: 900, height: 350, zIndex: 6, top: 480, left: -250 },
]
const centerCloud = { src: '/top-motion/tyuuou-2-kumo.png', width: 800, height: 350, zIndex: 9, top: 100, left: 200 }
const rightClouds = [
  { src: '/top-motion/migi-1-kumo.png', width: 1100, height: 500, zIndex: 8, top: -180, right: -150 },
  { src: '/top-motion/migi-2-kumo.png', width: 800, height: 500, zIndex: 5, top: 100, right: -200 },
  { src: '/top-motion/migi-3-kumo.png', width: 1300, height: 500, zIndex: 4, top: 300, right: -300 },
  { src: '/top-motion/migi-4-kumo.png', width: 1300, height: 600, zIndex: 3, top: 500, right: -350 },
]
const haikeiImage = '/top-motion/haikei.png'
const logoImage = { src: '/top-motion/montuki-rogo.png', width: 200, height: 300 }
const textImage = { src: '/top-motion/midasimoji.png', width: 80, height: 400 }

const IntroContainer = styled(motion.div)`
  inset: 0;
  position: fixed;
  z-index: 9999;
  background: url(${haikeiImage}) center center / cover no-repeat;
  overflow: hidden;
`

const CloudElement = styled(motion.div)<{
  width: number
  height: number
  zIndex: number
  top: number
  left?: number
  right?: number
}>`
  position: absolute;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  z-index: ${(props) => props.zIndex};
  top: ${(props) => props.top}px;
  ${(props) => (props.left !== undefined ? `left: ${props.left}px;` : '')}
  ${(props) => (props.right !== undefined ? `right: ${props.right}px;` : '')}

  @media (max-width: 768px) {
    width: ${(props) => Math.round(props.width * 0.67)}px;
    height: ${(props) => Math.round(props.height * 0.67)}px;
    top: ${(props) => Math.round(props.top * 0.67)}px;
    ${(props) => (props.left !== undefined ? `left: ${Math.round(props.left * 0.67)}px;` : '')}
    ${(props) => (props.right !== undefined ? `right: ${Math.round(props.right * 0.67)}px;` : '')}
  }

  @media (max-width: 480px) {
    width: ${(props) => Math.round(props.width * 0.5)}px;
    height: ${(props) => Math.round(props.height * 0.5)}px;
    top: ${(props) => Math.round(props.top * 0.5)}px;
    ${(props) => (props.left !== undefined ? `left: ${Math.round(props.left * 0.5)}px;` : '')}
    ${(props) => (props.right !== undefined ? `right: ${Math.round(props.right * 0.5)}px;` : '')}
  }
`

const ContentCenter = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2000;
  width: auto;
  height: auto;
`

const ContentElement = styled(motion.div)`
  @media (max-width: 768px) {
    transform: scale(0.8);
  }

  @media (max-width: 480px) {
    transform: scale(0.6);
  }
`

type AnimationPhase = 'clouds' | 'text' | 'logo' | 'end'

interface IntroAnimationProps {
  onIntroEnd?: () => void
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onIntroEnd }) => {
  const [phase, setPhase] = useState<AnimationPhase>('clouds')
  const [isIntroVisible, setIsIntroVisible] = useState(true)
  const cloudAnimationDuration = 8

  // 雲アニメーション終了後にテキスト表示へ遷移
  useEffect(() => {
    if (phase === 'clouds') {
      const timer = setTimeout(
        () => {
          setPhase('text')
        },
        cloudAnimationDuration * 1000 * 0.5, // 60%時点でテキスト表示へ遷移
      )
      return () => clearTimeout(timer)
    }
    return undefined
  }, [phase])

  // テキスト表示後にロゴへ遷移
  useEffect(() => {
    if (phase === 'text') {
      const timer = setTimeout(() => {
        setPhase('logo')
      }, 2500)
      return () => clearTimeout(timer)
    }
    return undefined
  }, [phase])

  // ロゴ表示後にendへ遷移
  useEffect(() => {
    if (phase === 'logo') {
      const timer = setTimeout(() => {
        setPhase('end')
      }, 2500)
      return () => clearTimeout(timer)
    }
    return undefined
  }, [phase])

  // endになったらIntroAnimationを非表示にしonIntroEndを呼ぶ
  useEffect(() => {
    if (phase === 'end') {
      setIsIntroVisible(false)
      if (typeof window !== 'undefined') {
        document.body.style.overflow = 'auto'
      }
      if (onIntroEnd) onIntroEnd()
    }
  }, [phase, onIntroEnd])

  return (
    <AnimatePresence>
      {isIntroVisible && (
        <IntroContainer key='intro-container' exit={{ opacity: 0, transition: { duration: 1.5 } }}>
          {/* --- 左側の雲 --- */}
          {leftClouds.map((cloud, idx) => {
            const isPersistentCloud = cloud.src === '/top-motion/hidari-4-kumo.png'
            if (!isPersistentCloud && (phase === 'logo' || phase === 'end')) return null
            // persistentな雲もinitial/animateで動きをつける
            let animateProps
            if (isPersistentCloud) {
              animateProps = { x: -80, y: 0, opacity: 1 }
            } else {
              // 放射状に移動（角度をさらに強調）
              const yOffsets = [-200, 200, 400]
              animateProps = { x: '-100vw', y: yOffsets[idx] || 0, opacity: 0 }
            }
            return (
              <CloudElement
                key={cloud.src}
                width={cloud.width}
                height={cloud.height}
                zIndex={cloud.zIndex}
                top={cloud.top}
                left={cloud.left}
                initial={{ x: 0, y: 0, opacity: 1 }}
                animate={animateProps}
                transition={{ duration: cloudAnimationDuration, ease: 'easeInOut' }}
              >
                <Image src={cloud.src} alt='left cloud' layout='fill' objectFit='contain' priority />
              </CloudElement>
            )
          })}

          {/* --- 右側の雲 --- */}
          {rightClouds.map((cloud, idx) => {
            const isPersistentCloud = cloud.src === '/top-motion/migi-1-kumo.png'
            if (!isPersistentCloud && (phase === 'logo' || phase === 'end')) return null
            let animateProps
            if (isPersistentCloud) {
              animateProps = { x: 80, y: 0, opacity: 1 }
            } else {
              // 放射状に移動（角度をさらに強調）
              const yOffsets = [200, 400, 600]
              animateProps = { x: '100vw', y: yOffsets[idx - 1] || 0, opacity: 0 }
            }
            return (
              <CloudElement
                key={cloud.src}
                width={cloud.width}
                height={cloud.height}
                zIndex={cloud.zIndex}
                top={cloud.top}
                right={cloud.right}
                initial={{ x: 0, y: 0, opacity: 1 }}
                animate={animateProps}
                transition={{ duration: cloudAnimationDuration, ease: 'easeInOut' }}
              >
                <Image src={cloud.src} alt='right cloud' layout='fill' objectFit='contain' priority />
              </CloudElement>
            )
          })}

          {/* --- 中央の雲 --- */}
          {phase === 'clouds' && (
            <CloudElement
              key={centerCloud.src}
              width={centerCloud.width}
              height={centerCloud.height}
              zIndex={centerCloud.zIndex}
              top={centerCloud.top}
              left={centerCloud.left}
              initial={{ x: 0, y: 0, opacity: 1 }}
              animate={{ x: '100vw', y: 0, opacity: 0 }}
              transition={{ duration: cloudAnimationDuration, ease: 'easeInOut', delay: 0.5 }}
            >
              <Image src={centerCloud.src} alt='cloud' layout='fill' objectFit='contain' priority />
            </CloudElement>
          )}

          {/* --- テキストとロゴの表示制御 --- */}
          <ContentCenter>
            <ContentElement
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              key={phase}
            >
              {phase === 'text' && (
                <Image src={textImage.src} width={textImage.width} height={textImage.height} alt='intro text' />
              )}
              {phase === 'logo' && (
                <Image src={logoImage.src} width={logoImage.width} height={logoImage.height} alt='logo' />
              )}
            </ContentElement>
          </ContentCenter>
        </IntroContainer>
      )}
    </AnimatePresence>
  )
}

export default IntroAnimation
