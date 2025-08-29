import styled from '@emotion/styled'

const SanpaiSectionWrapper = styled.section`
  width: 100%;
  height: 460px;
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) {
    height: 400px;
  }

  @media (max-width: 768px) {
    height: 350px;
  }

  @media (max-width: 480px) {
    height: 300px;
  }
`

const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background: url('/gokitou/sanpaisahou-06.png') center center / cover no-repeat;
  position: relative;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 100%);
  display: flex;
  align-items: center;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`

const TextArea = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: flex-end;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 95%;
    gap: 1rem;
  }
`

const VerticalTitle = styled.h2`
  color: var(--color-white);
  font-size: var(--font-size-5xl);
  font-weight: 600;
  font-family: var(--font-family-serif);
  writing-mode: vertical-rl;
  letter-spacing: 0.2em;
  line-height: 1.2;
  margin: 0 3rem 0 0;

  @media (max-width: 1024px) {
    font-size: var(--font-size-4xl);
    margin: 0 2rem 0 0;
  }

  @media (max-width: 768px) {
    writing-mode: horizontal-tb;
    font-size: var(--font-size-3xl);
    margin: 0;
    text-align: center;
    align-self: center;
    order: 1;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-2xl);
  }
`

const ContentArea = styled.div`
  flex: 1;
  color: var(--color-white);
  font-family: var(--font-family-serif);
  max-width: 50%;
  text-align: left;

  @media (max-width: 1024px) {
    max-width: 60%;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    order: 2;
  }
`

const ContentTitle = styled.h3`
  font-size: var(--font-size-xl);
  font-weight: 600;
  margin: 0 1rem 1rem 5rem;
  line-height: 1.4;

  @media (max-width: 1024px) {
    font-size: var(--font-size-lg);
    margin: 0 1rem 1rem 3rem;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-base);
    margin: 0 0 0.75rem 0;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-sm);
    margin: 0 0 0.5rem 0;
  }
`

const ContentText = styled.p`
  font-size: var(--font-size-base);
  line-height: 1.8;
  margin: 0 1rem 1rem 5rem;
  text-align: justify;
  max-width: 400px;

  @media (max-width: 1024px) {
    font-size: var(--font-size-sm);
    margin: 0 1rem 1rem 3rem;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-xs);
    line-height: 1.6;
    margin: 0 0 0.75rem 0;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-xs);
    line-height: 1.5;
    margin: 0 0 0.5rem 0;
  }
`

const RitualBox = styled.div`
  border: 1px solid var(--color-white);
  margin: 0 1rem 1rem 5rem;
  padding: 1rem;
  max-width: 400px;

  @media (max-width: 1024px) {
    margin: 0 1rem 1rem 3rem;
    padding: 0.75rem;
  }

  @media (max-width: 768px) {
    margin: 1rem 0;
    padding: 0.75rem;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    margin: 1rem 0;
    padding: 0.5rem;
  }
`

const RitualItem = styled.div`
  margin-bottom: 0.5rem;
  font-size: var(--font-size-sm);
  line-height: 1.6;
  display: flex;
  align-items: flex-start;

  &:last-child {
    margin-bottom: 0;
  }

  strong {
    min-width: 4rem;
    display: inline-block;
  }

  @media (max-width: 1024px) {
    font-size: var(--font-size-xs);
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-xs);
    line-height: 1.4;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-xs);
    line-height: 1.3;
  }
`

const SanpaiSection = () => {
  return (
    <SanpaiSectionWrapper>
      <BackgroundImage />
      <Overlay>
        <TextArea>
          <ContentArea>
            <ContentTitle>二拝二拍手一拝</ContentTitle>
            <ContentText>
              明治時代の神道国教化政策(国家神道)以降、神社の礼法が統一され、「二拝二拍手一拝」が公式な参拝作法として定着していきました。
            </ContentText>
            <RitualBox>
              <RitualItem>
                <strong>二拝</strong> 敬意を示す（始めと終わり）
              </RitualItem>
              <RitualItem>
                <strong>二拍手</strong> 祈りを届ける、神様と心を通わせる
              </RitualItem>
              <RitualItem>
                <strong>一拝</strong> 感謝と締めくくり
              </RitualItem>
            </RitualBox>
          </ContentArea>
          <VerticalTitle>参拝の作法</VerticalTitle>
        </TextArea>
      </Overlay>
    </SanpaiSectionWrapper>
  )
}

export default SanpaiSection
