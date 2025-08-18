import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import NextLink from 'next/link'

const menuItems = [
  { label: '神社のご紹介', href: '/history' },
  { label: '御祈祷・ご参拝', href: '/gokitouGosanpai' },
  { label: 'お守り・授与品', href: '/omamori' },
  { label: '年中行事', href: '/event' },
  { label: 'お問い合わせ', href: '/contact' },
]

// レスポンシブ対応のルートコンテナ
const Root = styled.nav<{ $isMobile: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: ${(props) => (props.$isMobile ? '100%' : '120px')};
  height: ${(props) => (props.$isMobile ? 'auto' : '480px')};
  background: var(--color-shuiro);
  color: var(--color-white);
  border-radius: ${(props) => (props.$isMobile ? '0' : '8px')};
  display: flex;
  flex-direction: ${(props) => (props.$isMobile ? 'row' : 'column')};
  align-items: center;
  justify-content: ${(props) => (props.$isMobile ? 'space-between' : 'flex-start')};
  z-index: 1000;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.08);
  margin: ${(props) => (props.$isMobile ? '0' : '8px')};
  padding: ${(props) => (props.$isMobile ? '0 16px' : '0')};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 100%;
    height: 60px;
    border-radius: 0;
    margin: 0;
    padding: 0 16px;
  }
`

// ヘッダー部分
const Header = styled.div<{ $isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${(props) => (props.$isMobile ? '0' : '60px')};
  cursor: pointer;

  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`

const LogoLink = styled(NextLink)`
  display: block;
  text-decoration: none;
`

// ハンバーガーメニューボタン
const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--color-white);
  font-size: 24px;
  cursor: pointer;
  padding: 8px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    display: block;
  }
`

// メニューリスト
const List = styled.ul<{ $isMobile: boolean; $isOpen: boolean }>`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  display: ${(props) => (props.$isMobile && !props.$isOpen ? 'none' : 'block')};

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: var(--color-shuiro);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    display: ${(props) => (props.$isOpen ? 'block' : 'none')};
  }
`

const Item = styled.li<{ $isMobile: boolean }>`
  width: 100%;
  text-align: center;
  margin: ${(props) => (props.$isMobile ? '0' : '12px 0')};

  @media (max-width: 768px) {
    margin: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`

const StyledLink = styled.a<{ $isMobile: boolean }>`
  color: var(--color-white);
  text-decoration: none;
  font-size: var(--font-size-sm);
  transition: all 0.3s ease;
  display: inline-block;
  padding: ${(props) => (props.$isMobile ? '16px' : '8px')};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--color-white);
    transition: width 0.3s ease;
  }

  &:hover {
    opacity: 0.7;
    background: ${(props) => (props.$isMobile ? 'rgba(255, 255, 255, 0.1)' : 'transparent')};

    &::after {
      width: 100%;
    }
  }
`

const MenuBar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // 画面サイズの監視
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768)
      if (window.innerWidth > 768) {
        setIsMenuOpen(false)
      }
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  // メニューの開閉
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // メニューアイテムクリック時の処理
  const handleMenuClick = () => {
    if (isMobile) {
      setIsMenuOpen(false)
    }
  }

  return (
    <Root $isMobile={isMobile}>
      <Header $isMobile={isMobile}>
        <LogoLink href='/'>
          <Image
            src='/top-motion/montuki-rogo.png'
            alt='montuki rogo'
            width={isMobile ? 40 : 130}
            height={isMobile ? 40 : 130}
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </LogoLink>
      </Header>

      {isMobile && (
        <HamburgerButton onClick={toggleMenu} aria-label='メニューを開く'>
          {isMenuOpen ? '✕' : '☰'}
        </HamburgerButton>
      )}

      <List $isMobile={isMobile} $isOpen={isMenuOpen}>
        {menuItems.map((item) => (
          <Item key={item.label} $isMobile={isMobile}>
            <StyledLink href={item.href} $isMobile={isMobile} onClick={handleMenuClick}>
              {item.label}
            </StyledLink>
          </Item>
        ))}
      </List>
    </Root>
  )
}

export default MenuBar
