import styled from '@emotion/styled'

const SanpaiSectionWrapper = styled.section`
  width: 100%;
  height: 460px;
  position: relative;
  overflow: hidden;
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
`

const TextArea = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: flex-end;
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
`

const ContentArea = styled.div`
  flex: 1;
  color: var(--color-white);
  font-family: var(--font-family-serif);
  max-width: 50%;
  text-align: left;
`

const ContentTitle = styled.h3`
  font-size: var(--font-size-xl);
  font-weight: 600;
  margin: 0 1rem 1rem 5rem;
  line-height: 1.4;
`

const ContentText = styled.p`
  font-size: var(--font-size-base);
  line-height: 1.8;
  margin: 0 1rem 1rem 5rem;
  text-align: justify;
  max-width: 400px;
`

const RitualBox = styled.div`
  border: 1px solid var(--color-white);
  margin: 0 1rem 1rem 5rem;
  padding: 1rem;
  max-width: 400px;
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
`

const SanpaiSection = () => {
  return (
    <SanpaiSectionWrapper>
      <BackgroundImage />
      <Overlay>
        <TextArea>
          <ContentArea>
            <ContentTitle>二礼二拍手一礼</ContentTitle>
            <ContentText>
              明治時代の神道国教化政策(国家神道)以降、神社の礼法が統一され、「二礼二拍手一礼」が公式な参拝作法として定着していきました。
            </ContentText>
            <RitualBox>
              <RitualItem>
                <strong>二礼</strong> 敬意を示す（始めと終わり）
              </RitualItem>
              <RitualItem>
                <strong>二拍手</strong> 祈りを届ける、神様と心を通わせる
              </RitualItem>
              <RitualItem>
                <strong>一礼</strong> 感謝と締めくくり
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
