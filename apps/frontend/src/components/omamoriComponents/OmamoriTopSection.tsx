import styled from '@emotion/styled'

const OmamoriTopSectionWrapper = styled.section`
  width: 100vw;
  min-height: 60vh;
  position: relative;
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-oud) url('/top-motion/haikei.png') center top / 100% auto repeat-y;
  background-attachment: fixed;

  @media (max-width: 1023px) {
    min-height: 50vh;
    padding: 3rem 0;
  }

  @media (max-width: 767px) {
    min-height: 40vh;
    padding: 2rem 0;
  }

  @media (max-width: 374px) {
    min-height: 35vh;
    padding: 1.5rem 0;
  }
`

const ContentContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 0 0;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  @media (max-width: 1024px) {
    margin: 0 0 0;
    max-width: 70%;
    gap: 2.5rem;
  }

  @media (max-width: 767px) {
    margin: 0;
    max-width: 95%;
    padding: 0 1rem;
    gap: 2rem;
  }

  @media (max-width: 374px) {
    margin: 0;
    max-width: 100%;
    padding: 0 0.75rem;
    gap: 1.5rem;
  }
`

const Title = styled.h1`
  color: var(--color-brown);
  font-size: var(--font-size-4xl);
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;
  font-family: var(--font-family-serif);

  @media (max-width: 1023px) {
    font-size: var(--font-size-3xl);
    margin-bottom: 1.5rem;
  }

  @media (max-width: 767px) {
    font-size: var(--font-size-2xl);
    margin-bottom: 1rem;
  }

  @media (max-width: 374px) {
    font-size: var(--font-size-xl);
    margin-bottom: 0.75rem;
  }
`

const DescriptionContainer = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 2rem;
  border: 1px solid var(--color-gray);
  border-radius: 8px;

  @media (max-width: 1024px) {
    max-width: 550px;
    padding: 1.5rem;
  }

  @media (max-width: 767px) {
    max-width: calc(100% - 10rem);
    padding: 1rem;
    border-radius: 6px;
    margin: 0 1rem;
  }

  @media (max-width: 600px) {
    max-width: calc(100% - 3rem);
    padding: 0.5rem;
    border-radius: 6px;
    margin: 0 1rem;
  }

  @media (max-width: 480px) {
    max-width: calc(100% - 3rem);
    padding: 1rem;
    border-radius: 4px;
    margin: 0 0.75rem;
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
    line-height: 1.7;
  }

  @media (max-width: 767px) {
    font-size: var(--font-size-sm);
    line-height: 1.6;
    gap: 0.375rem;
  }

  @media (max-width: 374px) {
    font-size: var(--font-size-xs);
    line-height: 1.5;
    gap: 0.25rem;
  }
`

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
`

const OmamoriTopSection = () => {
  return (
    <OmamoriTopSectionWrapper>
      <ContentContainer>
        <Title>お守り・授与品</Title>
        <DescriptionContainer>
          <Description>
            <Paragraph>
              大館神明社ではさまざまなご利益を授ける お守りを授与しております。
              <br />
              ご参拝の際にはぜひ ご自身の願いや状況に合わせてお受け下さい。
              <br />
              古くなったお守りは神社で御焚き上げも行っております。
            </Paragraph>
          </Description>
        </DescriptionContainer>
      </ContentContainer>
    </OmamoriTopSectionWrapper>
  )
}

export default OmamoriTopSection
