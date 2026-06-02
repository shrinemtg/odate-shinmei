import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import styled from '@emotion/styled'

const leftCloud = {
  src: '/top-motion/hidari-4-kumo.webp',
  width: 900,
  height: 350,
  zIndex: 12,
  top: 480,
  left: -250,
  x: -80,
}
const rightCloud = {
  src: '/top-motion/migi-1-kumo.webp',
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
  const [videoSrc, setVideoSrc] = useState<string>()

  // 大容量の背景動画(約33MB)の取得を初回ペイント後まで遅延させ、初期表示(LCP)が
  // 動画のダウンロードでブロックされないようにする。読み込み完了まではposter(先頭フレーム)
  // が表示され、動画再生開始時にシームレスに切り替わる（見た目・再生内容は従来と同じ）。
  useEffect(() => {
    const start = () => setVideoSrc('/videos/shinmei-mv.webm')
    const w = window as typeof window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number
      cancelIdleCallback?: (id: number) => void
    }
    if (typeof w.requestIdleCallback === 'function') {
      const id = w.requestIdleCallback(start, { timeout: 2000 })
      return () => w.cancelIdleCallback?.(id)
    }
    const t = setTimeout(start, 300)
    return () => clearTimeout(t)
  }, [])

  // src を後から設定するため、ブラウザによっては autoPlay 属性だけでは再生が始まらない。
  // src 設定後に明示的に play() を呼んで従来どおり自動再生させる（muted なのでブロックされない）。
  useEffect(() => {
    if (videoSrc && videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [videoSrc])

  return (
    <>
      {/* 動画 */}
      <VideoElement
        ref={videoRef}
        src={videoSrc}
        poster='/videos/shinmei-mv-poster.webp'
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
