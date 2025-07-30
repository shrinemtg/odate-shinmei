import styled from '@emotion/styled'

const ProcedureSectionWrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`

const SectionTitle = styled.h2`
  font-size: var(--font-size-4xl);
  font-weight: 600;
  color: var(--color-shuiro);
  letter-spacing: 0.2em;
  font-family: var(--font-family-serif);
  margin: 0 0 0 9rem;
  align-self: flex-start;

  @media (max-width: 768px) {
    writing-mode: horizontal-tb;
    margin-left: 0;
    text-align: center;
    align-self: center;
  }
`

const ProcedureBox = styled.div`
  width: 70%;
  border: 2px solid var(--color-shuiro);
  border-radius: 8px;
  padding: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  gap: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
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
    width: 45%;
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
`

const StepImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  margin-bottom: 1rem;
  overflow: hidden;

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
`

const Arrow = styled.div`
  font-size: var(--font-size-3xl);
  color: var(--color-shuiro);
  margin: 0 0.2rem;
  align-self: center;

  @media (max-width: 1024px) {
    display: none;
  }

  @media (max-width: 768px) {
    display: block;
    transform: rotate(90deg);
    margin: 1rem 0;
  }
`

const TemizuProcedureSection = () => {
  const steps = [
    {
      number: '一',
      image: '/gokitou/temizu-01.png',
      alt: '右手で柄杓を持ち左手を洗う',
      description: '右手で柄杓を持ち\n左手を洗い\n清めます。',
    },
    {
      number: '二',
      image: '/gokitou/temizu-02.png',
      alt: '左手に持ち替え右手を洗う',
      description: '左手に持ち替え\n右手を洗い\n清めます',
    },
    {
      number: '三',
      image: '/gokitou/temizu-03.png',
      alt: '左手で水を受け口をすすぐ',
      description: '右手に持ち替え\n左手で水を受け\n口をすすぎます。',
    },
    {
      number: '四',
      image: '/gokitou/temizu-04.png',
      alt: 'もう一度左手を洗う',
      description: 'もう一度\n左手を洗います。',
    },
    {
      number: '五',
      image: '/gokitou/temizu-05.png',
      alt: '柄杓の柄の部分を洗う',
      description: '最後に柄杓の柄の部分を洗います。',
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
            {index < steps.length - 1 && (
              <Arrow>
                <span role='img' aria-label='arrow right'>
                  →
                </span>
              </Arrow>
            )}
          </div>
        ))}
      </ProcedureBox>
    </ProcedureSectionWrapper>
  )
}

export default TemizuProcedureSection
