import styled from '@emotion/styled'

const GaisaiTopSectionWrapper = styled.section`
  width: 100vw;
  min-height: 60vh;
  position: relative;
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ContentContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`

const Title = styled.h1`
  color: var(--color-brown);
  font-size: var(--font-size-4xl);
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;
  font-family: var(--font-family-serif);
`

const DescriptionContainer = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 3rem;
  border: 2px solid var(--color-gray);
  border-radius: 8px;
`

const Description = styled.div`
  color: var(--color-gray);
  font-size: var(--font-size-base);
  line-height: 1.8;
  font-family: var(--font-family-sans);
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
`

const GaisaiTopSection = () => {
  return (
    <GaisaiTopSectionWrapper>
      <ContentContainer>
        <Title>出張祭事</Title>
        <DescriptionContainer>
          <Description>
            <Paragraph>
              地鎮祭や家屋のお祓いなど、神社へのご参拝が難しい場合には、現地にて
              神さまのご加護をお届けできるよう、出張祭事を承っております。
            </Paragraph>
            <Paragraph>出張祭事の初穂料は、目安として2万円よりお納めいただいております。</Paragraph>
            <Paragraph>ご祈願の内容に応じて真心を込めてご奉仕いたしますので、 どうぞお気軽にご相談ください。</Paragraph>
          </Description>
        </DescriptionContainer>
      </ContentContainer>
    </GaisaiTopSectionWrapper>
  )
}

export default GaisaiTopSection
