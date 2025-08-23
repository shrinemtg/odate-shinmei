import styled from '@emotion/styled'
import { useRouter } from 'next/navigation'

const NengaPackSectionWrapper = styled.section`
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto 6rem;
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    min-height: 90vh;
  }

  @media (max-width: 768px) {
    min-height: 80vh;
  }

  @media (max-width: 480px) {
    min-height: 70vh;
  }
`

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    align-items: center;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0.5rem;
  }
`

const MainTitle = styled.h1`
  color: var(--color-gray);
  font-size: var(--font-size-3xl);
  font-weight: 600;
  text-align: center;
  margin-bottom: 3rem;
  font-family: var(--font-family-serif);

  @media (max-width: 1024px) {
    font-size: var(--font-size-2xl);
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-xl);
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-lg);
  }
`

const PriceTableContainer = styled.div`
  width: 100%;
  max-width: 900px;
  position: relative;
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--color-oud);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  gap: 2rem;

  @media (max-width: 1024px) {
    max-width: 550px;
    padding: 1.5rem;
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    max-width: calc(100% - 2rem);
    padding: 1rem;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    max-width: calc(100% - 2rem);
    padding: 0.75rem;
    gap: 0.75rem;
  }
`

const PriceTableImage = styled.img`
  width: 100%;
  max-width: 800px;
  height: auto;

  @media (max-width: 1024px) {
    max-width: 550px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`

const Notes = styled.div`
  text-align: left;
  color: var(--color-gray);
  font-size: var(--font-size-sm);
  font-family: var(--font-family-serif);
  line-height: 1.8;
  margin-bottom: 0;

  p {
    margin: 0;
    padding: 0;
  }

  @media (max-width: 1024px) {
    font-size: var(--font-size-base);
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    text-align: center;
    font-size: var(--font-size-sm);
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-xs);
    line-height: 1.4;
  }
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

  @media (max-width: 1024px) {
    font-size: var(--font-size-base);
    line-height: 1.7;
    margin-top: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
    line-height: 1.6;
    margin-top: 1rem;
    max-width: 600px;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-xs);
    line-height: 1.5;
    margin-top: 0.75rem;
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
  margin-top: 4rem;
  width: 100%;
  max-width: 300px;
  display: block;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    background: var(--color-shuiro);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(153, 58, 55, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 1024px) {
    padding: 0.875rem 1.75rem;
    font-size: var(--font-size-base);
    margin-top: 2rem;
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
    font-size: var(--font-size-sm);
    margin-top: 2rem;
  }

  @media (max-width: 480px) {
    padding: 0.625rem 1.25rem;
    font-size: var(--font-size-xs);
    margin-top: 3rem;
  }
`

const NengaPackSection = () => {
  const router = useRouter()

  const handleReservationClick = () => {
    router.push('/contact')
  }

  return (
    <NengaPackSectionWrapper>
      <ContentContainer>
        <MainTitle>年賀パック料金表</MainTitle>

        <PriceTableContainer>
          <PriceTableImage src='/yakubaraiPhoto/yakubarai-07.png' alt='年賀パック料金表' />
          <Notes>
            <p>※パック期間外は御祈祷のみ行っております。</p>
            <p>※衣装代には着付けとヘアメイクの料金が含まれています。</p>
          </Notes>
        </PriceTableContainer>
        <ExplanationText>
          <p>大館神明社では1年を通して厄払いや歳祝いの御祈祷を受け付けております</p>
          <p>ご家族のご都合に合わせお越しください。</p>
        </ExplanationText>

        <ReservationButton onClick={handleReservationClick}>ご予約はコチラ</ReservationButton>
      </ContentContainer>
    </NengaPackSectionWrapper>
  )
}

export default NengaPackSection
