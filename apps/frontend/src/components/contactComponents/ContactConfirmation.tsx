import styled from '@emotion/styled'

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 1024px) {
    gap: 0.875rem;
    margin-top: 1.75rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
    margin-top: 1.25rem;
  }
`

const BackButton = styled.button`
  background: var(--color-brown);
  color: var(--color-white);
  border: none;
  border-radius: 8px;
  padding: 1rem 2rem;
  font-family: var(--font-family-serif);
  font-size: var(--font-size-base);
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  flex: 1;

  &:hover {
    background: #8b4513;
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
    font-size: var(--font-size-sm);
  }
`

const ConfirmButton = styled.button`
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
  flex: 1;

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

const ConfirmationSection = styled.div`
  background: var(--color-white);
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid #ddd;

  @media (max-width: 1024px) {
    padding: 1.5rem;
    margin-bottom: 1.75rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0.75rem;
    margin-bottom: 1.25rem;
  }
`

const ConfirmationTitle = styled.h3`
  font-family: var(--font-family-serif);
  font-size: var(--font-size-lg);
  color: var(--color-brown);
  margin-bottom: 1.5rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: var(--font-size-base);
    margin-bottom: 1rem;
  }
`

const ConfirmationItem = styled.div`
  display: flex;
  margin-bottom: 1rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 0.75rem;
  }
`

const ConfirmationLabel = styled.div`
  font-family: var(--font-family-serif);
  font-size: var(--font-size-base);
  color: var(--color-brown);
  font-weight: 500;
  min-width: 120px;
  margin-right: 1rem;

  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
    margin-right: 0;
    margin-bottom: 0.25rem;
  }
`

const ConfirmationValue = styled.div`
  font-family: var(--font-family-serif);
  font-size: var(--font-size-base);
  color: var(--color-brown);
  flex: 1;

  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
  }
`

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: var(--color-white);
  animation: spin 1s ease-in-out infinite;
  margin-right: 0.5rem;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`

interface ContactConfirmationProps {
  formData: {
    subject: string
    name: string
    email: string
    phone: string
    company: string
    message: string
    privacyPolicy: boolean
  }
  onBack: () => void
  onSubmit: () => void
  isSubmitting: boolean
}

const ContactConfirmation: React.FC<ContactConfirmationProps> = ({ formData, onBack, onSubmit, isSubmitting }) => {
  return (
    <>
      <ConfirmationSection>
        <ConfirmationTitle>入力内容の確認</ConfirmationTitle>

        <ConfirmationItem>
          <ConfirmationLabel>ご用件</ConfirmationLabel>
          <ConfirmationValue>{formData.subject}</ConfirmationValue>
        </ConfirmationItem>

        <ConfirmationItem>
          <ConfirmationLabel>お名前</ConfirmationLabel>
          <ConfirmationValue>{formData.name}</ConfirmationValue>
        </ConfirmationItem>

        <ConfirmationItem>
          <ConfirmationLabel>メールアドレス</ConfirmationLabel>
          <ConfirmationValue>{formData.email}</ConfirmationValue>
        </ConfirmationItem>

        <ConfirmationItem>
          <ConfirmationLabel>電話番号</ConfirmationLabel>
          <ConfirmationValue>{formData.phone || '未入力'}</ConfirmationValue>
        </ConfirmationItem>

        <ConfirmationItem>
          <ConfirmationLabel>会社名</ConfirmationLabel>
          <ConfirmationValue>{formData.company || '未入力'}</ConfirmationValue>
        </ConfirmationItem>

        <ConfirmationItem>
          <ConfirmationLabel>メッセージ</ConfirmationLabel>
          <ConfirmationValue style={{ whiteSpace: 'pre-wrap' }}>{formData.message}</ConfirmationValue>
        </ConfirmationItem>
      </ConfirmationSection>

      <ButtonGroup>
        <BackButton type='button' onClick={onBack}>
          修正する
        </BackButton>
        <ConfirmButton type='button' onClick={onSubmit} disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <LoadingSpinner />
              送信中...
            </>
          ) : (
            '送信する'
          )}
        </ConfirmButton>
      </ButtonGroup>
    </>
  )
}

export default ContactConfirmation
