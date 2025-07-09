// import React from 'react'

const ContactSection = () => (
  <div
    style={{
      width: '100%',
      maxWidth: 520,
      margin: '64px auto',
      borderRadius: 0,
      boxShadow: 'none',
      padding: '0',
      textAlign: 'center',
      fontFamily: 'serif',
      color: '#7c6b4f',
    }}
  >
    <div style={{ fontSize: '1.7rem', fontWeight: 500, marginBottom: 18, letterSpacing: '0.08em' }}>大館神明社</div>
    <div style={{ fontSize: '1.08rem', marginBottom: 8 }}>
      御用の際は、お気軽にご連絡ください。
      <br />
      営業時間 午前9時～午後18時
    </div>
    <a
      href='#contact'
      style={{
        display: 'inline-block',
        background: '#8C3A2B',
        color: '#fff',
        border: 'none',
        borderRadius: 20,
        padding: '12px 36px',
        fontSize: '1.25rem',
        fontWeight: 500,
        letterSpacing: '0.1em',
        fontFamily: 'serif',
        margin: '18px 0 18px 0',
        textDecoration: 'none',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        transition: 'background 0.2s',
      }}
    >
      お問い合わせフォーム
    </a>
    <div style={{ marginTop: 12, fontSize: '1.08rem', lineHeight: 2 }}>
      <span style={{ fontSize: '1.2rem', marginRight: 6 }}>☎</span> 0816-42-0846
      <br />
      〒017-0867
      <br />
      秋田県大館市中神明町1-5
    </div>
  </div>
)

export default ContactSection
