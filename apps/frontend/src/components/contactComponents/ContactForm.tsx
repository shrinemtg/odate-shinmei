import styled from '@emotion/styled'
import { useState } from 'react'

const PageWrapper = styled.div`
  min-height: 100vh;
  background: var(--color-oud) url('/top-motion/haikei.png') center center / cover no-repeat;
  position: relative;
  overflow: hidden;
`

const BackgroundDecoration = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 300px;
  background: url('/top-motion/kumo.png') no-repeat center center / contain;
  opacity: 0.3;
  z-index: 1;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`

const BackgroundDecorationBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 250px;
  height: 250px;
  background: url('/top-motion/kumo.png') no-repeat center center / contain;
  opacity: 0.3;
  z-index: 1;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`

const ContactFormWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem 4rem 8rem;
  min-height: 100vh;
  box-sizing: border-box;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    gap: 1.5rem;
    padding: 2rem 1rem 2rem 4rem;
    max-width: 100%;
  }
`

const VerticalTitle = styled.div`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-family: var(--font-family-serif);
  font-size: var(--font-size-4xl);
  color: var(--color-brown);
  font-weight: 600;
  letter-spacing: 0.1em;
  line-height: 1.2;
  position: absolute;
  top: 6rem;
  left: 13rem;
  z-index: 3;
  display: flex;
  flex-direction: column;

  .title-line {
    margin-bottom: 1rem;
  }

  .title-line:last-child {
    margin-bottom: 0;
    margin-top: -2rem;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-2xl);
    left: 2rem;

    .title-line {
      margin-bottom: 0.5rem;
    }

    .title-line:last-child {
      margin-top: -1rem;
    }
  }
`

const FormContainer = styled.div`
  flex: 1;
  background: var(--color-oud);
  border-radius: 12px;
  padding: 6rem 3rem;
  margin: 10rem 3rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`

const FormField = styled.div`
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`

const Label = styled.label`
  display: block;
  font-family: var(--font-family-serif);
  font-size: var(--font-size-base);
  color: var(--color-brown);
  margin-bottom: 0.5rem;
  font-weight: 500;

  .required {
    color: var(--color-shuiro);
    margin-left: 0.25rem;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
    margin-bottom: 0.25rem;
  }
`

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-family: var(--font-family-serif);
  font-size: var(--font-size-base);
  background: var(--color-white);
  color: var(--color-brown);
  box-sizing: border-box;
  transition: border-color 0.2s;

  &::placeholder {
    color: #999;
  }

  &:focus {
    outline: none;
    border-color: var(--color-shuiro);
  }

  @media (max-width: 768px) {
    padding: 0.75rem;
    font-size: var(--font-size-sm);
  }
`

const TextArea = styled.textarea`
  width: 100%;
  min-height: 200px;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-family: var(--font-family-serif);
  font-size: var(--font-size-base);
  background: var(--color-white);
  color: var(--color-brown);
  box-sizing: border-box;
  resize: vertical;
  transition: border-color 0.2s;

  &::placeholder {
    color: #999;
  }

  &:focus {
    outline: none;
    border-color: var(--color-shuiro);
  }

  @media (max-width: 768px) {
    min-height: 150px;
    padding: 0.75rem;
    font-size: var(--font-size-sm);
  }
`

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 0;

  @media (max-width: 768px) {
    margin: 1.5rem 0;
  }
`

const Checkbox = styled.input`
  margin-right: 0.75rem;
  transform: scale(1.2);
`

const CheckboxLabel = styled.label`
  font-family: var(--font-family-serif);
  font-size: var(--font-size-base);
  color: var(--color-brown);
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
  }
`

const SubmitButton = styled.button`
  background: var(--color-shuiro);
  color: var(--color-white);
  border: none;
  border-radius: 8px;
  padding: 1rem 2rem;
  font-family: var(--font-family-serif);
  font-size: var(--font-size-base);
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  width: 100%;

  &:hover {
    background: #7a2d28;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
    font-size: var(--font-size-sm);
  }
`

interface FormData {
  subject: string
  name: string
  email: string
  phone: string
  company: string
  message: string
  privacyPolicy: boolean
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    subject: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    privacyPolicy: false,
  })

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:8081/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        alert('お問い合わせを送信しました')
        // フォームリセット
        setFormData({
          subject: '',
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          privacyPolicy: false,
        })
      } else {
        alert(result.error || '送信に失敗しました')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('送信に失敗しました')
    }
  }

  const isFormValid = formData.subject && formData.name && formData.email && formData.message && formData.privacyPolicy

  return (
    <PageWrapper>
      <BackgroundDecoration />
      <BackgroundDecorationBottom />
      <ContactFormWrapper>
        <VerticalTitle>
          <div className='title-line'>お問合わせ</div>
          <div className='title-line'>ご予約</div>
        </VerticalTitle>

        <FormContainer>
          <form onSubmit={handleSubmit}>
            <FormField>
              <Label>
                ご用件<span className='required'>*</span>
              </Label>
              <Input
                type='text'
                placeholder='お問い合せ'
                value={formData.subject}
                onChange={(e) => handleInputChange('subject', e.target.value)}
                required
              />
            </FormField>

            <FormField>
              <Label>
                お名前<span className='required'>*</span>
              </Label>
              <Input
                type='text'
                placeholder='山田太郎'
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
              />
            </FormField>

            <FormField>
              <Label>
                メールアドレス<span className='required'>*</span>
              </Label>
              <Input
                type='email'
                placeholder='example@email.com'
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
              />
            </FormField>

            <FormField>
              <Label>電話番号</Label>
              <Input
                type='tel'
                placeholder='090-XXXX-XXXX'
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
              />
            </FormField>

            <FormField>
              <Label>会社名</Label>
              <Input
                type='text'
                placeholder='株式会社サンプル'
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
              />
            </FormField>

            <FormField>
              <Label>
                メッセージ<span className='required'>*</span>
              </Label>
              <TextArea
                placeholder={`ご予約の際は
・御祈祷内容
・ご希望のお日にち(三候補日)をご記入ください

お問い合わせ内容の際は
・詳しい内容をご記入下さい`}
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                required
              />
            </FormField>

            <CheckboxContainer>
              <Checkbox
                type='checkbox'
                id='privacy-policy'
                checked={formData.privacyPolicy}
                onChange={(e) => handleInputChange('privacyPolicy', e.target.checked)}
                required
              />
              <CheckboxLabel htmlFor='privacy-policy'>プライバシーポリシーに同意する</CheckboxLabel>
            </CheckboxContainer>

            <SubmitButton type='submit' disabled={!isFormValid}>
              確認画面へ
            </SubmitButton>
          </form>
        </FormContainer>
      </ContactFormWrapper>
    </PageWrapper>
  )
}

export default ContactForm
