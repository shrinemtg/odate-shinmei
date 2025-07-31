import styled from '@emotion/styled'

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

const PopupContainer = styled.div`
  background: var(--color-white);
  border-radius: 12px;
  padding: 2rem;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  position: relative;

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin: 1rem;
  }
`

const PopupTitle = styled.h3`
  font-family: var(--font-family-serif);
  font-size: var(--font-size-lg);
  color: var(--color-shuiro);
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: var(--font-size-base);
  }
`

const ErrorList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
`

const ErrorItem = styled.li`
  font-family: var(--font-family-serif);
  font-size: var(--font-size-base);
  color: var(--color-brown);
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
  }
`

const CloseButton = styled.button`
  background: var(--color-shuiro);
  color: var(--color-white);
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-family: var(--font-family-serif);
  font-size: var(--font-size-base);
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  width: 100%;

  &:hover {
    background: #7a2d28;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: var(--font-size-sm);
  }
`

interface ContactErrorPopupProps {
  errors: string[]
  onClose: () => void
}

const ContactErrorPopup: React.FC<ContactErrorPopupProps> = ({ errors, onClose }) => {
  return (
    <PopupOverlay onClick={onClose}>
      <PopupContainer onClick={(e) => e.stopPropagation()}>
        <PopupTitle>入力内容をご確認ください</PopupTitle>
        <ErrorList>
          {errors.map((error, index) => (
            <ErrorItem key={index}>• {error}</ErrorItem>
          ))}
        </ErrorList>
        <CloseButton onClick={onClose}>閉じる</CloseButton>
      </PopupContainer>
    </PopupOverlay>
  )
}

export default ContactErrorPopup
