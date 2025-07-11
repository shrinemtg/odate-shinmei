import IntroAnimation from '../sections/IntroAnimation'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import NoticeSection from '../sections/NoticeSection'
import GokitouOmamoriSection from '../sections/GokitouOmamoriSection'
import NenchuSection from '../sections/NenchuSection'
import AccessSection from '../sections/AccessSection'
import ContactSection from '../sections/ContactSection'
import FooterSection from '../sections/FooterSection'
import MenuBar from '../MenuBar'

const leftCloud = {
  src: '/top-motion/hidari-4-kumo.png',
  width: 900,
  height: 350,
  zIndex: 12,
  top: 480,
  left: -250,
  x: -80,
}
const rightCloud = {
  src: '/top-motion/migi-1-kumo.png',
  width: 1100,
  height: 500,
  zIndex: 12,
  top: -180,
  right: -150,
  x: 80,
}
const logoImage = { src: '/top-motion/montuki-rogo.png', width: 200, height: 300 }

export const Home = () => {
  const [introVisible, setIntroVisible] = useState(true)
  const [crossFadeVisible, setCrossFadeVisible] = useState(false)
  const [mainVisible, setMainVisible] = useState(false)
  const [fade, setFade] = useState(0) // 0:ロゴのみ, 1:動画のみ, 0~1:クロスフェード
  const [muted, setMuted] = useState(true) // 最初はミュート
  const videoRef = useRef<HTMLVideoElement>(null)
  const fadeDuration = 2000 // ms
  const [showMenuBar, setShowMenuBar] = useState(false)

  // IntroAnimation終了後にクロスフェード開始
  const handleIntroEnd = () => {
    setIntroVisible(false)
    setCrossFadeVisible(true)
    setFade(0)
    // クロスフェードアニメーション
    let start: number | null = null
    const animate = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / fadeDuration, 1)
      setFade(progress)
      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setTimeout(() => {
          setCrossFadeVisible(false)
          setMainVisible(true)
        }, 100)
      }
    }
    requestAnimationFrame(animate)
  }

  // スクロールでメイン内容を表示
  useEffect(() => {
    if (!crossFadeVisible && !mainVisible) return
    const handleScroll = () => {
      setCrossFadeVisible(false)
      setMainVisible(true)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [crossFadeVisible, mainVisible])

  // ミュート切り替え
  const handleToggleMute = () => {
    setMuted((prev) => !prev)
    if (videoRef.current) {
      videoRef.current.muted = !muted
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      // 100vhを超えたらMenuBarを表示
      if (window.scrollY > window.innerHeight - 10) {
        setShowMenuBar(true)
      } else {
        setShowMenuBar(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    // 初期表示時も判定
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 動画・雲の共通表示部分
  const VideoAndClouds = (
    <>
      {/* 動画 */}
      <video
        ref={videoRef}
        src='/videos/shinmei-mv.mp4'
        autoPlay
        controls={false}
        loop={true}
        muted={muted}
        playsInline
        style={{
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          display: 'block',
          position: 'absolute',
          top: 0,
          left: 0,
          opacity: crossFadeVisible ? fade : 1,
          transition: 'opacity 0.2s linear',
          zIndex: 10,
        }}
      />
      {/* ミュート切り替えボタン */}
      <button
        onClick={handleToggleMute}
        style={{
          position: 'absolute',
          bottom: 32,
          right: 32,
          zIndex: 30,
          background: 'rgba(255,255,255,0.8)',
          border: 'none',
          borderRadius: 24,
          padding: '8px 16px',
          fontSize: 18,
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        }}
        aria-label={muted ? '音声オン' : '音声オフ'}
      >
        {muted ? '🔇 音声オン' : '🔊 音声オフ'}
      </button>
      {/* 雲（左下） */}
      <div
        style={{
          position: 'absolute',
          top: leftCloud.top,
          left: leftCloud.left,
          width: leftCloud.width,
          height: leftCloud.height,
          zIndex: leftCloud.zIndex,
          pointerEvents: 'none',
          transform: `translateX(${leftCloud.x}px)`,
        }}
      >
        <Image src={leftCloud.src} alt='left cloud' layout='fill' objectFit='contain' priority />
      </div>
      {/* 雲（右上） */}
      <div
        style={{
          position: 'absolute',
          top: rightCloud.top,
          right: rightCloud.right,
          width: rightCloud.width,
          height: rightCloud.height,
          zIndex: rightCloud.zIndex,
          pointerEvents: 'none',
          transform: `translateX(${rightCloud.x}px)`,
        }}
      >
        <Image src={rightCloud.src} alt='right cloud' layout='fill' objectFit='contain' priority />
      </div>
    </>
  )

  return (
    <>
      {showMenuBar && <MenuBar />}
      {/* イントロアニメーション */}
      {introVisible && <IntroAnimation onIntroEnd={handleIntroEnd} />}
      {/* ロゴと動画のクロスフェード＋雲 */}
      {crossFadeVisible && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 9998,
            background: 'black',
            pointerEvents: 'none',
          }}
        >
          {VideoAndClouds}
          {/* ロゴ */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 11,
              opacity: 1 - fade,
              transition: 'opacity 0.2s linear',
              pointerEvents: 'none',
            }}
          >
            <Image src={logoImage.src} width={logoImage.width} height={logoImage.height} alt='logo' />
          </div>
        </div>
      )}
      {/* メイン内容＋動画＋雲 */}
      {mainVisible && (
        <>
          {/* 動画＋雲＋和紙セクションをラップする親div */}
          <div style={{ position: 'relative', width: '100vw', minHeight: '160vh', overflow: 'visible' }}>
            {/* 動画＋雲の全画面セクション */}
            <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', zIndex: 10 }}>
              {VideoAndClouds}
              <div style={{ position: 'relative', zIndex: 20 }}>
                {/* ここにHeroSectionや他のメインコンテンツを配置 */}
              </div>
            </div>
            {/* 雲（hidari-4-kumo）を動画と和紙セクションの境界にまたがるように絶対配置 */}
            <div
              style={{
                position: 'absolute',
                left: 3,
                top: 'calc(100vh - 150px)', // 境界にまたがるように調整
                width: 600,
                height: 320,
                zIndex: 30,
                pointerEvents: 'none',
              }}
            >
              <Image
                src='/top-motion/hidari-4-kumo.png'
                alt='cloud border'
                layout='fill'
                objectFit='contain'
                priority
              />
            </div>
            {/* 縦書きテキスト＋oyashiro.png画像＋説明文 */}
            <section
              style={{
                position: 'relative',
                width: '100vw',
                minHeight: '60vh',
                background: 'url(/top-motion/haikei.png) center center / cover no-repeat',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                zIndex: 5,
              }}
            >
              {/* 雲装飾（右下） */}
              <div
                style={{
                  position: 'absolute',
                  right: 0,
                  bottom: 0,
                  width: 220,
                  height: 120,
                  zIndex: 1,
                  opacity: 0.8,
                }}
              >
                <Image src='/top-motion/migi-1-kumo.png' alt='cloud right' layout='fill' objectFit='contain' priority />
              </div>
              {/* 2カラム縦書きテキスト＋画像＋説明文 */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  padding: '32px 0',
                  marginTop: '64px', // 動画とテキストの間に余白を追加
                }}
              >
                {/* 2カラム縦書きテキスト */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    marginBottom: '56px', // テキストと画像の間に余白
                  }}
                >
                  {/* 大館神明社へ（左カラム、上マージンで「大」が「う」と揃うように調整） */}
                  <div
                    style={{
                      writingMode: 'vertical-rl',
                      textAlign: 'center',
                      fontSize: '2rem',
                      color: '#7c6b4f',
                      fontWeight: 500,
                      letterSpacing: '0.2em',
                      fontFamily: 'serif',
                      lineHeight: 1.8,
                      marginTop: '1.8em',
                    }}
                  >
                    大館神明社へ
                  </div>
                  {/* ようこそ（右カラム） */}
                  <div
                    style={{
                      writingMode: 'vertical-rl',
                      textAlign: 'center',
                      fontSize: '2rem',
                      color: '#7c6b4f',
                      fontWeight: 500,
                      letterSpacing: '0.2em',
                      fontFamily: 'serif',
                      lineHeight: 1.8,
                    }}
                  >
                    ようこそ
                  </div>
                </div>
                {/* oyashiro.png画像 */}
                <div style={{ margin: '0 0 56px 0', width: 'min(90vw, 520px)', maxWidth: 520, textAlign: 'center' }}>
                  <Image
                    src='/senga/oyashiro.png'
                    alt='大館神明社イラスト'
                    width={520}
                    height={260}
                    style={{ width: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
                    priority
                  />
                </div>
                {/* 説明テキスト＋ボタン */}
                <div
                  style={{
                    maxWidth: 520,
                    color: '#7c6b4f',
                    fontSize: '1rem',
                    textAlign: 'center',
                    lineHeight: 2,
                    margin: '0 auto',
                    paddingBottom: '48px',
                  }}
                >
                  <p style={{ margin: 0 }}>
                    大館神明社は、秋田県大館市に鎮座する神社です。
                    <br />
                    初詣や七五三、厄除祈願、合格祈願など、人生の節目ごとに皆様の願いに寄り添い、
                    <br />
                    年間を通して様々な祭事や行事を行い
                    <br />
                    地域の文化と交流の中心として親しまれてきました。
                  </p>
                  {/* 詳しく見るボタン */}
                  <button
                    style={{
                      marginTop: '32px',
                      background: '#8C3A2B',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '20px',
                      padding: '8px 20px',
                      fontSize: '1.1rem',
                      fontWeight: 400,
                      letterSpacing: '0.1em',
                      fontFamily: 'serif',
                      cursor: 'pointer',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                      transition: 'background 0.2s',
                    }}
                  >
                    詳しく見る
                  </button>
                </div>
              </div>
            </section>
            {/* --- お知らせセクション --- */}
            <NoticeSection />
            {/* --- 御祈祷・お守りセクション --- */}
            <GokitouOmamoriSection />
            {/* --- 年中行事セクション --- */}
            <NenchuSection />
            {/* --- ご来社案内セクション --- */}
            <AccessSection />
            {/* --- お問い合わせセクション --- */}
            <ContactSection />
            <FooterSection />
          </div>
        </>
      )}
    </>
  )
}
