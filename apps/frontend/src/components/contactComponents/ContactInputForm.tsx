import styled from '@emotion/styled'
import { useState } from 'react'
import ContactErrorPopup from './ContactErrorPopup'
import Link from 'next/link'

const FormField = styled.div`
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    margin-bottom: 1.75rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 1.25rem;
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

  @media (max-width: 1024px) {
    font-size: var(--font-size-base);
    margin-bottom: 0.375rem;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
    margin-bottom: 0.25rem;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-xs);
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

  @media (max-width: 1024px) {
    padding: 0.875rem;
    font-size: var(--font-size-base);
  }

  @media (max-width: 768px) {
    padding: 0.75rem;
    font-size: var(--font-size-sm);
  }

  @media (max-width: 480px) {
    padding: 0.625rem;
    font-size: var(--font-size-xs);
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

  @media (max-width: 1024px) {
    min-height: 200px;
    padding: 0.875rem;
    font-size: var(--font-size-base);
  }

  @media (max-width: 768px) {
    min-height: 180px;
    padding: 0.75rem;
    font-size: var(--font-size-sm);
  }

  @media (max-width: 480px) {
    min-height: 160px;
    padding: 0.625rem;
    font-size: var(--font-size-xs);
  }
`

const CheckboxContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 1rem 0;

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

  @media (max-width: 1024px) {
    padding: 0.875rem 1.75rem;
    font-size: var(--font-size-base);
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
    font-size: var(--font-size-sm);
  }

  @media (max-width: 480px) {
    padding: 0.625rem 1.25rem;
    font-size: var(--font-size-xs);
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

interface ContactInputFormProps {
  formData: FormData
  onInputChange: (field: keyof FormData, value: string | boolean) => void
  onSubmit: (e: React.FormEvent) => void
}

const ContactInputForm: React.FC<ContactInputFormProps> = ({ formData, onInputChange, onSubmit }) => {
  const [showErrorPopup, setShowErrorPopup] = useState(false)
  const [validationErrors, setValidationErrors] = useState<string[]>([])

  const validateForm = () => {
    const errors: string[] = []

    if (!formData.subject.trim()) {
      errors.push('ご用件が入力されておりません。')
    }

    if (!formData.name.trim()) {
      errors.push('お名前が入力されておりません。')
    }

    if (!formData.email.trim()) {
      errors.push('メールアドレスが入力されておりません。')
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.push('正しいメールアドレスの形式で入力してください。')
    }

    if (!formData.phone.trim()) {
      errors.push('電話番号が入力されておりません。')
    } else if (!/^[0-9-+\s()]+$/.test(formData.phone)) {
      errors.push('正しい電話番号の形式で入力してください。')
    }

    if (!formData.message.trim()) {
      errors.push('メッセージが入力されておりません。')
    }

    if (!formData.privacyPolicy) {
      errors.push('プライバシーポリシーに同意してください。')
    }

    return errors
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const errors = validateForm()

    if (errors.length > 0) {
      setValidationErrors(errors)
      setShowErrorPopup(true)
      return
    }

    onSubmit(e)
  }

  const handleCloseErrorPopup = () => {
    setShowErrorPopup(false)
    setValidationErrors([])
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormField>
          <Label>
            ご用件<span className='required'>*</span>
          </Label>
          <Input
            type='text'
            placeholder='ご予約・お問い合わせ'
            value={formData.subject}
            onChange={(e) => onInputChange('subject', e.target.value)}
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
            onChange={(e) => onInputChange('name', e.target.value)}
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
            onChange={(e) => onInputChange('email', e.target.value)}
            required
          />
        </FormField>

        <FormField>
          <Label>
            電話番号<span className='required'>*</span>
          </Label>
          <Input
            type='tel'
            placeholder='090-XXXX-XXXX'
            value={formData.phone}
            onChange={(e) => onInputChange('phone', e.target.value)}
            required
          />
        </FormField>

        <FormField>
          <Label>会社名</Label>
          <Input
            type='text'
            placeholder='株式会社サンプル'
            value={formData.company}
            onChange={(e) => onInputChange('company', e.target.value)}
          />
        </FormField>

        <FormField>
          <Label>
            メッセージ<span className='required'>*</span>
          </Label>
          <TextArea
            placeholder={`ご予約の際は
・御祈祷内容
・ご希望のお日にち(三候補日)
・ご希望のお時間をご記入ください

お問い合わせ内容の際は
・詳しい内容をご記入下さい`}
            value={formData.message}
            onChange={(e) => onInputChange('message', e.target.value)}
            required
          />
        </FormField>

        <CheckboxContainer>
          <Checkbox
            type='checkbox'
            id='privacy-policy'
            checked={formData.privacyPolicy}
            onChange={(e) => onInputChange('privacyPolicy', e.target.checked)}
            required
          />
          <CheckboxLabel htmlFor='privacy-policy'>
            プライバシーポリシーに同意する
            <br />
            <Link href='/privacy-policy' style={{ color: 'var(--color-shuiro)', fontSize: 'var(--font-size-sm)' }}>
              ※プライバシーポリシー
            </Link>
          </CheckboxLabel>
        </CheckboxContainer>

        <SubmitButton type='submit'>確認画面へ</SubmitButton>
      </form>

      {showErrorPopup && <ContactErrorPopup errors={validationErrors} onClose={handleCloseErrorPopup} />}
    </>
  )
}

export default ContactInputForm
