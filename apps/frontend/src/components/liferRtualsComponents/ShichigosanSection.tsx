import styled from '@emotion/styled'

const ShichigosanSectionWrapper = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
`

const TopSection = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

const LeftContent = styled.div`
  width: 80%;
  flex: 1;
  display: flex;
  align-items: flex-start;
  position: relative;
  gap: 1rem;
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
  margin: 0 0 2rem 8rem;
  white-space: nowrap;
  flex-shrink: 0;
`

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
`

const SectionTitle = styled.h2`
  color: var(--color-shuiro);
  font-size: var(--font-size-2xl);
  font-weight: 600;
  margin: 4rem 0 1rem 0;
  font-family: var(--font-family-serif);
  line-height: 1;
`

const Description = styled.div`
  color: var(--color-gray);
  font-size: var(--font-size-base);
  line-height: 1.6;
  max-width: 100%;
`

const Paragraph = styled.p`
  margin-bottom: 1.5rem;
  font-size: var(--font-size-lg);

  &:last-child {
    margin-bottom: 0;
  }
`

const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ShichigosanImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
`

const BottomSection = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 4rem 4rem;
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
`

const RitualRow = styled.div`
  display: flex;
  border-bottom: 1px solid var(--color-gray);

  &:last-child {
    border-bottom: none;
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
`

const RitualDescription = styled.div`
  flex: 2;
  padding: 2rem;
  color: var(--color-gray);
  font-size: var(--font-size-base);
  line-height: 1.8;
  font-family: var(--font-family-serif);
  text-align: left;
`

const ShichigosanSection = () => {
  return (
    <ShichigosanSectionWrapper>
      <TopSection>
        <LeftContent>
          <VerticalTitle>七五三詣</VerticalTitle>
          <TextContent>
            <SectionTitle>七五三のお話</SectionTitle>
            <Description>
              <Paragraph>
                七五三は、3歳・5歳・7歳の子どもの成長を祝い、神社に参拝して
                今後の健やかな成長を祈願する伝統的な行事です。
              </Paragraph>
              <Paragraph>
                江戸時代に始まったこの風習は、11月15日の「吉日」に行われることが多く、
                子どもの成長の節目として大切にされています。
              </Paragraph>
            </Description>
          </TextContent>
        </LeftContent>

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
