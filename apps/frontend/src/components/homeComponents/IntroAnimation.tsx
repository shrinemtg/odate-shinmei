import React, { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import styled from '@emotion/styled'

// 雲や画像のデータ
const leftClouds = [
  { src: '/top-motion/hidari-1-kumo.webp', width: 900, height: 400, zIndex: 10, top: -100, left: -150 },
  { src: '/top-motion/hidari-2-kumo.webp', width: 500, height: 350, zIndex: 11, top: 150, left: -150 },
  { src: '/top-motion/hidari-3-kumo.webp', width: 850, height: 350, zIndex: 7, top: 300, left: -150 },
  // ホーム画面(VideoBackground)の左下の雲と終了位置を揃える（left:-330 + x:-80）
  { src: '/top-motion/hidari-4-kumo.webp', width: 900, height: 350, zIndex: 6, top: 480, left: -330 },
]
const centerCloud = { src: '/top-motion/tyuuou-2-kumo.webp', width: 800, height: 350, zIndex: 9, top: 100, left: 200 }
const rightClouds = [
  // ホーム画面(VideoBackground)の右上の雲とサイズ・終了位置を揃える（990×450, right:-150 + x:80）
  { src: '/top-motion/migi-1-kumo.webp', width: 990, height: 450, zIndex: 8, top: -180, right: -150 },
  { src: '/top-motion/migi-2-kumo.webp', width: 800, height: 500, zIndex: 5, top: 100, right: -200 },
  { src: '/top-motion/migi-3-kumo.webp', width: 1300, height: 500, zIndex: 4, top: 300, right: -300 },
  { src: '/top-motion/migi-4-kumo.webp', width: 1300, height: 600, zIndex: 3, top: 500, right: -350 },
]
const haikeiImage = '/top-motion/haikei.webp'
// 画像の実寸は 820×721（ほぼ正方形）。比率を保つため幅200に対し高さは約176に。
// 以前は 200×300 を指定しており縦に引き伸ばされて見えていた。
const logoImage = { src: '/top-motion/montuki-rogo.webp', width: 200, height: 176 }
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
  /* 開始時のコマ落ち防止：最初の描画から合成レイヤー化しておく */
  will-change: transform;
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

// F. ごく薄い周辺減光（ビネット）。文字・ロゴ表示中に画面端をほんのり（温かみのある茶系で）
// 暗くして視線を中央へ集める。雲(zIndex〜12)より上、文字・ロゴ(ContentCenter z2000)より下。
const Vignette = styled(motion.div)`
  position: absolute;
  inset: 0;
  z-index: 1000;
  pointer-events: none;
  background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 48%, rgba(40, 30, 15, 0.22) 100%);
`

// D. 控えめなスキップ。急ぐ人だけが押せる位置・装飾にとどめ、デフォルト体験は変えない。
const SkipButton = styled.button`
  position: fixed;
  bottom: 28px;
  right: 32px;
  z-index: 2100;
  background: rgba(255, 255, 255, 0.55);
  color: var(--color-oud, #7c6b4f);
  border: 1px solid rgba(124, 107, 79, 0.35);
  border-radius: 999px;
  padding: 6px 16px;
  font-size: 0.85rem;
  font-family: serif;
  letter-spacing: 0.12em;
  cursor: pointer;
  backdrop-filter: blur(2px);
  transition:
    opacity 0.3s,
    background 0.3s;
  opacity: 0.7;

  &:hover,
  &:focus-visible {
    opacity: 1;
    background: rgba(255, 255, 255, 0.8);
  }

  @media (max-width: 480px) {
    bottom: 18px;
    right: 16px;
    padding: 5px 12px;
    font-size: 0.78rem;
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

  // C. OSの「視差効果を減らす(prefers-reduced-motion)」設定を尊重。ONなら雲の大きな動きを
  // 抑え、各カットを短く静かに見せる（通常ユーザーの見た目・尺は不変）。
  const reduceMotion = !!useReducedMotion()

  // 動きの尺・距離をモーション設定に応じて切り替える
  const cloudAnimationDuration = reduceMotion ? 1.0 : 8
  const textHold = reduceMotion ? 1000 : 3300
  const logoHold = reduceMotion ? 1000 : 2200
  const contentDuration = reduceMotion ? 0.5 : 2.0
  const exitDuration = reduceMotion ? 0.6 : 1.8
  const contentEase: number[] | string = reduceMotion ? 'easeOut' : [0.22, 1, 0.36, 1]
  // 雲は元の自然な動き（easeInOut）を維持する。出だしの軽いカクつきはイージングではなく
  // 描画負荷の問題なので、CloudElement の will-change（GPUレイヤー化）側で対処している。
  const cloudEase: number[] | string = reduceMotion ? 'easeOut' : 'easeInOut'

  // イントロ表示中は背後のホームをスクロールさせない（フェードアウト開始でロック解除）
  useEffect(() => {
    if (typeof document === 'undefined') return undefined
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  // 終了処理は「ロゴ保持満了」と「スキップ」の両方から呼ばれるため一本化し、二重実行を防ぐ。
  // 和紙背景＋ロゴごと一体でフェードアウト（exit）させ、背後のホームを露出させる。
  const finishedRef = useRef(false)
  const finishIntro = useCallback(() => {
    if (finishedRef.current) return
    finishedRef.current = true
    setIsIntroVisible(false)
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'auto'
    }
    if (onIntroEnd) onIntroEnd()
  }, [onIntroEnd])

  // 雲アニメーション終了後にテキスト表示へ遷移
  useEffect(() => {
    if (phase === 'clouds') {
      const timer = setTimeout(
        () => {
          setPhase('text')
        },
        cloudAnimationDuration * 1000 * 0.5, // 中盤でテキスト表示へ遷移
      )
      return () => clearTimeout(timer)
    }
    return undefined
  }, [phase, cloudAnimationDuration])

  // テキスト表示後にロゴへ遷移（厳かにゆっくり保持）
  useEffect(() => {
    if (phase === 'text') {
      const timer = setTimeout(() => {
        setPhase('logo')
      }, textHold)
      return () => clearTimeout(timer)
    }
    return undefined
  }, [phase, textHold])

  // ロゴ表示後にendへ遷移（保持はやや短めにして、フェードアウトで滑らかにホームへ繋ぐ）
  useEffect(() => {
    if (phase === 'logo') {
      const timer = setTimeout(() => {
        setPhase('end')
      }, logoHold)
      return () => clearTimeout(timer)
    }
    return undefined
  }, [phase, logoHold])

  // endになったらフェードアウト開始（finishIntro 経由で onIntroEnd を呼ぶ）
  useEffect(() => {
    if (phase === 'end') finishIntro()
  }, [phase, finishIntro])

  return (
    <AnimatePresence onExitComplete={onIntroExited}>
      {isIntroVisible && (
        <IntroContainer
          key='intro-container'
          className='home-intro-overlay'
          exit={{ opacity: 0, transition: { duration: exitDuration, ease: 'easeInOut' } }}
        >
          {/* --- 左側の雲 --- */}
          {leftClouds.map((cloud, idx) => {
            const isPersistentCloud = cloud.src === '/top-motion/hidari-4-kumo.webp'
            if (!isPersistentCloud && (phase === 'logo' || phase === 'end')) return null
            // persistentな雲もinitial/animateで動きをつける
            let animateProps
            if (isPersistentCloud) {
              animateProps = { x: -80, y: 0, opacity: 1 }
            } else if (reduceMotion) {
              // C. モーション軽減時は大きな移動をやめ、静かにフェードのみ
              animateProps = { opacity: 0 }
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
                transition={{ duration: cloudAnimationDuration, ease: cloudEase }}
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
            } else if (reduceMotion) {
              // C. モーション軽減時は大きな移動をやめ、静かにフェードのみ
              animateProps = { opacity: 0 }
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
                transition={{ duration: cloudAnimationDuration, ease: cloudEase }}
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
              animate={reduceMotion ? { opacity: 0 } : { x: '100vw', y: 0, opacity: 0 }}
              transition={{ duration: cloudAnimationDuration, ease: cloudEase, delay: reduceMotion ? 0 : 0.5 }}
            >
              <Image src={centerCloud.src} alt='cloud' layout='fill' objectFit='contain' priority />
            </CloudElement>
          )}

          {/* F. 周辺減光（文字・ロゴ表示中のみ。雲が引けてから静かに効かせる） */}
          {phase !== 'clouds' && (
            <Vignette
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: reduceMotion ? 0.3 : 1.6, ease: 'easeOut' }}
            />
          )}

          {/* --- テキストとロゴの表示制御 --- */}
          {/* end でもロゴを描画し続け、IntroContainer の exit フェードで和紙背景と一体で
              ふわっと消す。key は logo/end で同一('logo')にして、end への遷移で entrance
              アニメーション（再フェードイン）が再発火しないようにする。 */}
          {/* B. opacity+scale に微かな上方向ドリフト(y:12px→0)を足し、香煙が立ち上るような所作に。
              E. ロゴはさらに極僅かにスケールの余韻(→1.03)を残して"生きた"佇まいに。 */}
          <ContentCenter>
            <ContentElement
              initial={{ opacity: 0, scale: 0.8, y: reduceMotion ? 0 : 12 }}
              animate={{
                opacity: 1,
                scale: (phase === 'logo' || phase === 'end') && !reduceMotion ? 1.03 : 1,
                y: 0,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: contentDuration, ease: contentEase }}
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

          {/* D. 控えめなスキップ（急ぐ人向け。押すと和紙背景ごとフェードアウトしてホームへ） */}
          <SkipButton type='button' onClick={finishIntro} aria-label='イントロをスキップしてホームへ'>
            スキップ ›
          </SkipButton>
        </IntroContainer>
      )}
    </AnimatePresence>
  )
}

export default IntroAnimation
