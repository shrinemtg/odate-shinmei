import Image from 'next/image'

const logoImage = { src: '/top-motion/montuki-rogo.png', width: 200, height: 300 }

interface LogoCrossfadeProps {
  visible: boolean
  fade: number
}

const LogoCrossfade = ({ visible, fade }: LogoCrossfadeProps) => {
  if (!visible) return null

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 9998,
        pointerEvents: 'none',
        background: 'transparent',
      }}
    >
      {/* ロゴ */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 11,
          opacity: 1 - fade,
          transition: 'opacity 1.2s cubic-bezier(0.4,0,0.2,1)',
          pointerEvents: 'none',
          background: 'transparent',
        }}
      >
        <Image src={logoImage.src} width={logoImage.width} height={logoImage.height} alt='logo' />
      </div>
    </div>
  )
}

export default LogoCrossfade
