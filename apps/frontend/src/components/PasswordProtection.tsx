import { useState, useEffect } from 'react'
import styled from '@emotion/styled'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  font-family: 'Noto Sans JP', sans-serif;
`

const AuthCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 400px;
  width: 90%;
`

const Title = styled.h1`
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
`

const Description = styled.p`
  color: #666;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  line-height: 1.5;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Input = styled.input`
  padding: 0.75rem;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #667eea;
  }
`

const Button = styled.button`
  padding: 0.75rem;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: #5a6fd8;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`

const ErrorMessage = styled.div`
  color: #e74c3c;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`

interface PasswordProtectionProps {
  children: React.ReactNode
}

export default function PasswordProtection({ children }: PasswordProtectionProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // パスワード保護が有効かどうかを確認
  const isPasswordProtected = process.env.NEXT_PUBLIC_PASSWORD_PROTECTED === 'true'
  const correctPassword = process.env.NEXT_PUBLIC_SITE_PASSWORD

  useEffect(() => {
    // パスワード保護が無効な場合は認証済みとして扱う
    if (!isPasswordProtected) {
      setIsAuthenticated(true)
      return
    }

    // ローカルストレージから認証状態を確認
    const authToken = localStorage.getItem('auth-token')
    if (authToken === correctPassword) {
      setIsAuthenticated(true)
    }
  }, [isPasswordProtected, correctPassword])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // パスワードを比較
    if (password === correctPassword) {
      // 認証成功
      localStorage.setItem('auth-token', correctPassword)
      setIsAuthenticated(true)
    } else {
      setError('パスワードが正しくありません')
    }

    setIsLoading(false)
  }

  const handleLogout = () => {
    localStorage.removeItem('auth-token')
    setIsAuthenticated(false)
    setPassword('')
    setError('')
  }

  // パスワード保護が無効な場合は子コンポーネントを表示
  if (!isPasswordProtected) {
    return <>{children}</>
  }

  // 認証されていない場合はパスワード入力画面を表示
  if (!isAuthenticated) {
    return (
      <Overlay>
        <AuthCard>
          <Title>サイトアクセス</Title>
          <Description>
            このサイトは現在開発中です。
            <br />
            パスワードを入力してアクセスしてください。
          </Description>
          <Form onSubmit={handleSubmit}>
            <Input
              type='password'
              placeholder='パスワードを入力'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type='submit' disabled={isLoading}>
              {isLoading ? '認証中...' : 'アクセス'}
            </Button>
            {error && <ErrorMessage>{error}</ErrorMessage>}
          </Form>
        </AuthCard>
      </Overlay>
    )
  }

  // 認証済みの場合は子コンポーネントを表示し、ログアウトボタンを追加
  return (
    <>
      {children}
      <LogoutButton onClick={handleLogout}>ログアウト</LogoutButton>
    </>
  )
}

const LogoutButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 0.5rem 1rem;
  background: rgba(102, 126, 234, 0.9);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
  cursor: pointer;
  z-index: 1000;
  transition: background-color 0.2s;

  &:hover {
    background: rgba(102, 126, 234, 1);
  }
`
