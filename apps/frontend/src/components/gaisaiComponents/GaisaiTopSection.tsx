import styled from '@emotion/styled'

const GaisaiTopSectionWrapper = styled.section`
  width: 80%;
  min-height: 60vh;
  position: relative;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 355px) {
    padding: 1rem;
  }
  @media (min-width: 481px) {
    padding: 1.5rem;
  }

  @media (min-width: 769px) {
    width: 100%;
    padding: 3rem 0;
  }

  @media (min-width: 1025px) {
    width: 100%;
    padding: 4rem 0;
  }
`

const ContentContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  @media (min-width: 355px) {
    padding: 0 1rem;
    gap: 2rem;
  }

  @media (min-width: 481px) {
    padding: 0 1.5rem;
    gap: 2.5rem;
  }

  @media (min-width: 769px) {
    padding: 0 2rem;
    gap: 3rem;
  }

  @media (min-width: 1025px) {
    padding: 0 2.5rem;
    gap: 3rem;
  }
`

const Title = styled.h1`
  color: var(--color-brown);
  font-size: var(--font-size-lg);
  font-weight: 600;
  text-align: center;
  margin: 0 auto 1rem auto;
  font-family: var(--font-family-serif);
  width: 100%;
  max-width: 100%;
  padding: 0 0.5rem;

  @media (min-width: 355px) {
    font-size: var(--font-size-xl);
    margin-bottom: 1rem;
    padding: 0 1rem;
  }

  @media (min-width: 481px) {
    font-size: var(--font-size-2xl);
    margin-bottom: 1.5rem;
    padding: 0 1rem;
  }

  @media (min-width: 769px) {
    font-size: var(--font-size-3xl);
    margin-bottom: 2rem;
    padding: 0;
  }

  @media (min-width: 1025px) {
    font-size: var(--font-size-4xl);
    margin-bottom: 2rem;
    padding: 0;
  }
`

const DescriptionContainer = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 1rem;
  border: 2px solid var(--color-gray);
  border-radius: 8px;
  margin: 0 auto;

  @media (min-width: 355px) {
    padding: 1.5rem;
  }

  @media (min-width: 481px) {
    padding: 2rem;
  }

  @media (min-width: 769px) {
    padding: 2.5rem;
  }

  @media (min-width: 1025px) {
    padding: 3rem;
  }
`

const Description = styled.div`
  color: var(--color-gray);
  font-size: var(--font-size-sm);
  line-height: 1.6;
  font-family: var(--font-family-sans);
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 481px) {
    font-size: var(--font-size-base);
    line-height: 1.7;
  }

  @media (min-width: 769px) {
    font-size: var(--font-size-base);
    line-height: 1.8;
  }

  @media (min-width: 1025px) {
    font-size: var(--font-size-base);
    line-height: 1.8;
  }
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
              地鎮祭や家屋のお祓いなど、現地にて 神さまのご加護をお届けできるよう、出張祭事を承っております。
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
