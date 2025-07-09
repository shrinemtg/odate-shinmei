import Image from 'next/image'

const FooterSection = () => (
  <footer
    style={{
      width: '100vw',
      background: '#dbcead',
      position: 'relative',
      minHeight: 120,
      padding: '0',
      margin: 0,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {/* 左下の雲イラスト */}
    <div
      style={{
        position: 'absolute',
        left: -160,
        bottom: 0,
        width: 480,
        height: 180,
        zIndex: 1,
        pointerEvents: 'none',
      }}
    >
      <Image
        src='/top-motion/footer-kumo.png'
        alt='雲'
        width={420}
        height={240}
        style={{ width: '100%', height: 'auto', display: 'block' }}
        priority
      />
    </div>
    {/* ロゴ・神社名・英語表記 */}
    <div
      style={{
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '38px 0 28px 0',
      }}
    >
      <Image
        src='/top-motion/montuki-rogo.png'
        alt='神社ロゴ'
        width={150}
        height={150}
        style={{ marginBottom: 8, filter: 'brightness(0) invert(1)' }}
        priority
      />
    </div>
  </footer>
)

export default FooterSection
