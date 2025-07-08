import React from 'react'

const HeroSection: React.FC = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        marginTop: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '40vh',
        background: 'rgba(255,255,255,0.7)',
      }}
    >
      <h2
        style={{
          fontSize: '2.5rem',
          color: '#7c6b4f',
          letterSpacing: '0.2em',
          margin: '60px 0 0 0',
          fontWeight: 600,
          textAlign: 'center',
        }}
      >
        ようこそ
        <br />
        大館神明社へ
      </h2>
    </div>
  )
}

export default HeroSection
