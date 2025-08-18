import styled from '@emotion/styled'
import Image from 'next/image'

const OmamoriGosyuinSectionWrapper = styled.section`
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

const OmamoriGosyuinGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex: 1;
  gap: 2rem;
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
`

const OmamoriGosyuinTitle = styled.h3`
  color: var(--color-brown);
  font-size: var(--font-size-lg);
  font-weight: 600;
  text-align: left;
  font-family: var(--font-family-serif);
  margin: 0 0 0.5rem 0;
`

const OmamoriGosyuinDescription = styled.p`
  color: var(--color-gray);
  font-size: var(--font-size-sm);
  line-height: 1.6;
  text-align: left;
  font-family: var(--font-family-sans);
  margin: 0;
  max-width: 280px;
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
                  alt={omamoriGosyuin.title}
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
      <Description>
        <Paragraph>その他にも様々な御朱印をご用意しております。</Paragraph>
      </Description>
    </OmamoriGosyuinSectionWrapper>
  )
}

export default OmamoriGosyuinSection
