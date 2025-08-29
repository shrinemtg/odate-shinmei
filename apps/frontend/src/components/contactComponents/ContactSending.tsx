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

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 4px solid rgba(139, 69, 19, 0.3);
  border-radius: 50%;
  border-top-color: var(--color-brown);
  animation: spin 1s ease-in-out infinite;
  margin: 0 auto;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`

const ContactSending: React.FC = () => {
  return (
    <CompletionMessage>
      <CompletionTitle>送信中...</CompletionTitle>
      <CompletionText>
        <p>お問い合わせを送信しています。</p>
        <p>しばらくお待ちください。</p>
      </CompletionText>
      <LoadingSpinner />
    </CompletionMessage>
  )
}

export default ContactSending
