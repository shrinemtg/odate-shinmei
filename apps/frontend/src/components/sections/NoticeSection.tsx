import Image from 'next/image'

const NoticeSection = () => (
  <section
    style={{
      width: '100vw',
      background: '#e5dbc2',
      borderTop: '4px solid #ede7d7',
      borderBottom: '4px solid #ede7d7',
      padding: '64px 0 0 0',
      margin: '64px 0',
      minHeight: '320px',
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
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
)

export default NoticeSection
