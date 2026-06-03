import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import styled from '@emotion/styled'

// 雲や画像のデータ
const leftClouds = [
  { src: '/top-motion/hidari-1-kumo.webp', width: 900, height: 400, zIndex: 10, top: -100, left: -150 },
  { src: '/top-motion/hidari-2-kumo.webp', width: 500, height: 350, zIndex: 11, top: 150, left: -150 },
  { src: '/top-motion/hidari-3-kumo.webp', width: 850, height: 350, zIndex: 7, top: 300, left: -150 },
  { src: '/top-motion/hidari-4-kumo.webp', width: 900, height: 350, zIndex: 6, top: 480, left: -250 },
]
const centerCloud = { src: '/top-motion/tyuuou-2-kumo.webp', width: 800, height: 350, zIndex: 9, top: 100, left: 200 }
const rightClouds = [
  { src: '/top-motion/migi-1-kumo.webp', width: 1100, height: 500, zIndex: 8, top: -180, right: -150 },
  { src: '/top-motion/migi-2-kumo.webp', width: 800, height: 500, zIndex: 5, top: 100, right: -200 },
  { src: '/top-motion/migi-3-kumo.webp', width: 1300, height: 500, zIndex: 4, top: 300, right: -300 },
  { src: '/top-motion/migi-4-kumo.webp', width: 1300, height: 600, zIndex: 3, top: 500, right: -350 },
]
const haikeiImage = '/top-motion/haikei.webp'
const logoImage = { src: '/top-motion/montuki-rogo.webp', width: 200, height: 300 }
const textImage = { src: '/top-motion/midasimoji.webp', width: 80, height: 400 }

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

// 出現フェード（opacity + scale 0.8→1）は framer-motion が inline transform で制御するため、
// CSS の transform はここでは指定しない（指定しても上書きされる）。サイズ調整は下の
// 静的ラッパー ContentScale 側で行い、framer の transform と入れ子で掛け合わせる。
const ContentElement = styled(motion.div)``

// 見出し文字・紋付ロゴを少し小さく（各ブレークポイントの従来比 約0.9倍）。
// 上品で見やすい余白を持たせる。motion 配下の静的 div なので transform が上書きされない。
const ContentScale = styled.div`
  transform: scale(0.9);

  @media (max-width: 768px) {
    transform: scale(0.72);
  }

  @media (max-width: 480px) {
    transform: scale(0.54);
  }
`

type AnimationPhase = 'clouds' | 'text' | 'logo' | 'end'

interface IntroAnimationProps {
  // ロゴ保持が終わりフェードアウトが始まるタイミング（背後のホームを露出させ始める）
  onIntroEnd?: () => void
  // フェードアウトが完全に終わったタイミング（親はここで DOM から取り除く）
  onIntroExited?: () => void
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onIntroEnd, onIntroExited }) => {
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

  // テキスト表示後にロゴへ遷移（厳かにゆっくり保持）
  useEffect(() => {
    if (phase === 'text') {
      const timer = setTimeout(() => {
        setPhase('logo')
      }, 3300)
      return () => clearTimeout(timer)
    }
    return undefined
  }, [phase])

  // ロゴ表示後にendへ遷移（保持はやや短めにして、フェードアウトで滑らかにホームへ繋ぐ）
  useEffect(() => {
    if (phase === 'logo') {
      const timer = setTimeout(() => {
        setPhase('end')
      }, 2200)
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
    <AnimatePresence onExitComplete={onIntroExited}>
      {isIntroVisible && (
        <IntroContainer
          key='intro-container'
          className='home-intro-overlay'
          exit={{ opacity: 0, transition: { duration: 1.8, ease: 'easeInOut' } }}
        >
          {/* --- 左側の雲 --- */}
          {leftClouds.map((cloud, idx) => {
            const isPersistentCloud = cloud.src === '/top-motion/hidari-4-kumo.webp'
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
            const isPersistentCloud = cloud.src === '/top-motion/migi-1-kumo.webp'
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
          {/* end でもロゴを描画し続け、IntroContainer の exit フェードで和紙背景と一体で
              ふわっと消す。key は logo/end で同一('logo')にして、end への遷移で entrance
              アニメーション（再フェードイン）が再発火しないようにする。 */}
          <ContentCenter>
            <ContentElement
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2.0, ease: [0.22, 1, 0.36, 1] }}
              key={phase === 'end' ? 'logo' : phase}
            >
              <ContentScale>
                {phase === 'text' && (
                  <Image src={textImage.src} width={textImage.width} height={textImage.height} alt='intro text' />
                )}
                {(phase === 'logo' || phase === 'end') && (
                  <Image src={logoImage.src} width={logoImage.width} height={logoImage.height} alt='logo' />
                )}
              </ContentScale>
            </ContentElement>
          </ContentCenter>
        </IntroContainer>
      )}
    </AnimatePresence>
  )
}

export default IntroAnimation
