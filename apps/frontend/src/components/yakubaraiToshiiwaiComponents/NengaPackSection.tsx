import styled from '@emotion/styled'

const NengaPackSectionWrapper = styled.section`
  width: 100vw;
  padding: 6rem 0;
  position: relative;
  display: flex;
  align-items: center;
  background: var(--color-oud) url('/top-motion/haikei.png') center top / 100% auto repeat-y;
  background-attachment: fixed;

  @media (max-width: 1024px) {
    width: 100vw;
    padding: 5rem 0;
  }

  @media (max-width: 768px) {
    width: 100vw;
    padding: 4rem 0;
  }

  @media (max-width: 480px) {
    width: 100vw;
    padding: 3rem 0;
  }
`

const ContentContainer = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 4rem 0 0 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    margin: 3rem 0 0 4rem;
  }

  @media (max-width: 768px) {
    margin: 2rem 0 0 0;
    align-items: center;
  }

  @media (max-width: 480px) {
    margin: 2rem 0 0 0;
    align-items: center;
  }
`

const MainTitle = styled.h1`
  color: var(--color-gray);
  font-size: var(--font-size-5xl);
  font-weight: 600;
  text-align: center;
  margin-bottom: 1rem;
  font-family: var(--font-family-serif);

  @media (max-width: 1024px) {
    font-size: var(--font-size-4xl);
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-3xl);
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-2xl);
  }
`

const PriceTableContainer = styled.div`
  width: 100%;
  max-width: 80%;
  position: relative;
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--color-oud);
  padding: 2rem 0.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  gap: 2rem;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 70%;
    padding: 1.5rem;
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 1rem;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    max-width: 90%;
    padding: 1rem;
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
  color: var(--color-gray);
  font-size: var(--font-size-sm);
  font-family: var(--font-family-serif);
  line-height: 1.8;
  margin-bottom: 0;
  text-align: right;
  align-self: flex-end;
  width: 100%;

  p {
    margin: 0;
    padding: 0;
    text-align: right;
  }

  @media (max-width: 1024px) {
    font-size: var(--font-size-base);
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    text-align: right;
    font-size: var(--font-size-sm);
    line-height: 1.5;

    p {
      text-align: right;
    }
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-xs);
    line-height: 1.4;

    p {
      text-align: right;
    }
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

const ReservationButton = styled.a`
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
  margin: 2rem auto 3rem;
  display: block;
  width: fit-content;
  text-decoration: none;

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

const NengaPackSection = () => {
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
          <p>厄払いや歳祝いの御祈祷は一年を通して受け付けております。</p>
          <p>ご家族のご都合に合わせお越しください。</p>
        </ExplanationText>

        <ReservationButton href='/contact'>ご予約はコチラ</ReservationButton>
      </ContentContainer>
    </NengaPackSectionWrapper>
  )
}

export default NengaPackSection
