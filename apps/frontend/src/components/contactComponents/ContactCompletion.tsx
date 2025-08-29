import styled from '@emotion/styled'

const CompletionMessage = styled.div`
  text-align: center;
  padding: 3rem 2rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`

const CompletionTitle = styled.h2`
  font-family: var(--font-family-serif);
  font-size: var(--font-size-2xl);
  color: var(--color-brown);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: var(--font-size-xl);
  }
`

const CompletionText = styled.div`
  font-family: var(--font-family-serif);
  font-size: var(--font-size-base);
  color: var(--color-brown);
  line-height: 1.6;
  margin-bottom: 2rem;

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

interface ContactCompletionProps {
  onNewContact: () => void
}

const ContactCompletion: React.FC<ContactCompletionProps> = ({ onNewContact }) => {
  return (
    <CompletionMessage>
      <CompletionTitle>お問い合わせありがとうございます</CompletionTitle>
      <CompletionText>
        <p>お問い合わせを受け付けました。</p>
        <p>内容を確認の上、担当者よりご連絡いたします。</p>
        <p>しばらくお待ちください。</p>
      </CompletionText>
      <SubmitButton type='button' onClick={onNewContact}>
        新しいお問い合わせ
      </SubmitButton>
    </CompletionMessage>
  )
}

export default ContactCompletion
