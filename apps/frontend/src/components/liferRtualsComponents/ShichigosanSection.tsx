import styled from '@emotion/styled'

const ShichigosanSectionWrapper = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--color-oud) url('/top-motion/haikei.png') center top / 100% auto repeat-y;
  background-attachment: fixed;
`

const TopSection = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 1024px) {
    padding: 3rem 1.5rem;
    gap: 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 0;
    margin: 0;
    gap: 2rem;
    align-items: center;
  }

  @media (max-width: 480px) {
    padding: 2rem 0;
    margin: 0;
    gap: 2rem;
    align-items: center;
  }
`

const VerticalTitle = styled.h1`
  color: var(--color-brown);
  font-size: var(--font-size-5xl);
  font-weight: 600;
  writing-mode: vertical-rl;
  letter-spacing: 0.2em;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  font-family: var(--font-family-serif);
  line-height: 1.2;
  margin: -2rem 0 0 8rem;
  white-space: nowrap;
  flex-shrink: 0;

  @media (max-width: 1024px) {
    font-size: var(--font-size-4xl);
    margin: -1.5rem 0 1.5rem 7rem;
  }

  @media (max-width: 768px) {
    writing-mode: horizontal-tb;
    font-size: var(--font-size-3xl);
    text-align: center;
    margin: 0 0 1rem 0;
    letter-spacing: 0.1em;
    order: 1;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-2xl);
  }
`

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    order: 3;
  }
`

const SectionTitle = styled.h2`
  color: var(--color-shuiro);
  font-size: var(--font-size-2xl);
  font-weight: 600;
  margin: 4rem 0 1rem 0;
  font-family: var(--font-family-serif);
  line-height: 1;

  @media (max-width: 1024px) {
    font-size: var(--font-size-xl);
    margin: 3rem 0 0.75rem 0;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-lg);
    margin: 2rem 0 0.5rem 0;
    order: 3;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-base);
    margin: 1.5rem 0 0.5rem 0;
  }
`

const Description = styled.div`
  color: var(--color-gray);
  font-size: var(--font-size-base);
  line-height: 1.6;
  max-width: 90%;

  @media (max-width: 1024px) {
    max-width: 90%;
    font-size: var(--font-size-base);
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
    max-width: 80%;
    line-height: 1.4;
    order: 4;
    padding: 0 0.5rem;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-xs);
    line-height: 1.3;
    padding: 0 0.5rem;
  }
`

const Paragraph = styled.p`
  margin-bottom: 1.5rem;
  font-size: var(--font-size-lg);

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 1024px) {
    margin-bottom: 1.25rem;
    font-size: var(--font-size-base);
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    font-size: var(--font-size-sm);
  }

  @media (max-width: 480px) {
    margin-bottom: 0.75rem;
    font-size: var(--font-size-xs);
  }
`

const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    order: 2;
  }
`

const ShichigosanImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  margin: 0 8rem 0 0;

  @media (max-width: 1024px) {
    max-width: 500px;
    margin: 0 1rem 0 0;
  }

  @media (max-width: 768px) {
    max-width: 400px;
    margin: 0 auto;
  }

  @media (max-width: 480px) {
    max-width: 350px;
  }
`

const BottomSection = styled.div`
  width: 100%;
  max-width: 80%;
  margin: 0 0 0 6rem;
  padding: 2rem 4rem 4rem;

  @media (max-width: 1024px) {
    padding: 1.5rem 3rem 3rem;
    margin: 0 0 0 6rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 2rem 2rem;
    margin: 0 auto;
  }

  @media (max-width: 480px) {
    padding: 0.75rem 1rem 1.5rem;
    margin: 0 auto;
  }
`

const RitualTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  border: 1px solid var(--color-gray);
  border-radius: 0;
  overflow: hidden;
  background: transparent;
  box-shadow: none;

  @media (max-width: 768px) {
    border-radius: 4px;
  }
`

const RitualRow = styled.div`
  display: flex;
  border-bottom: 1px solid var(--color-gray);

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const RitualTitle = styled.div`
  flex: 1;
  padding: 2rem;
  background: transparent;
  color: var(--color-brown);
  font-size: var(--font-size-xl);
  font-weight: 600;
  font-family: var(--font-family-serif);
  display: flex;
  align-items: center;
  border-right: 1px solid var(--color-gray);

  @media (max-width: 1024px) {
    padding: 1.5rem;
    font-size: var(--font-size-lg);
  }

  @media (max-width: 768px) {
    padding: 1rem;
    font-size: var(--font-size-base);
    border-right: none;
    border-bottom: 1px solid var(--color-gray);
    text-align: center;
    justify-content: center;
  }

  @media (max-width: 480px) {
    padding: 0.75rem;
    font-size: var(--font-size-sm);
  }
`

const RitualDescription = styled.div`
  flex: 2;
  padding: 2rem;
  color: var(--color-gray);
  font-size: var(--font-size-base);
  line-height: 1.8;
  font-family: var(--font-family-serif);
  text-align: left;

  @media (max-width: 1024px) {
    padding: 1.5rem;
    font-size: var(--font-size-base);
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    font-size: var(--font-size-sm);
    line-height: 1.5;
    text-align: center;
  }

  @media (max-width: 480px) {
    padding: 0.75rem;
    font-size: var(--font-size-xs);
    line-height: 1.4;
  }
`

const ShichigosanSection = () => {
  return (
    <ShichigosanSectionWrapper>
      <TopSection>
        <VerticalTitle>七五三詣</VerticalTitle>
        <TextContent>
          <SectionTitle>七五三のお話</SectionTitle>
          <Description>
            <Paragraph>
              七五三は、3歳・5歳・7歳の子どもの成長を祝い、神社に参拝して 今後の健やかな成長を祈願する伝統的な行事です。
            </Paragraph>
            <Paragraph>
              江戸時代に始まったこの風習は、11月15日の「吉日」に行われることが多く、
              子どもの成長の節目として大切にされています。
            </Paragraph>
          </Description>
        </TextContent>
        <ImageSection>
          <ShichigosanImage src='/life/life-05.png' alt='七五三の写真' />
        </ImageSection>
      </TopSection>

      <BottomSection>
        <RitualTable>
          <RitualRow>
            <RitualTitle>三歳「髪置き(かみおき)」の儀</RitualTitle>
            <RitualDescription>
              3歳になり、男児と女児が髪を伸ばす儀式 平安時代には、3歳まで髪を伸ばさない習慣がありました。
            </RitualDescription>
          </RitualRow>

          <RitualRow>
            <RitualTitle>五歳「袴着(はかまぎ)」の儀</RitualTitle>
            <RitualDescription>
              5歳になり、男の子は初めて袴を着用する儀式 平安時代から行われており、男児の健やかな成長を願うものです。
            </RitualDescription>
          </RitualRow>

          <RitualRow>
            <RitualTitle>七歳「帯締め(おびしめ)」の儀</RitualTitle>
            <RitualDescription>
              7歳になり、女児が付けひもをはずして、大人の帯を締める儀式
              江戸時代末期から行われ、女の子の成長を祝福するものです。
            </RitualDescription>
          </RitualRow>
        </RitualTable>
      </BottomSection>
    </ShichigosanSectionWrapper>
  )
}

export default ShichigosanSection
