import styled from '@emotion/styled'
import Image from 'next/image'

const OmamoriGosyuinSectionWrapper = styled.section`
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

const OmamoriGosyuinGrid = styled.div`
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

const OmamoriGosyuinCard = styled.div`
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

const OmamoriGosyuinImage = styled.div`
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

const OmamoriGosyuinTitle = styled.h3`
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

const OmamoriGosyuinDescription = styled.p`
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

const omamoriGosyuinData = [
  {
    id: 1,
    title: '神明社御朱印',
    description:
      '神前にて参拝された証としてお授けする、墨書と朱印のみの御朱印です。心を込めたご参拝の記録として、御神縁をお受けください。',
    image: '/omamoriPhoto/gosyuin-01.png',
  },
  {
    id: 2,
    title: '切り絵御朱印',
    description:
      '忠犬ハチ公ゆかりの地大館ならではの限定御朱印です。切り絵で表現されたハチ公の姿に、忠義と絆への想いを込めました。',
    image: '/omamoriPhoto/gosyuin-02.png',
  },
  {
    id: 3,
    title: '干支御朱印',
    description:
      'その年の大絵馬の干支をあしらった御朱印です。新たな年のご加護と幸運を願い、感謝を込めてお受けください。',
    image: '/omamoriPhoto/gosyuin-03.png',
  },
  {
    id: 4,
    title: '四神御朱印',
    description:
      '東西南北を護る霊獣「四神（青龍・白虎・朱雀・玄武）」を描いた御朱印です。四神全てを授与いただいた方に麒麟の御朱印を無料授与させていただいております。',
    image: '/omamoriPhoto/gosyuin-04.png',
  },
]

const OmamoriGosyuinSection = () => {
  return (
    <OmamoriGosyuinSectionWrapper>
      <ContentContainer>
        <TitleContainer>
          <Title>御朱印</Title>
        </TitleContainer>

        <OmamoriGosyuinGrid>
          {omamoriGosyuinData.map((omamoriGosyuin) => (
            <OmamoriGosyuinCard key={omamoriGosyuin.id}>
              <OmamoriGosyuinImage>
                <Image
                  src={omamoriGosyuin.image}
                  alt={`${omamoriGosyuin.title} - 大館神明社の御朱印`}
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes='400px'
                />
              </OmamoriGosyuinImage>
              <OmamoriGosyuinTitle>{omamoriGosyuin.title}</OmamoriGosyuinTitle>
              <OmamoriGosyuinDescription>{omamoriGosyuin.description}</OmamoriGosyuinDescription>
            </OmamoriGosyuinCard>
          ))}
        </OmamoriGosyuinGrid>
      </ContentContainer>
    </OmamoriGosyuinSectionWrapper>
  )
}

export default OmamoriGosyuinSection
