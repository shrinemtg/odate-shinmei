import IntroAnimation from '../homeComponents/IntroAnimation'
import { useState, useEffect } from 'react'
import NoticeSection from '../homeComponents/NoticeSection'
import GokitouOmamoriSection from '../homeComponents/GokitouOmamoriSection'
import NenchuSection from '../homeComponents/NenchuSection'
import AccessContactWrapper from '../homeComponents/AccessContactWrapper'
import MenuBar from '../MenuBar'
import VideoBackground from '../homeComponents/VideoBackground'
import HeroContent from '../homeComponents/HeroContent'
import { hasIntroPlayed, markIntroPlayed } from '../homeComponents/introRuntimeState'

export const Home = () => {
  // アクセス（初回/再訪問/リロード問わず）＝フルロードでは必ずイントロをSSR描画して再生する。
  // サイト内のクライアント遷移でホームに戻った時だけ、再生済みフラグ(メモリ)を見てスキップし、
  // 最初の描画から mainVisible=true で出すため空白フレーム（白チラつき）が発生しない。
  // SSR では hasIntroPlayed() が常に false のため、初回描画は必ずイントロを含みハイドレーション
  // 不整合も起きない（introRuntimeState.ts 参照）。
  const [introMounted, setIntroMounted] = useState(() => !hasIntroPlayed())
  const [mainVisible, setMainVisible] = useState(() => hasIntroPlayed())
  const [muted, setMuted] = useState(true)
  const [showMenuBar, setShowMenuBar] = useState(false)

  // ロゴ保持が終わりイントロのフェードアウトが始まるタイミング。背後のホーム(動画は常時マウント
  // 済み)を露出させるため main をマウントしておく。イントロ自体は IntroAnimation 内の
  // AnimatePresence が和紙背景＋ロゴごと一体でふわっとフェードアウトする（背景だけ即消えて
  // 動画が露出する「パッと切り替わり」を防ぐ）。
  const handleIntroEnd = () => {
    // 再生完了をランタイムに記録 → 以降のサイト内遷移ではイントロをスキップする
    markIntroPlayed()
    setMainVisible(true)
  }

  // フェードアウト完了後にイントロをDOMから取り除く（フェード中は外さない）。
  const handleIntroExited = () => {
    setIntroMounted(false)
  }

  // ミュート切り替え
  const handleToggleMute = () => {
    setMuted((prev) => !prev)
  }

  // 初回のユーザー操作（タップ/クリック/キー/スクロール）で一度だけ動画の音をONにする。
  // ブラウザの自動再生ポリシー上、音アリ再生にはユーザー操作が必須なため。以降は右下の
  // ボタンで自由にON/OFFできる（自動ONは初回の一度きり）。なお最初の操作がミュート
  // ボタン自身だった場合は、ボタン側の toggle に任せて二重処理（再ミュート）を防ぐ。
  useEffect(() => {
    const events = ['pointerdown', 'keydown', 'touchstart', 'wheel'] as const
    const cleanup = () => events.forEach((ev) => window.removeEventListener(ev, unmuteOnce))
    const unmuteOnce = (e: Event) => {
      const target = e.target as HTMLElement | null
      if (target && target.closest('[data-mute-toggle]')) {
        cleanup()
        return
      }
      setMuted(false)
      cleanup()
    }
    events.forEach((ev) => window.addEventListener(ev, unmuteOnce, { passive: true }))
    return cleanup
  }, [])

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

  // 開発用：Ctrl+Shift+R でイントロを再生し直す（フルリロードでフラグがリセットされる）
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'R') {
        window.location.reload()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      {showMenuBar && <MenuBar />}
      {/* 動画・雲は常時マウント。再生は mainVisible(=ホーム切替開始)で頭から始める */}
      <VideoBackground muted={muted} onToggleMute={handleToggleMute} started={mainVisible} />
      {/* イントロアニメーション（フェードアウト完了で自らアンマウントを通知） */}
      {introMounted && <IntroAnimation onIntroEnd={handleIntroEnd} onIntroExited={handleIntroExited} />}
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
