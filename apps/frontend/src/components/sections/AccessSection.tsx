import Image from 'next/image'

const AccessSection = () => (
  <section
    style={{
      width: '100vw',
      minHeight: 600,
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
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        maxWidth: 900,
        margin: '0 auto',
        alignItems: 'flex-start',
        background: 'none',
      }}
    >
      {/* 左：縦書きタイトル */}
      <div
        style={{
          writingMode: 'vertical-rl',
          fontSize: '3rem',
          color: '#7c6b4f',
          fontWeight: 600,
          letterSpacing: '0.2em',
          fontFamily: 'serif',
          lineHeight: 1.5,
          minWidth: 80,
          marginRight: 32,
          textAlign: 'center',
          background: 'none',
        }}
      >
        ご来社案内
      </div>
      {/* 右：地図＋駐車場案内 */}
      <div
        style={{
          flex: 1,
          background: '#e5dbc2',
          border: '2px solid #2196f3',
          borderRadius: 8,
          padding: '32px 24px',
          boxSizing: 'border-box',
          maxWidth: 700,
        }}
      >
        {/* Google Map埋め込み */}
        <div
          style={{
            width: '100%',
            height: 300,
            borderRadius: 4,
            overflow: 'hidden',
            border: '1.5px solid #bba77b',
            marginBottom: 24,
          }}
        >
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3132.991964019918!2d140.551919!3d40.26661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f9ac68734c4ce8d:0xa94575952fc9d7b0!2z5aSn5a2m6ZaA5a2m5a2m!5e1!3m2!1sja!2sjp!4v1680000000000!5m2!1sja!2sjp'
            width='100%'
            height='100%'
            style={{ border: 0 }}
            allowFullScreen={false}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            title='大館神明社 Google Map'
          ></iframe>
        </div>
        {/* 駐車場案内 */}
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: 20 }}>
          <div
            style={{
              width: 200,
              minWidth: 120,
              height: 120,
              borderRadius: 4,
              overflow: 'hidden',
              flexShrink: 0,
              border: '1.5px solid #bba77b',
              background: '#fff',
            }}
          >
            <Image
              src='/backsozai/p.png'
              alt='駐車場'
              width={200}
              height={120}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              priority
            />
          </div>
          <div
            style={{
              color: '#7c6b4f',
              fontSize: '1.1rem',
              fontFamily: 'serif',
              lineHeight: 2,
              marginLeft: 8,
              marginTop: 8,
            }}
          >
            <div style={{ fontWeight: 600, fontSize: '1.15rem', marginBottom: 4 }}>お車でお越しの際</div>
            神社を正面に右に曲がり境内に沿って進むと駐車場がございます。
            <br />
            コチラの駐車場をお使いください
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default AccessSection
