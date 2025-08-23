import styled from '@emotion/styled'
// import { useRouter } from 'next/router'

const ShichigosanPackSectionWrapper = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    min-height: 90vh;
  }

  @media (max-width: 768px) {
    min-height: 80vh;
  }

  @media (max-width: 480px) {
    min-height: 70vh;
  }
`

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0.5rem;
  }
`

const MainTitle = styled.h1`
  color: var(--color-gray);
  font-size: var(--font-size-3xl);
  font-weight: 600;
  text-align: center;
  margin-bottom: 3rem;
  font-family: var(--font-family-serif);

  @media (max-width: 1024px) {
    font-size: var(--font-size-2xl);
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-xl);
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-lg);
  }
`

const PriceTableContainer = styled.div`
  width: 100%;
  max-width: 600px;
  position: relative;
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--color-oud);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  gap: 2rem;

  @media (max-width: 1024px) {
    max-width: 550px;
    padding: 1.5rem;
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 1rem;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    max-width: calc(100% - 1rem);
    padding: 0.75rem;
    gap: 0.75rem;
  }
`

const PriceTableImage = styled.img`
  width: 100%;
  max-width: 800px;
  height: auto;

  @media (max-width: 1024px) {
    max-width: 700px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`

const Notes = styled.div`
  text-align: left;
  color: var(--color-gray);
  font-size: var(--font-size-sm);
  font-family: var(--font-family-serif);
  line-height: 1.8;
  margin-bottom: 0;

  p {
    margin: 0;
    padding: 0;
  }

  @media (max-width: 1024px) {
    font-size: var(--font-size-base);
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    text-align: center;
    font-size: var(--font-size-sm);
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-xs);
    line-height: 1.4;
  }
`

const ShichigosanPackSection = () => {
  return (
    <ShichigosanPackSectionWrapper>
      <ContentContainer>
        <MainTitle>七五三パック料金表</MainTitle>

        <PriceTableContainer>
          <PriceTableImage src='/life/life-08.png' alt='七五三パック料金表' />
          <Notes>
            <p>※パックは10月と11月のみ行っています。</p>
            <p>※衣装代には着付けとヘアメイクの料金が含まれています。</p>
          </Notes>
        </PriceTableContainer>
      </ContentContainer>
    </ShichigosanPackSectionWrapper>
  )
}

export default ShichigosanPackSection
