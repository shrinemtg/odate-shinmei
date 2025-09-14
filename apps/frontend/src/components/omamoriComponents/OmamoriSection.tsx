import styled from '@emotion/styled'
import Image from 'next/image'

const OmamoriSectionWrapper = styled.section`
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

const OmamoriGrid = styled.div`
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

const OmamoriCard = styled.div`
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

const OmamoriImage = styled.div`
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

const OmamoriTitle = styled.h3`
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

const OmamoriDescription = styled.p`
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

const omamoriData = [
  {
    id: 1,
    title: '合格守り',
    description: '学業成就と受験合格を祈願した御守です。努力が実を結びますよう、神さまのご加護をお授けいたします。',
    image: '/omamoriPhoto/omamori-02.png',
  },
  {
    id: 2,
    title: '交通安全守り',
    description: '道中の無事と安全を祈願した御守です。事故なく過ごせますよう、神さまのご加護をお授けいたします。',
    image: '/omamoriPhoto/omamori-03.png',
  },
  {
    id: 3,
    title: '厄除・開運守り',
    description:
      '災いを祓い、運がひらけるよう祈願した御守です。心穏やかに日々をお過ごしいただけますようご加護をお授けいたします。',
    image: '/omamoriPhoto/omamori-04.png',
  },
  {
    id: 4,
    title: '錦守り',
    description: '美しい錦織の御守に、あらゆるご加護を込めてお授けいたします。日々の平穏と幸福をお守りします。',
    image: '/omamoriPhoto/omamori-05.png',
  },
  {
    id: 5,
    title: 'ハチ公守り',
    description:
      '健康を祈願した、忠犬ハチ公の御守です。ご自身や大切な人が、健やかにお過ごしいただけますようお守りいたします。',
    image: '/omamoriPhoto/omamori-06.png',
  },
  {
    id: 6,
    title: '子授け守り',
    description: '健やかな命を授かりますよう祈願した御守です。神さまのご加護のもと、安らかな日々をお過ごしください。',
    image: '/omamoriPhoto/omamori-07.png',
  },
]
const Description = styled.div`
  color: var(--color-gray);
  font-size: var(--font-size-base);
  line-height: 1.6;
  font-family: var(--font-family-sans);
  text-align: center;
  margin: 4rem 0 0 4rem;

  @media (max-width: 1023px) {
    font-size: var(--font-size-base);
    margin: 4rem 0 0 4rem;
  }

  @media (max-width: 767px) {
    font-size: var(--font-size-sm);
    margin: 4rem auto;
  }

  @media (max-width: 374px) {
    font-size: var(--font-size-xs);
    margin: 4rem auto;
  }
`
const Paragraph = styled.p`
  margin: 0;
  padding: 0;
`

const OmamoriSection = () => {
  return (
    <OmamoriSectionWrapper>
      <ContentContainer>
        <TitleContainer>
          <Title>お守り</Title>
        </TitleContainer>

        <OmamoriGrid>
          {omamoriData.map((omamori) => (
            <OmamoriCard key={omamori.id}>
              <OmamoriImage>
                <Image
                  src={omamori.image}
                  alt={`${omamori.title} - 大館神明社のお守り`}
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes='400px'
                />
              </OmamoriImage>
              <OmamoriTitle>{omamori.title}</OmamoriTitle>
              <OmamoriDescription>{omamori.description}</OmamoriDescription>
            </OmamoriCard>
          ))}
        </OmamoriGrid>
      </ContentContainer>
      <Description>
        <Paragraph>その他にも様々なお守りをご用意しております。</Paragraph>
      </Description>
    </OmamoriSectionWrapper>
  )
}

export default OmamoriSection
