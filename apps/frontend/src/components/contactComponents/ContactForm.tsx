import styled from '@emotion/styled'
import { useState } from 'react'
import ContactInputForm from './ContactInputForm'
import ContactConfirmation from './ContactConfirmation'
import ContactCompletion from './ContactCompletion'
import ContactSending from './ContactSending'

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

interface FormData {
  subject: string
  name: string
  email: string
  phone: string
  company: string
  message: string
  privacyPolicy: boolean
}

type FormStep = 'input' | 'confirm' | 'sending' | 'complete'

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

  const [currentStep, setCurrentStep] = useState<FormStep>('input')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value as any,
    }))
  }

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentStep('confirm')
  }

  const handleBack = () => {
    setCurrentStep('input')
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    setCurrentStep('sending')

    try {
      console.log('Sending form data:', formData)

      const response = await fetch('http://localhost:8080/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      console.log('Response status:', response.status)
      console.log('Response headers:', response.headers)

      if (!response.ok) {
        const errorText = await response.text()
        console.error('Response error:', errorText)
        throw new Error(`HTTP ${response.status}: ${errorText}`)
      }

      const result = await response.json()
      console.log('Response result:', result)

      if (result.success) {
        setCurrentStep('complete')
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
        setCurrentStep('confirm')
      }
    } catch (error) {
      console.error('Error details:', error)
      alert(`送信に失敗しました: ${error instanceof Error ? error.message : '不明なエラー'}`)
      setCurrentStep('confirm')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleNewContact = () => {
    setCurrentStep('input')
  }

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
          {currentStep === 'input' && (
            <ContactInputForm formData={formData} onInputChange={handleInputChange} onSubmit={handleConfirm} />
          )}
          {currentStep === 'confirm' && (
            <ContactConfirmation
              formData={formData}
              onBack={handleBack}
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
            />
          )}
          {currentStep === 'sending' && <ContactSending />}
          {currentStep === 'complete' && <ContactCompletion onNewContact={handleNewContact} />}
        </FormContainer>
      </ContactFormWrapper>
    </PageWrapper>
  )
}

export default ContactForm
