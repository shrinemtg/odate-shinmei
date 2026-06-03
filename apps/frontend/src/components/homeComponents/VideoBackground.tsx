import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import styled from '@emotion/styled'

const leftCloud = {
  src: '/top-motion/hidari-4-kumo.webp',
  width: 900,
  height: 350,
  zIndex: 12,
  top: 480,
  left: -330, // 少し左へ（-250 → -300 → -330）
  x: -80,
}
const rightCloud = {
  src: '/top-motion/migi-1-kumo.webp',
  width: 990, // ちょっとだけ小さく（1100 → 990, 約0.9倍）
  height: 450, // 同上（500 → 450）
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
  // 再生を開始してよいか。イントロ表示中は false にしておき、ホームへの切り替わり開始時に
  // true にすることで、動画が「冒頭(0秒)のきれいな場面」から動き出すようにする。
  started?: boolean
}

const VideoBackground = ({ muted, onToggleMute, started = true }: VideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoSrc, setVideoSrc] = useState<string>()

  // 大容量の背景動画(約33MB)の取得を初回ペイント後まで遅延させ、初期表示(LCP)が
  // 動画のダウンロードでブロックされないようにする。読み込み完了まではposter(先頭フレーム)
  // が表示される。読み込みは先行して行うが、再生は started=true になるまで待つ。
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

  // イントロ再生中(started=false)は裏側で動画を進ませない。ホームへの切り替わり開始
  // (started=true)のタイミングで、必ず冒頭(0秒)へ巻き戻してから再生する。これにより
  // イントロが溶けると同時に動画が頭から動き出し、中途半端な場面が一瞬見える問題を防ぐ。
  // muted なので自動再生はブロックされない。
  useEffect(() => {
    if (started && videoSrc && videoRef.current) {
      const v = videoRef.current
      try {
        v.currentTime = 0
      } catch (_error) {
        // currentTime をまだ設定できない場合は無視（再生時に先頭から始まる）
      }
      v.play().catch(() => {})
    }
  }, [started, videoSrc])

  // A. ミュート⇔アンミュートの制御。アンミュート時は音量を0→1で約1秒かけて上げ、鈴の音が
  // 唐突でなく静かに立ち上るようにする。muted は React にバインドせずここで明示制御する
  // （バインドすると音量フェード前に一瞬フル音量になり得るため）。
  useEffect(() => {
    const v = videoRef.current
    if (!v) return undefined
    if (muted) {
      v.muted = true
      return undefined
    }
    v.muted = false
    v.volume = 0
    let raf = 0
    let startT: number | null = null
    const fadeDuration = 1000
    const step = (t: number) => {
      if (startT === null) startT = t
      const progress = Math.min((t - startT) / fadeDuration, 1)
      v.volume = progress
      if (progress < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [muted])

  return (
    <>
      {/* 動画（再生開始は started 制御。autoPlay は使わない。muted は上の effect で明示制御） */}
      <VideoElement
        ref={videoRef}
        src={videoSrc}
        poster='/videos/shinmei-mv-poster.webp'
        controls={false}
        loop={true}
        playsInline
      />
      {/* ミュート切り替えボタン（初回操作の自動アンミュートと二重処理しないよう目印を付与） */}
      <MuteButton data-mute-toggle onClick={onToggleMute} aria-label={muted ? '音声オン' : '音声オフ'}>
        {muted ? '🔇 音声オン' : '🔊 音声オフ'}
      </MuteButton>
      {/* 雲（左下） */}
      <LeftCloudContainer>
        <Image src={leftCloud.src} alt='left cloud' layout='fill' objectFit='contain' />
      </LeftCloudContainer>
      {/* 雲（右上） */}
      <RightCloudContainer>
        <Image src={rightCloud.src} alt='right cloud' layout='fill' objectFit='contain' />
      </RightCloudContainer>
    </>
  )
}

export default VideoBackground
