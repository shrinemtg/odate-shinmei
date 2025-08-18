import styled from '@emotion/styled'
import Image from 'next/image'

const OmamoriOhudaSectionWrapper = styled.section`
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

const OmamoriOhudaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex: 1;
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
`

const OmamoriOhudaTitle = styled.h3`
  color: var(--color-brown);
  font-size: var(--font-size-lg);
  font-weight: 600;
  text-align: left;
  font-family: var(--font-family-serif);
  margin: 0 0 0.5rem 0;
`

const OmamoriOhudaDescription = styled.p`
  color: var(--color-gray);
  font-size: var(--font-size-sm);
  line-height: 1.6;
  text-align: left;
  font-family: var(--font-family-sans);
  margin: 0;
  max-width: 280px;
`

const omamoriOhudaData = [
  {
    id: 1,
    title: '木札(商売繁盛)',
    description: '商売繁盛を祈願した木札です。商運隆昌、千客万来のご加護をお授けいたします。',
    image: '/omamoriPhoto/ohuda-01.png',
  },
  {
    id: 2,
    title: '木札(家内安全)',
    description: '家内安全を祈願した木札です。ご家族皆さまが健やかに暮らせますよう、お守りいたします。',
    image: '/omamoriPhoto/ohuda-02.png',
  },
  {
    id: 3,
    title: '紙札(大館神明社神符)',
    description: '大館神明社の御神徳をいただく紙札です。日々の無事と平穏を神さまがお守りくださいます。',
    image: '/omamoriPhoto/ohuda-03.png',
  },
  {
    id: 4,
    title: '紙札(天照皇大神宮)',
    description: '天照皇大神宮の御神徳を宿した紙札です。清らかな光のご加護をもって、心身の平安をお授けいたします。',
    image: '/omamoriPhoto/ohuda-04.png',
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
                  alt={omamoriOhuda.title}
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
      <Description>
        <Paragraph>その他にも様々な神礼・礼儀札をご用意しております。</Paragraph>
      </Description>
    </OmamoriOhudaSectionWrapper>
  )
}

export default OmamoriOhudaSection
