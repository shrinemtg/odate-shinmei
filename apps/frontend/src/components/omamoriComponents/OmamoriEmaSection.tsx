import styled from '@emotion/styled'
import Image from 'next/image'

const OmamoriEmaSectionWrapper = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  padding: 4rem 0;
  background: var(--color-oud) url('/top-motion/haikei.png') center top / 100% auto repeat-y;
  background-attachment: fixed;

  @media (max-width: 1023px) {
    padding: 3rem 0;
  }

  @media (max-width: 767px) {
    padding: 2rem 0;
  }

  @media (max-width: 374px) {
    padding: 1.5rem 0;
  }
`

const ContentContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;

  @media (max-width: 1024px) {
    max-width: 70%;
    gap: 2rem;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    max-width: 95%;
    gap: 1.5rem;
  }

  @media (max-width: 374px) {
    max-width: 100%;
    gap: 1rem;
  }
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 767px) {
    order: -1;
  }
`

const Title = styled.h1`
  color: var(--color-brown);
  font-size: var(--font-size-5xl);
  font-weight: 600;
  text-align: center;
  font-family: var(--font-family-serif);
  writing-mode: vertical-rl;
  text-orientation: mixed;
  line-height: 1.2;
  margin: 0 0 0 2rem;

  @media (max-width: 1023px) {
    font-size: var(--font-size-4xl);
    margin: 0 0 0 1.5rem;
  }

  @media (max-width: 767px) {
    writing-mode: horizontal-tb;
    font-size: var(--font-size-3xl);
    margin: 0 0 1rem 0;
    letter-spacing: 0.2em;
  }

  @media (max-width: 374px) {
    font-size: var(--font-size-2xl);
    margin: 0 0 0.75rem 0;
  }
`

const OmamoriEmaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex: 1;
  gap: 2rem;

  @media (max-width: 1023px) {
    gap: 1.5rem;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    width: 100%;
  }

  @media (max-width: 374px) {
    gap: 1.5rem;
  }
`

const OmamoriEmaCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
  box-shadow: none;
  transition: none;

  &:hover {
    transform: none;
  }

  @media (max-width: 767px) {
    text-align: center;
  }
`

const OmamoriEmaImage = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  overflow: hidden;
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;

  @media (max-width: 1023px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 767px) {
    width: 200px;
    height: 200px;
    margin-top: 0;
  }

  @media (max-width: 374px) {
    width: 180px;
    height: 180px;
  }
`

const OmamoriEmaTitle = styled.h3`
  color: var(--color-brown);
  font-size: var(--font-size-lg);
  font-weight: 600;
  text-align: left;
  font-family: var(--font-family-serif);
  margin: 0 0 0.5rem 0;

  @media (max-width: 1023px) {
    font-size: var(--font-size-base);
    margin: 0 0 0.375rem 0;
  }

  @media (max-width: 767px) {
    text-align: center;
    font-size: var(--font-size-base);
    margin: 0.75rem 0 0.5rem 0;
  }

  @media (max-width: 374px) {
    font-size: var(--font-size-sm);
    margin: 0.5rem 0 0.375rem 0;
  }
`

const OmamoriEmaDescription = styled.p`
  color: var(--color-gray);
  font-size: var(--font-size-sm);
  line-height: 1.6;
  text-align: left;
  font-family: var(--font-family-sans);
  margin: 0;
  max-width: 280px;

  @media (max-width: 1023px) {
    font-size: var(--font-size-sm);
    max-width: 240px;
    line-height: 1.5;
  }

  @media (max-width: 767px) {
    text-align: center;
    font-size: var(--font-size-sm);
    max-width: 200px;
    line-height: 1.4;
  }

  @media (max-width: 374px) {
    font-size: var(--font-size-xs);
    max-width: 180px;
    line-height: 1.3;
  }
`

const omamoriEmaData = [
  {
    id: 1,
    title: '干支絵馬',
    description: '新年の干支を描いた絵馬です。その年の幸運と無事を祈り、感謝と願いを奉納します。',
    image: '/omamoriPhoto/omamori-ema-01.png',
  },
  {
    id: 2,
    title: '祈願絵馬',
    description: 'さまざまな願い事を神さまに託して奉納する絵馬です。真心をこめてお書きください。',
    image: '/omamoriPhoto/omamori-ema-02.png',
  },
  {
    id: 3,
    title: '合格絵馬',
    description: '学業成就・受験合格の願いを込めて奉納する絵馬です。努力の成果が実を結びますように。',
    image: '/omamoriPhoto/omamori-ema-03.png',
  },
]

const OmamoriEmaSection = () => {
  return (
    <OmamoriEmaSectionWrapper>
      <ContentContainer>
        <TitleContainer>
          <Title>絵馬</Title>
        </TitleContainer>

        <OmamoriEmaGrid>
          {omamoriEmaData.map((omamoriEma) => (
            <OmamoriEmaCard key={omamoriEma.id}>
              <OmamoriEmaImage>
                <Image
                  src={omamoriEma.image}
                  alt={omamoriEma.title}
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes='400px'
                />
              </OmamoriEmaImage>
              <OmamoriEmaTitle>{omamoriEma.title}</OmamoriEmaTitle>
              <OmamoriEmaDescription>{omamoriEma.description}</OmamoriEmaDescription>
            </OmamoriEmaCard>
          ))}
        </OmamoriEmaGrid>
      </ContentContainer>
    </OmamoriEmaSectionWrapper>
  )
}

export default OmamoriEmaSection
