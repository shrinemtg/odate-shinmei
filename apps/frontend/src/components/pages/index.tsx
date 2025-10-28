import IntroAnimation from '../homeComponents/IntroAnimation'
import { useState, useEffect } from 'react'
import NoticeSection from '../homeComponents/NoticeSection'
import GokitouOmamoriSection from '../homeComponents/GokitouOmamoriSection'
import NenchuSection from '../homeComponents/NenchuSection'
import AccessContactWrapper from '../homeComponents/AccessContactWrapper'
import MenuBar from '../MenuBar'
import VideoBackground from '../homeComponents/VideoBackground'
import LogoCrossfade from '../homeComponents/LogoCrossfade'
import HeroContent from '../homeComponents/HeroContent'

export const Home = () => {
  const [introVisible, setIntroVisible] = useState(false) // 初期値をfalseに変更
  const [crossFadeVisible, setCrossFadeVisible] = useState(false)
  const [mainVisible, setMainVisible] = useState(false)
  const [fade, setFade] = useState(0)
  const [muted, setMuted] = useState(true)
  const fadeDuration = 2000
  const [showMenuBar, setShowMenuBar] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false) // 初期化完了フラグ

  // 初回訪問判定とintroAnimationの制御
  useEffect(() => {
    const hasVisitedBefore = () => {
      if (typeof window === 'undefined') return false
      try {
        return localStorage.getItem('hasVisitedBefore') === 'true'
      } catch (_error) {
        // localStorageが利用できない場合（プライベートモード等）は初回として扱う
        return false
      }
    }

    const markAsVisited = () => {
      if (typeof window === 'undefined') return
      try {
        localStorage.setItem('hasVisitedBefore', 'true')
      } catch (_error) {
        // localStorageが利用できない場合は無視
      }
    }

    const visitedBefore = hasVisitedBefore()

    if (visitedBefore) {
      // 初回以外の場合はintroAnimationをスキップ
      setIntroVisible(false)
      setMainVisible(true)
      setIsInitialized(true)
    } else {
      // 初回の場合はintroAnimationを表示
      setIntroVisible(true)
      markAsVisited()
      setIsInitialized(true)
    }
  }, [])

  // IntroAnimation終了後にクロスフェード開始
  const handleIntroEnd = () => {
    setIntroVisible(false)
    setCrossFadeVisible(true)
    setFade(0)
    // クロスフェードアニメーション
    let start: number | null = null
    const animate = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / fadeDuration, 1)
      setFade(progress)
      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setFade(1)
        setMainVisible(true)
        // 1.2s（transition duration）+ 100msだけロゴのDOMをopacity:0のまま残す
        setTimeout(() => {
          setCrossFadeVisible(false)
        }, 500)
      }
    }
    requestAnimationFrame(animate)
  }

  // スクロールでメイン内容を表示
  useEffect(() => {
    if (!crossFadeVisible && !mainVisible) return
    const handleScroll = () => {
      setCrossFadeVisible(false)
      setMainVisible(true)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [crossFadeVisible, mainVisible])

  // ミュート切り替え
  const handleToggleMute = () => {
    setMuted((prev) => !prev)
  }

  useEffect(() => {
    const handleScroll = () => {
      // 100vhを超えたらMenuBarを表示
      if (window.scrollY > window.innerHeight - 10) {
        setShowMenuBar(true)
      } else {
        setShowMenuBar(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    // 初期表示時も判定
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 開発用：Ctrl+Shift+R でリセット
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'R') {
        localStorage.removeItem('hasVisitedBefore')
        window.location.reload()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // 初期化が完了するまで何も表示しない
  if (!isInitialized) {
    return null
  }

  return (
    <>
      {showMenuBar && <MenuBar />}
      {/* 動画・雲は常時マウント（opacityは常に1） */}
      <VideoBackground muted={muted} onToggleMute={handleToggleMute} />
      {/* イントロアニメーション */}
      {introVisible && <IntroAnimation onIntroEnd={handleIntroEnd} />}
      {/* ロゴのクロスフェード */}
      <LogoCrossfade visible={crossFadeVisible} fade={fade} />
      {/* メイン内容＋動画＋雲 */}
      {mainVisible && (
        <>
          <HeroContent />
          {/* --- お知らせセクション --- */}
          <NoticeSection />
          {/* --- 御祈祷・お守りセクション --- */}
          <GokitouOmamoriSection />
          {/* --- 年中行事セクション --- */}
          <NenchuSection />
          {/* --- ご来社案内セクション --- */}
          <AccessContactWrapper />
        </>
      )}
    </>
  )
}
