import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

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
        cloudAnimationDuration * 1000 * 0.6, // 60%時点でテキスト表示へ遷移
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
      }, 2000)
      return () => clearTimeout(timer)
    }
    return undefined
  }, [phase])

  // ロゴ表示後にendへ遷移
  useEffect(() => {
    if (phase === 'logo') {
      const timer = setTimeout(() => {
        setPhase('end')
      }, 2000)
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
        <motion.div
          key='intro-container'
          style={{
            inset: 0,
            position: 'fixed',
            zIndex: 9999,
            background: `url(${haikeiImage}) center center / cover no-repeat`,
            overflow: 'hidden',
          }}
          exit={{ opacity: 0, transition: { duration: 1.5 } }}
        >
          {/* --- 左側の雲 --- */}
          {leftClouds.map((cloud) => {
            const isPersistentCloud = cloud.src === '/top-motion/hidari-4-kumo.png'
            if ((phase === 'logo' || phase === 'end') && !isPersistentCloud) return null
            return (
              <motion.div
                key={cloud.src}
                style={{ position: 'absolute', ...cloud }}
                initial={{ x: 0, opacity: 1 }}
                animate={{
                  x: isPersistentCloud ? -80 : '-100vw',
                  opacity: isPersistentCloud ? 1 : 0,
                }}
                transition={{ duration: cloudAnimationDuration, ease: 'easeInOut' }}
              >
                <Image src={cloud.src} alt='left cloud' layout='fill' objectFit='contain' priority />
              </motion.div>
            )
          })}

          {/* --- 右側の雲 --- */}
          {rightClouds.map((cloud) => {
            const isPersistentCloud = cloud.src === '/top-motion/migi-1-kumo.png'
            if ((phase === 'logo' || phase === 'end') && !isPersistentCloud) return null
            return (
              <motion.div
                key={cloud.src}
                style={{ position: 'absolute', ...cloud }}
                initial={{ x: 0, opacity: 1 }}
                animate={{
                  x: isPersistentCloud ? 80 : '100vw',
                  opacity: isPersistentCloud ? 1 : 0,
                }}
                transition={{ duration: cloudAnimationDuration, ease: 'easeInOut' }}
              >
                <Image src={cloud.src} alt='right cloud' layout='fill' objectFit='contain' priority />
              </motion.div>
            )
          })}

          {/* --- 中央の雲 --- */}
          {phase === 'clouds' && (
            <motion.div
              key={centerCloud.src}
              style={{ position: 'absolute', ...centerCloud }}
              initial={{ x: 0, opacity: 1 }}
              animate={{ x: '100vw', opacity: 0 }}
              transition={{ duration: cloudAnimationDuration, ease: 'easeInOut', delay: 0.5 }}
            >
              <Image src={centerCloud.src} alt='cloud' layout='fill' objectFit='contain' priority />
            </motion.div>
          )}

          {/* --- テキストとロゴの表示制御 --- */}
          <div
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 2000,
              width: 'auto',
              height: 'auto',
            }}
          >
            <AnimatePresence mode='wait'>
              {/* midasimoji.png の表示 */}
              {phase === 'text' && (
                <motion.div
                  key='text-image'
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 1.5, ease: 'easeInOut' }}
                >
                  <Image src={textImage.src} width={textImage.width} height={textImage.height} alt='intro text' />
                </motion.div>
              )}

              {/* montuki-rogo.png の表示 */}
              {phase === 'logo' && (
                <motion.div
                  key='logo-image'
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                >
                  <Image src={logoImage.src} width={logoImage.width} height={logoImage.height} alt='logo' />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default IntroAnimation
