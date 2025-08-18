import styled from '@emotion/styled'

const OmamoriTopSectionWrapper = styled.section`
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

const OmamoriTopSection = () => {
  return (
    <OmamoriTopSectionWrapper>
      <ContentContainer>
        <Title>お守り・授与品</Title>
        <DescriptionContainer>
          <Description>
            <Paragraph>大館神明社ではさまざまなご利益を授ける お守りや授与品をご用意しております。</Paragraph>
            <Paragraph>ご参拝の際にはぜひ ご自身の願いや状況に合わせご覧ください。</Paragraph>
            <Paragraph>古くなったお守りは神社で御焚き上げも行っております。</Paragraph>
          </Description>
        </DescriptionContainer>
      </ContentContainer>
    </OmamoriTopSectionWrapper>
  )
}

export default OmamoriTopSection
