import Image from 'next/image'

const GokitouOmamoriSection = () => (
  <>
    <div style={{ margin: '64px 0' }}>
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
            <div style={{ position: 'absolute', right: '350px', bottom: -50, width: 220, height: 260, zIndex: 3 }}>
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
)

export default GokitouOmamoriSection
