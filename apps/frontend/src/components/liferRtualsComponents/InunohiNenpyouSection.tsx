import styled from '@emotion/styled'
import { useRouter } from 'next/router'

const InunohiNenpyouSectionWrapper = styled.section`
  width: 68%;
  max-width: 1200px;
  margin: 2rem 12rem;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  @media (max-width: 1024px) {
    width: 80%;
    margin: 1.5rem 6rem;
    padding: 1.5rem 2rem;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    width: 90%;
    margin: 1rem 2rem;
    padding: 1rem 1.5rem;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 95%;
    margin: 0.75rem 1rem;
    padding: 0.75rem 1rem;
    gap: 1rem;
  }
`

const MainTitle = styled.h2`
  font-size: var(--font-size-4xl);
  font-weight: 600;
  color: var(--color-shuiro);
  font-family: var(--font-family-serif);
  margin: 0;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: var(--font-size-3xl);
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-2xl);
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-xl);
  }
`

const ImageContainer = styled.div`
  width: 100%;
  max-width: 800px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 6rem;
  border: 1px solid var(--color-gray);
  border-radius: 8px;

  @media (max-width: 1024px) {
    padding: 1.5rem 4rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 0.75rem 1rem;
  }
`

const NenpyouImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
  display: block;
`

const ReservationButton = styled.button`
  background: var(--color-shuiro);
  color: var(--color-white);
  border: none;
  border-radius: 8px;
  padding: 1rem 2rem;
  font-size: var(--font-size-base);
  font-weight: 600;
  font-family: var(--font-family-serif);
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 2rem;
  width: 100%;
  max-width: 300px;
  display: block;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    background: #7a2e2b;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(153, 58, 55, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 1024px) {
    padding: 0.875rem 1.75rem;
    font-size: var(--font-size-base);
    margin-top: 1.5rem;
    max-width: 280px;
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
    font-size: var(--font-size-sm);
    margin-top: 1rem;
    max-width: 260px;
  }

  @media (max-width: 480px) {
    padding: 0.625rem 1.25rem;
    font-size: var(--font-size-xs);
    margin-top: 0.75rem;
    max-width: 240px;
  }
`

const InunohiNenpyouSection = () => {
  const router = useRouter()

  const handleReservationClick = () => {
    router.push('/contact')
  }

  return (
    <InunohiNenpyouSectionWrapper>
      <MainTitle>令和7年 戌の日</MainTitle>

      <ImageContainer>
        <NenpyouImage src='/life/life-03.png' alt='戌の日早見表' />
      </ImageContainer>

      <ReservationButton onClick={handleReservationClick}>ご予約はコチラ</ReservationButton>
    </InunohiNenpyouSectionWrapper>
  )
}

export default InunohiNenpyouSection
