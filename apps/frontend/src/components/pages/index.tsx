import IntroAnimation from '../IntroAnimation'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

const leftCloud = { src: '/top-motion/hidari-4-kumo.png', width: 900, height: 350, zIndex: 12, top: 480, left: -250 }
const rightCloud = { src: '/top-motion/migi-1-kumo.png', width: 1100, height: 500, zIndex: 12, top: -180, right: -150 }
const logoImage = { src: '/top-motion/montuki-rogo.png', width: 200, height: 300 }

export const Home = () => {
  const [introVisible, setIntroVisible] = useState(true)
  const [crossFadeVisible, setCrossFadeVisible] = useState(false)
  const [mainVisible, setMainVisible] = useState(false)
  const [fade, setFade] = useState(0) // 0:ロゴのみ, 1:動画のみ, 0~1:クロスフェード
  const [muted, setMuted] = useState(true) // 最初はミュート
  const videoRef = useRef<HTMLVideoElement>(null)
  const fadeDuration = 2000 // ms

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
        }}
      >
        <Image src={rightCloud.src} alt='right cloud' layout='fill' objectFit='contain' priority />
      </div>
    </>
  )

  return (
    <>
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
            <section
              style={{
                width: '100vw',
                background: '#e5dbc2',
                borderTop: '4px solid #ede7d7',
                borderBottom: '4px solid #ede7d7',
                padding: '64px 0 40px 0',
                margin: 0,
                minHeight: '380px',
              }}
            >
              <div
                style={{
                  maxWidth: 1100,
                  margin: '0 auto',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  gap: '48px',
                }}
              >
                {/* 左カラム：縦書きお知らせ＋猫（「せ」に手が重なる位置） */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    height: 320,
                    minWidth: 120,
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      writingMode: 'vertical-rl',
                      fontSize: '2.5rem',
                      color: '#7c6b4f',
                      fontWeight: 600,
                      letterSpacing: '0.2em',
                      fontFamily: 'serif',
                      marginBottom: 0,
                      lineHeight: 1.1,
                    }}
                  >
                    お知らせ
                  </div>
                  {/* 猫画像を「せ」に手が重なるように絶対配置 */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '25%',
                      top: '68%',
                      transform: 'translate(-50%, -40%)',
                      width: 70,
                      height: 120,
                      zIndex: 2,
                    }}
                  >
                    <Image
                      src='/neko/neko01.png'
                      alt='猫'
                      width={70}
                      height={120}
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                      priority
                    />
                  </div>
                </div>
                {/* 右カラム：お知らせリスト（ライン区切り） */}
                <div
                  style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                >
                  <div style={{ width: '100%', background: 'none', borderRadius: 0, boxShadow: 'none' }}>
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 16,
                          borderBottom: '1.5px solid #bba77b',
                          padding: '0 0 0 0',
                          minHeight: 56,
                          background: 'none',
                          position: 'relative',
                        }}
                      >
                        <button
                          style={{
                            background: '#8C3A2B',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '8px',
                            padding: '4px 24px',
                            fontSize: '1rem',
                            fontWeight: 500,
                            fontFamily: 'serif',
                            letterSpacing: '0.1em',
                            cursor: 'pointer',
                            minWidth: 80,
                            marginRight: 12,
                          }}
                        >
                          お知らせ
                        </button>
                        <span style={{ color: '#7c6b4f', fontSize: '0.95rem', minWidth: 140 }}>令和7年5月22日</span>
                        <span
                          style={{
                            color: '#7c6b4f',
                            fontSize: '1.05rem',
                            flex: 1,
                            textAlign: 'left',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          360年祭の日程について
                        </span>
                        <span style={{ color: '#7c6b4f', fontSize: '1.5rem', marginLeft: 8 }}>&#8250;</span>
                      </div>
                    ))}
                  </div>
                  {/* お知らせ一覧リンク */}
                  <div style={{ textAlign: 'right', marginTop: 24 }}>
                    <a
                      href='#'
                      style={{
                        color: '#7c6b4f',
                        fontSize: '1rem',
                        textDecoration: 'underline',
                        fontFamily: 'serif',
                        cursor: 'pointer',
                      }}
                    >
                      お知らせ一覧
                    </a>
                  </div>
                </div>
              </div>
            </section>
            {/* --- 御祈祷セクション --- */}
            <section
              style={{
                width: '100vw',
                background: 'url(/top-motion/haikei.png) center center / cover no-repeat',
                padding: '56px 0',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'stretch',
                  maxWidth: 1100,
                  width: '100%',
                  borderRadius: 32,
                  overflow: 'hidden',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
                  background: '#fff',
                  minHeight: 320,
                }}
              >
                {/* 左カラム：背景画像＋gokitou-01画像 */}
                <div
                  style={{
                    flex: 1.6, // 横幅を広げる
                    minWidth: 0,
                    position: 'relative',
                    background: 'url(/backsozai/gokitou-haikei) center center / cover no-repeat',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 450,
                  }}
                >
                  <img
                    src='/backsozai/gokitou-01.png'
                    alt='祈祷イメージ'
                    style={{ width: '100%', height: '100%', objectFit: 'cover', border: 'none', borderRadius: 0 }}
                  />
                </div>
                {/* 右カラム：赤背景＋縦書きテキスト＋猫イラスト＋ボタン */}
                <div
                  style={{
                    flex: 1,
                    minWidth: 0,
                    background: '#8C3A2B',
                    color: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '40px 32px',
                    position: 'relative',
                    minHeight: 320,
                    overflow: 'visible',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'flex-start',
                      width: '100%',
                      justifyContent: 'center',
                      gap: 24,
                    }}
                  >
                    {/* 縦書き「御祈祷」 */}
                    <div
                      style={{
                        writingMode: 'vertical-rl',
                        fontSize: '2.5rem',
                        fontWeight: 600,
                        letterSpacing: '0.2em',
                        fontFamily: 'serif',
                        color: '#fff',
                        lineHeight: 1.1,
                        marginRight: 8,
                      }}
                    >
                      御祈祷
                    </div>
                    {/* 説明文 */}
                    <div
                      style={{
                        fontSize: '1.05rem',
                        fontFamily: 'serif',
                        color: '#fff',
                        lineHeight: 2,
                        maxWidth: 260,
                        marginTop: 8,
                      }}
                    >
                      大館神明社では
                      <br />
                      さまざまな御祈祷に対応しております。
                      <br />
                      日々の感謝や心の平安を求めるご祈祷、
                      <br />
                      どうぞお気軽にお越しください。
                    </div>
                  </div>
                  {/* neko02.pngをgokitou-01と重なるように左側にはみ出すabsolute配置 */}
                  <div
                    style={{ position: 'absolute', right: '350px', bottom: -50, width: 220, height: 260, zIndex: 3 }}
                  >
                    <Image
                      src='/neko/neko02.png'
                      alt='祈祷猫'
                      width={220}
                      height={260}
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                      priority
                    />
                  </div>
                  <button
                    style={{
                      position: 'absolute',
                      right: 24,
                      bottom: 24,
                      background: 'transparent',
                      color: '#fff',
                      border: '1.5px solid #fff',
                      borderRadius: '20px',
                      padding: '10px 32px',
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
            {/* --- お守りセクション --- */}
            <section
              style={{
                width: '100vw',
                background: 'url(/top-motion/haikei.png) center center / cover no-repeat',
                padding: '56px 0',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'stretch',
                  maxWidth: 1100,
                  width: '100%',
                  borderRadius: 32,
                  overflow: 'hidden',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
                  background: '#fff',
                  minHeight: 320,
                }}
              >
                {/* 左カラム：赤背景＋縦書きテキスト＋ボタン */}
                <div
                  style={{
                    flex: 1,
                    minWidth: 0,
                    background: '#8C3A2B',
                    color: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '40px 32px',
                    position: 'relative',
                    minHeight: 320,
                    overflow: 'visible',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'flex-start',
                      width: '100%',
                      justifyContent: 'center',
                      gap: 24,
                    }}
                  >
                    {/* 縦書き「お守り」 */}
                    <div
                      style={{
                        writingMode: 'vertical-rl',
                        fontSize: '2.5rem',
                        fontWeight: 600,
                        letterSpacing: '0.2em',
                        fontFamily: 'serif',
                        color: '#fff',
                        lineHeight: 1.1,
                        marginRight: 8,
                      }}
                    >
                      お守り
                    </div>
                    {/* 説明文 */}
                    <div
                      style={{
                        fontSize: '1.05rem',
                        fontFamily: 'serif',
                        color: '#fff',
                        lineHeight: 2,
                        maxWidth: 260,
                        marginTop: 8,
                      }}
                    >
                      大館神明社では、古くから地域の人々の願いに寄り添い、
                      <br />
                      さまざまなご利益を授けるお守りや授与品をご用意しております。
                    </div>
                  </div>
                  {/* ボタン */}
                  <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 32 }}>
                    <button
                      style={{
                        background: 'transparent',
                        color: '#fff',
                        border: '1.5px solid #fff',
                        borderRadius: '20px',
                        padding: '10px 32px',
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
                {/* 右カラム：背景画像 */}
                <div
                  style={{
                    flex: 1.6,
                    minWidth: 0,
                    position: 'relative',
                    background: 'url(/backsozai/omamori02.png) center center / cover no-repeat',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 420,
                  }}
                ></div>
              </div>
            </section>
          </div>
        </>
      )}
    </>
  )
}
