import Image from 'next/image'
import React from 'react'
import styled from '@emotion/styled'

const menuItems = [
  { label: '神社のご紹介', href: '#about' },
  { label: '御祈祷・ご参拝', href: '#prayer' },
  { label: 'お守り・授与品', href: '#omamori' },
  { label: '年中行事', href: '#events' },
  { label: 'お問い合わせ', href: '#contact' },
]

const Root = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 160px;
  height: 540px;
  background: #98443d;
  color: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.08);
  margin: 8px;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 24px;
`

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`

const Item = styled.li`
  width: 100%;
  text-align: center;
  margin: 12px 0;
`

const Link = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.7;
  }
`

const MenuBar: React.FC = () => {
  return (
    <Root>
      <Header>
        <Image
          src='/top-motion/montuki-rogo.png'
          alt='montuki rogo'
          width={160}
          height={140}
          style={{ filter: 'brightness(0) invert(1)' }}
        />
      </Header>
      <List>
        {menuItems.map((item) => (
          <Item key={item.label}>
            <Link href={item.href}>{item.label}</Link>
          </Item>
        ))}
      </List>
    </Root>
  )
}

export default MenuBar
