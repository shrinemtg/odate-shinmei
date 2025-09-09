import styled from '@emotion/styled'
import { useState } from 'react'
import ContactInputForm from './ContactInputForm'
import ContactConfirmation from './ContactConfirmation'
import ContactCompletion from './ContactCompletion'
import ContactSending from './ContactSending'
import ContactErrorPopup from './ContactErrorPopup'

const PageWrapper = styled.div`
  min-height: 100vh;
  background: var(--color-oud) url('/top-motion/haikei.png') center top / 100% auto repeat-y;
  background-attachment: fixed;
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
  margin: 3rem auto;
  padding: 4rem 2rem 4rem 8rem;
  min-height: 100vh;
  box-sizing: border-box;
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    gap: 2rem;
    padding: 3rem 1.5rem 3rem 6rem;
    max-width: 95%;
  }

  @media (max-width: 768px) {
    gap: 1.5rem;
    padding: 2rem 1rem 2rem 4.5rem;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    gap: 1rem;
    padding: 2rem 0.5rem 1.5rem 2.5rem;
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
  left: 10rem;
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

  @media (max-width: 1024px) {
    font-size: var(--font-size-3xl);
    left: 7rem;
    top: 4.5rem;

    .title-line {
      margin-bottom: 0.75rem;
    }

    .title-line:last-child {
      margin-top: -1.5rem;
    }
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-2xl);
    left: 3.5rem;
    top: 2.8rem;

    .title-line {
      margin-bottom: 0.5rem;
    }

    .title-line:last-child {
      margin-top: -1rem;
    }
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-xl);
    left: 1.2rem;
    top: 1.8rem;

    .title-line {
      margin-bottom: 0.25rem;
    }

    .title-line:last-child {
      margin-top: -0.5rem;
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

  @media (max-width: 1024px) {
    padding: 4rem 2rem;
    margin: 8rem 2rem;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    margin: 6rem 1rem;
    border-radius: 8px;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
    margin: 4rem 0.5rem;
    border-radius: 6px;
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
  const [sendError, setSendError] = useState<string | null>(null)

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
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
    setSendError(null)

    try {
      // Formspreeのエンドポイントに送信
      const formDataToSend = new FormData()
      formDataToSend.append('subject', formData.subject)
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('phone', formData.phone)
      formDataToSend.append('company', formData.company)
      formDataToSend.append('message', formData.message)

      // FormspreeのフォームIDを環境変数から取得
      const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID
      if (!formId) {
        throw new Error('Formspree form ID is not configured')
      }
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        body: formDataToSend,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
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
        throw new Error('送信に失敗しました。しばらく時間をおいて再度お試しください。')
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : '不明なエラー'
      setSendError(errorMessage)
      setCurrentStep('confirm')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleNewContact = () => {
    setCurrentStep('input')
  }

  const handleCloseSendError = () => {
    setSendError(null)
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

      {sendError && <ContactErrorPopup errors={[sendError]} onClose={handleCloseSendError} title='送信エラー' />}
    </PageWrapper>
  )
}

export default ContactForm
