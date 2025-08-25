import { useRef } from 'react'
import Image from 'next/image'
import styled from '@emotion/styled'

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

const VideoElement = styled.video`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 1;
  transition: opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 10;

  @media (max-width: 1024px) {
    height: 100vh;
    object-position: center;
  }

  @media (max-width: 768px) {
    height: 100vh;
    object-position: center;
  }

  @media (max-width: 640px) {
    height: 100vh;
    object-position: center;
  }

  @media (max-width: 480px) {
    object-position: center;
  }

  @media (max-width: 375px) {
    object-position: center;
  }
`

const MuteButton = styled.button`
  position: absolute;
  bottom: 32px;
  right: 32px;
  z-index: 30;
  background: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 24px;
  padding: 8px 16px;
  font-size: 18px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  @media (max-width: 1024px) {
    bottom: 24px;
    right: 24px;
    padding: 7px 14px;
    font-size: 16px;
    border-radius: 22px;
  }

  @media (max-width: 768px) {
    bottom: 16px;
    right: 16px;
    padding: 6px 12px;
    font-size: 14px;
    border-radius: 20px;
  }

  @media (max-width: 640px) {
    bottom: 12px;
    right: 12px;
    padding: 5px 10px;
    font-size: 13px;
    border-radius: 18px;
  }

  @media (max-width: 480px) {
    bottom: 8px;
    right: 8px;
    padding: 4px 8px;
    font-size: 12px;
    border-radius: 16px;
  }

  @media (max-width: 375px) {
    bottom: 6px;
    right: 6px;
    padding: 3px 6px;
    font-size: 11px;
    border-radius: 14px;
  }
`

const LeftCloudContainer = styled.div`
  position: absolute;
  top: ${leftCloud.top}px;
  left: ${leftCloud.left}px;
  width: ${leftCloud.width}px;
  height: ${leftCloud.height}px;
  z-index: ${leftCloud.zIndex};
  pointer-events: none;
  transform: translateX(${leftCloud.x}px);

  @media (max-width: 1024px) {
    display: none;
  }

  @media (max-width: 768px) {
    display: none;
  }

  @media (max-width: 640px) {
    display: none;
  }

  @media (max-width: 480px) {
    display: none;
  }

  @media (max-width: 375px) {
    display: none;
  }
`

const RightCloudContainer = styled.div`
  position: absolute;
  top: ${rightCloud.top}px;
  right: ${rightCloud.right}px;
  width: ${rightCloud.width}px;
  height: ${rightCloud.height}px;
  z-index: ${rightCloud.zIndex};
  pointer-events: none;
  transform: translateX(${rightCloud.x}px);

  @media (max-width: 1024px) {
    display: none;
  }

  @media (max-width: 768px) {
    display: none;
  }

  @media (max-width: 640px) {
    display: none;
  }

  @media (max-width: 480px) {
    display: none;
  }

  @media (max-width: 375px) {
    display: none;
  }
`

interface VideoBackgroundProps {
  muted: boolean
  onToggleMute: () => void
}

const VideoBackground = ({ muted, onToggleMute }: VideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <>
      {/* 動画 */}
      <VideoElement
        ref={videoRef}
        src='/videos/shinmei-mv.mp4'
        autoPlay
        controls={false}
        loop={true}
        muted={muted}
        playsInline
      />
      {/* ミュート切り替えボタン */}
      <MuteButton onClick={onToggleMute} aria-label={muted ? '音声オン' : '音声オフ'}>
        {muted ? '🔇 音声オン' : '🔊 音声オフ'}
      </MuteButton>
      {/* 雲（左下） */}
      <LeftCloudContainer>
        <Image src={leftCloud.src} alt='left cloud' layout='fill' objectFit='contain' priority />
      </LeftCloudContainer>
      {/* 雲（右上） */}
      <RightCloudContainer>
        <Image src={rightCloud.src} alt='right cloud' layout='fill' objectFit='contain' priority />
      </RightCloudContainer>
    </>
  )
}

export default VideoBackground
