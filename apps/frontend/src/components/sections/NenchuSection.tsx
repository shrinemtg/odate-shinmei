import Image from 'next/image'

const NenchuSection = () => (
  <section
    style={{
      width: '100vw',
      minHeight: 420,
      background: 'url(/top-motion/haikei.png) center center / cover no-repeat',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      padding: '0',
      margin: '64px 0',
      overflow: 'hidden',
    }}
  >
    {/* 背景画像 */}
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
      }}
    >
      <Image
        src='/backsozai/maturi01.png'
        alt='祭り背景'
        layout='fill'
        objectFit='cover'
        priority
        style={{ filter: 'brightness(0.7)' }}
      />
    </div>
    {/* 前面イラスト（大きく中央下） */}
    <div
      style={{
        position: 'absolute',
        left: '55%',
        bottom: 0,
        transform: 'translateX(-50%)',
        width: 800,
        height: 340,
        zIndex: 10,
        pointerEvents: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
      }}
    >
      <Image
        src='/backsozai/irasut.png'
        alt='イラスト'
        width={800}
        height={340}
        style={{ width: '100%', height: 'auto', display: 'block' }}
        priority
      />
    </div>
    {/* テキストエリア */}
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: '48px 56px 40px 160px',
        margin: 0,
        boxShadow: '0 2px 16px rgba(0,0,0,0.10)',
        minWidth: 340,
        maxWidth: 360,
      }}
    >
      {/* 縦書きタイトル */}
      <div
        style={{
          writingMode: 'vertical-rl',
          fontSize: '2.6rem',
          color: '#fff',
          fontWeight: 700,
          letterSpacing: '0.2em',
          fontFamily: 'serif',
          lineHeight: 1.1,
          marginRight: 32,
          textShadow: '0 2px 8px rgba(0,0,0,0.25)',
        }}
      >
        年中行事
      </div>
      {/* 横テキスト＋ボタン */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minWidth: 220 }}>
        <div
          style={{
            color: '#fff',
            fontSize: '1.08rem',
            fontFamily: 'serif',
            lineHeight: 2,
            marginBottom: 24,
            backgroundColor: ' rgba(0, 0, 0, 0.23)',
            textShadow: '0 2px 8px rgba(0,0,0,0.18)',
            whiteSpace: 'pre-line',
          }}
        >
          大館神明社では、季節ごとに様々な祭事や行事を行っております。
          古くから伝わる伝統行事を通じて、地域の皆様とともに四季を感じ 神様への感謝の気持ちを表します。
        </div>
        <button
          style={{
            background: 'transparent',
            color: '#fff',
            border: '1.5px solid #fff',
            borderRadius: '0',
            padding: '9px 18px',
            fontSize: '1.1rem',
            fontWeight: 400,
            letterSpacing: '0.1em',
            fontFamily: 'serif',
            cursor: 'pointer',
            boxShadow: 'none',
            transition: 'background 0.2s',
            alignSelf: 'flex-start',
            marginLeft: 0,
          }}
        >
          詳しく見る
        </button>
      </div>
    </div>
    {/* レスポンシブ対応: スマホではテキスト中央寄せ */}
    <style jsx>{`
      @media (max-width: 700px) {
        div[style*='position: absolute'][style*='z-index: 20'] {
          left: 50% !important;
          top: 0 !important;
          transform: translateX(-50%) !important;
          border-radius: 0 0 16px 16px !important;
          padding: 32px 16px 24px 16px !important;
          min-width: 0 !important;
          max-width: 95vw !important;
        }
        div[style*='position: absolute'][style*='z-index: 10'] {
          width: 100vw !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
        }
      }
    `}</style>
  </section>
)

export default NenchuSection
