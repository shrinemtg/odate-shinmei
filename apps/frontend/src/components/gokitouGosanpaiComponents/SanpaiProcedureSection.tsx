import styled from '@emotion/styled'

const ProcedureSectionWrapper = styled.section`
  width: 100%;
  max-width: 100%;
  margin: 4rem auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 100%;
    margin: 3rem auto;
    padding: 0 1.5rem;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    margin: 3rem auto;
    padding: 0;
    gap: 2rem;
  }
`

const SectionTitle = styled.h2`
  font-size: var(--font-size-4xl);
  font-weight: 600;
  color: var(--color-shuiro);
  letter-spacing: 0.2em;
  font-family: var(--font-family-serif);
  margin: 0 0 0 9rem;
  align-self: flex-start;

  @media (max-width: 1024px) {
    font-size: var(--font-size-4xl);
    margin: 0 0 0 9rem;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-3xl);
    writing-mode: horizontal-tb;
    margin-left: 0;
    text-align: center;
    align-self: center;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-3xl);
  }
`

const ProcedureBox = styled.div`
  width: 70%;
  border: 2px solid var(--color-shuiro);
  border-radius: 8px;
  padding: 2rem;
  margin: 0 auto 8rem;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  gap: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;

  @media (max-width: 1024px) {
    justify-content: center;
    flex-wrap: wrap;
    width: 70%;
    margin: 0 auto 8rem;
    padding: 1.5rem;
    gap: 1rem;
  }

  @media (max-width: 768px) {
    margin: 0 auto 8rem;
    width: 90%;
    padding: 2rem;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    width: 95%;
    gap: 2rem;
  }
`

const ProcedureStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex-shrink: 0;
  width: 100%;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

const StepNumber = styled.span`
  font-size: var(--font-size-5xl);
  font-weight: 700;
  color: var(--color-gray);
  font-family: var(--font-family-serif);
  align-self: flex-start;
  margin-bottom: 0.5rem;

  @media (max-width: 1024px) {
    font-size: var(--font-size-4xl);
    margin-bottom: 0.5rem;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-3xl);
    margin-bottom: 0.5rem;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-3xl);
    margin-bottom: 0.5rem;
  }
`

const StepImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  margin-bottom: 1rem;
  overflow: hidden;

  @media (max-width: 1024px) {
    height: 180px;
  }

  @media (max-width: 768px) {
    height: 160px;
  }

  @media (max-width: 480px) {
    height: 160px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
`

const StepDescription = styled.p`
  font-size: var(--font-size-sm);
  color: var(--color-gray);
  font-family: var(--font-family-serif);
  line-height: 1.6;
  margin: 0;
  white-space: pre-line;

  @media (max-width: 1024px) {
    font-size: var(--font-size-sm);
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
    line-height: 1.4;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-sm);
    line-height: 1.3;
  }
`

const SanpaiProcedureSection = () => {
  const steps = [
    {
      number: '一',
      image: '/gokitou/sanpaisahou-01.png',
      alt: '鈴を鳴らす。',
      description: '鈴を鳴らします。',
    },
    {
      number: '二',
      image: '/gokitou/sanpaisahou-02.png',
      alt: 'お賽銭を入れる。',
      description: 'そっとお賽銭を入れます。',
    },
    {
      number: '三',
      image: '/gokitou/sanpaisahou-03.png',
      alt: '深く二回拝をする',
      description: '深く二回拝礼をします。',
    },
    {
      number: '四',
      image: '/gokitou/sanpaisahou-04.png',
      alt: '二拍手して手を合わせ祈りを込める',
      description: '二回拍手した後\n両手を合わせ\n祈りを込めます。',
    },
    {
      number: '五',
      image: '/gokitou/sanpaisahou-05.png',
      alt: '最後に深く一拝します',
      description: '最後にもう一度、\n深く一拝します。',
    },
  ]

  return (
    <ProcedureSectionWrapper>
      <SectionTitle>手順</SectionTitle>
      <ProcedureBox>
        {steps.map((step, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
            <ProcedureStep>
              <StepNumber>{step.number}</StepNumber>
              <StepImageWrapper>
                <img src={step.image} alt={step.alt} />
              </StepImageWrapper>
              <StepDescription>{step.description}</StepDescription>
            </ProcedureStep>
          </div>
        ))}
      </ProcedureBox>
    </ProcedureSectionWrapper>
  )
}

export default SanpaiProcedureSection
