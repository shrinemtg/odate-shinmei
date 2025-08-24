import { useRef } from 'react'
import Image from 'next/image'

const leftCloud = {
  src: '/top-motion/hidari-4-kumo.png',
  width: 900,
  height: 350,
  zIndex: 12,
  top: 480,
  left: -250,
  x: -80,
}
const rightCloud = {
  src: '/top-motion/migi-1-kumo.png',
  width: 1100,
  height: 500,
  zIndex: 12,
  top: -180,
  right: -150,
  x: 80,
}

interface VideoBackgroundProps {
  muted: boolean
  onToggleMute: () => void
}

const VideoBackground = ({ muted, onToggleMute }: VideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
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
          opacity: 1,
          transition: 'opacity 1.2s cubic-bezier(0.4,0,0.2,1)',
          zIndex: 10,
        }}
      />
      {/* ミュート切り替えボタン */}
      <button
        onClick={onToggleMute}
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
          transform: `translateX(${leftCloud.x}px)`,
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
          transform: `translateX(${rightCloud.x}px)`,
        }}
      >
        <Image src={rightCloud.src} alt='right cloud' layout='fill' objectFit='contain' priority />
      </div>
    </>
  )
}

export default VideoBackground
