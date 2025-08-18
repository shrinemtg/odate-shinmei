import styled from '@emotion/styled'
import Image from 'next/image'

const OmamoriEmaSectionWrapper = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  padding: 4rem 0;
  background: var(--color-beige-light);
`

const ContentContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
`

const OmamoriEmaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex: 1;
  gap: 2rem;
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
`

const OmamoriEmaTitle = styled.h3`
  color: var(--color-brown);
  font-size: var(--font-size-lg);
  font-weight: 600;
  text-align: left;
  font-family: var(--font-family-serif);
  margin: 0 0 0.5rem 0;
`

const OmamoriEmaDescription = styled.p`
  color: var(--color-gray);
  font-size: var(--font-size-sm);
  line-height: 1.6;
  text-align: left;
  font-family: var(--font-family-sans);
  margin: 0;
  max-width: 280px;
`

const omamoriEmaData = [
  {
    id: 1,
    title: '合格絵馬',
    description: '学業成就・受験合格の願いを込めて奉納する絵馬です。努力の成果が実を結びますように。',
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
    title: '干支絵馬',
    description: '新年の干支を描いた絵馬です。その年の幸運と無事を祈り、感謝と願いを奉納します。',
    image: '/omamoriPhoto/omamori-ema-03.png',
  },
]

const Description = styled.div`
  color: var(--color-gray);
  font-size: var(--font-size-base);
  line-height: 1.6;
  font-family: var(--font-family-sans);
  text-align: center;
  margin-top: 2rem;
`

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
`

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
      <Description>
        <Paragraph>その他にも様々な絵馬をご用意しております。</Paragraph>
      </Description>
    </OmamoriEmaSectionWrapper>
  )
}

export default OmamoriEmaSection
