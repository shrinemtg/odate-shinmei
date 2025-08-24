import Image from 'next/image'

const HeroContent = () => {
  return (
    <div style={{ position: 'relative', width: '100vw', minHeight: '160vh', overflow: 'visible' }}>
      {/* 動画＋雲の全画面セクション */}
      <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', zIndex: 10 }}>
        <div style={{ position: 'relative', zIndex: 20 }}>{/* ここにHeroSectionや他のメインコンテンツを配置 */}</div>
      </div>
      {/* 雲（hidari-4-kumo）を動画と和紙セクションの境界にまたがるように絶対配置 */}
      <div
        style={{
          position: 'absolute',
          left: -250,
          top: 480,
          width: 900,
          height: 350,
          zIndex: 5,
          pointerEvents: 'none',
        }}
      >
        <Image src='/top-motion/hidari-4-kumo.png' alt='cloud border' layout='fill' objectFit='contain' priority />
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
            marginTop: '64px',
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
              marginBottom: '56px',
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
    </div>
  )
}

export default HeroContent
