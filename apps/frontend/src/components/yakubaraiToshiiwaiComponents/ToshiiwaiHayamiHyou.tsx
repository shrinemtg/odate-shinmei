import styled from '@emotion/styled'
import { useRouter } from 'next/router'

const ToshimawariNenpyouSectionWrapper = styled.section`
  width: 68%;
  max-width: 1200px;
  margin: 2rem 12rem;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`

const MainTitle = styled.h2`
  font-size: var(--font-size-4xl);
  font-weight: 600;
  color: var(--color-shuiro);
  font-family: var(--font-family-serif);
  margin: 0;
  text-align: center;
`

const ImageContainer = styled.div`
  width: 100%;
  max-width: 900px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 8rem;
  border: 1px solid var(--color-gray);
  border-radius: 8px;
`

const NenpyouImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
  display: block;
`

const ExplanationText = styled.div`
  width: 100%;
  max-width: 900px;
  color: var(--color-gray);
  font-size: var(--font-size-base);
  line-height: 1.8;
  font-family: var(--font-family-serif);
  text-align: center;
  margin-top: 2rem;

  p {
    margin: 0 0 0.5rem 0;
  }
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
`

const ToshimawariNenpyouSection = () => {
  const router = useRouter()

  const handleReservationClick = () => {
    router.push('/contact')
  }

  return (
    <ToshimawariNenpyouSectionWrapper>
      <MainTitle>歳祝い早見表</MainTitle>

      <ImageContainer>
        <NenpyouImage src='/yakubaraiPhoto/yakubarai-06.png' alt='年廻り早見表' />
      </ImageContainer>

      <ExplanationText>
        <p>大館神明社では1年を通して厄払いや歳祝いの御祈祷を受け付けております</p>
        <p>ご家族のご都合に合わせお越しください。</p>
      </ExplanationText>

      <ReservationButton onClick={handleReservationClick}>ご予約はコチラ</ReservationButton>
    </ToshimawariNenpyouSectionWrapper>
  )
}

export default ToshimawariNenpyouSection
