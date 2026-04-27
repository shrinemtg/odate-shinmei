import styled from '@emotion/styled'

const GaisaiTopSectionWrapper = styled.section`
  width: 100%;
  position: relative;
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-oud) url('/top-motion/haikei.webp') center top / 100% auto repeat-y;
  background-attachment: fixed;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 3rem 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1.5rem 0;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0.5rem 0;
  }
`

const ContentContainer = styled.div`
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  padding: 0 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  @media (max-width: 1024px) {
    padding: 0 2rem;
    gap: 3rem;
  }

  @media (max-width: 768px) {
    padding: 0 1.5rem;
    gap: 2.5rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
    gap: 2rem;
  }
`

const Title = styled.h1`
  color: var(--color-brown);
  font-size: var(--font-size-5xl);
  font-weight: 600;
  text-align: center;
  margin: 2rem auto;
  font-family: var(--font-family-serif);
  width: 100%;
  max-width: 100%;

  @media (max-width: 1024px) {
    font-size: var(--font-size-4xl);
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-3xl);
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-2xl);
    margin-bottom: 1rem;
  }
`

const DescriptionContainer = styled.div`
  width: 100%;
  max-width: 70%;
  padding: 2rem 1rem;
  border: 2px solid var(--color-gray);
  border-radius: 8px;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 68%;
    padding: 2rem 1rem;
  }

  @media (max-width: 768px) {
    max-width: 80%;
    padding: 2rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
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

  @media (max-width: 1024px) {
    font-size: var(--font-size-base);
    line-height: 1.8;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-base);
    line-height: 1.7;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-sm);
    line-height: 1.6;
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
