import styled from '@emotion/styled'
import Image from 'next/image'

const OmamoriOhudaSectionWrapper = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  padding: 4rem 0;
  background: var(--color-oud) url('/top-motion/haikei.webp') center top / 100% auto repeat-y;
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

const OmamoriOhudaGrid = styled.div`
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

const OmamoriOhudaCard = styled.div`
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

const OmamoriOhudaImage = styled.div`
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

const OmamoriOhudaTitle = styled.h3`
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

const OmamoriOhudaDescription = styled.p`
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

const omamoriOhudaData = [
  {
    id: 1,
    title: '天照皇大神宮(紙札・大中小)',
    description:
      '天照皇大神宮の御神徳を宿した紙札です。大・中・小でご用意しております。清らかな光のご加護をもって、心身の平安をお授けいたします。',
    image: '/omamoriPhoto/ohuda-01.webp',
  },
  {
    id: 2,
    title: '大館神明社神符(木札・紙札)',
    description: '大館神明社の御神徳をいただく紙札です。日々の無事と平穏を神さまがお守りくださいます。',
    image: '/omamoriPhoto/ohuda-02.webp',
  },
  {
    id: 3,
    title: '家内安全(木札・紙札)',
    description: '家内安全を祈願した木札です。ご家族皆さまが健やかに暮らせますよう、お守りいたします。',
    image: '/omamoriPhoto/ohuda-03.webp',
  },
  {
    id: 4,
    title: '商売繁盛(木札)・厄除け(紙札)',
    description:
      '商売繁盛を祈願した木札、厄除けを祈願した紙札です。商運隆昌は千客万来、厄除けは災難を避けるご加護をお授けいたします。',
    image: '/omamoriPhoto/ohuda-04.webp',
  },
]

const OmamoriOhudaSection = () => {
  return (
    <OmamoriOhudaSectionWrapper>
      <ContentContainer>
        <TitleContainer>
          <Title>神礼・礼儀札</Title>
        </TitleContainer>

        <OmamoriOhudaGrid>
          {omamoriOhudaData.map((omamoriOhuda) => (
            <OmamoriOhudaCard key={omamoriOhuda.id}>
              <OmamoriOhudaImage>
                <Image
                  src={omamoriOhuda.image}
                  alt={`${omamoriOhuda.title} - 大館神明社の神礼・礼儀札`}
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes='400px'
                />
              </OmamoriOhudaImage>
              <OmamoriOhudaTitle>{omamoriOhuda.title}</OmamoriOhudaTitle>
              <OmamoriOhudaDescription>{omamoriOhuda.description}</OmamoriOhudaDescription>
            </OmamoriOhudaCard>
          ))}
        </OmamoriOhudaGrid>
      </ContentContainer>
    </OmamoriOhudaSectionWrapper>
  )
}

export default OmamoriOhudaSection
