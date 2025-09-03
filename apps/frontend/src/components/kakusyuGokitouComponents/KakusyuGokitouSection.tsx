import styled from '@emotion/styled'

const KakusyuGokitouSectionWrapper = styled.section`
  width: 100%;
  min-height: 100%;
  position: relative;
  padding: 4rem 0;
  margin: 4rem 0 3rem;

  @media (max-width: 1024px) {
    padding: 3rem 0;
  }

  @media (max-width: 768px) {
    padding: 2.5rem 0;
  }

  @media (max-width: 480px) {
    padding: 2rem 0;
  }
`

const ContentContainer = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 6rem;

  @media (max-width: 1024px) {
    padding: 0 2rem;
    gap: 6rem;
  }

  @media (max-width: 768px) {
    padding: 0;
    gap: 6rem;
    align-items: center;
  }

  @media (max-width: 480px) {
    padding: 0;
    gap: 6rem;
  }
`

const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  max-width: 80%;
  flex-direction: row;
  align-items: flex-start;
  position: relative;
  margin: 0 0 0 7rem;

  @media (max-width: 1024px) {
    max-width: 80%;
    margin: 0 0 0 6rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    max-width: 100%;
    margin: 0 auto;
    text-align: center;
  }
`

const RightSectionContainer = styled(SectionContainer)`
  flex-direction: row-reverse;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const VerticalTitle = styled.h2`
  color: var(--color-brown);
  font-size: var(--font-size-5xl);
  font-weight: 600;
  writing-mode: vertical-rl;
  letter-spacing: 0.3em;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  font-family: var(--font-family-serif);
  line-height: 1.2;
  text-align: center;
  margin: 0 2rem 0 2rem;
  flex-shrink: 0;
  order: 0;
  width: auto;

  @media (max-width: 1024px) {
    font-size: var(--font-size-4xl);
    margin: 0 1.5rem 0 1.5rem;
  }

  @media (max-width: 768px) {
    writing-mode: horizontal-tb;
    font-size: var(--font-size-3xl);
    letter-spacing: 0.2em;
    margin: 0;
    width: 100%;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-2xl);
    width: 100%;
  }
`

const TextSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem 0 0 0;
  width: 100%;
  order: 0;

  @media (max-width: 1024px) {
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    gap: 1rem;
    margin: 0 auto;
    width: 100%;
    max-width: 80%;
    order: 1;
    text-align: center;
  }

  @media (max-width: 480px) {
    gap: 1.25rem;
    width: 100%;
    max-width: 80%;
    order: 1;
  }
`

const Description = styled.div`
  color: var(--color-gray);
  font-size: var(--font-size-base);
  line-height: 1.6;
  font-family: var(--font-family-sans);

  @media (max-width: 1024px) {
    font-size: var(--font-size-base);
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-base);
    line-height: 1.6;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-sm);
    line-height: 1.5;
  }
`

const Paragraph = styled.p`
  margin-bottom: 1rem;
  max-width: 400px;
  font-size: var(--font-size-base);

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 1024px) {
    margin-bottom: 1rem;
    font-size: var(--font-size-base);
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    font-size: var(--font-size-base);
    max-width: 100%;
  }

  @media (max-width: 480px) {
    margin-bottom: 0.875rem;
    font-size: var(--font-size-sm);
  }
`

const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  order: 0;

  @media (max-width: 768px) {
    order: 2;
    align-items: center;
    width: 100%;
    max-width: 80%;
  }

  @media (max-width: 480px) {
    order: 2;
    align-items: center;
    width: 90%;
  }
`

const CarImageSection = styled(ImageSection)`
  margin: 7rem 2rem 0 0;

  @media (max-width: 1024px) {
    margin: 9rem 1.5rem 0 0;
  }

  @media (max-width: 768px) {
    margin: 1rem 0 0 0;
  }

  @media (max-width: 480px) {
    margin: 0;
  }
`

const GoukakuImageSection = styled(ImageSection)`
  margin: 2rem 0 2rem 2rem;

  @media (max-width: 1024px) {
    margin: 5rem 0 1.5rem 1.5rem;
  }

  @media (max-width: 768px) {
    margin: 0 auto;
  }

  @media (max-width: 480px) {
    margin: 0 auto;
  }
`

const HisshouImageSection = styled(ImageSection)`
  margin: 1rem 2rem 3rem 0;

  @media (max-width: 1024px) {
    margin: 4rem 1.5rem 2rem 0;
  }

  @media (max-width: 768px) {
    margin: 1rem 1.5rem 2rem 0;
  }

  @media (max-width: 480px) {
    margin: 0 1.5rem 2rem 0;
  }
`

const KenkouImageSection = styled(ImageSection)`
  margin: 2rem 0 3rem 2rem;

  @media (max-width: 1024px) {
    margin: 4rem 0 2rem 1.5rem;
  }

  @media (max-width: 768px) {
    margin: 1rem auto;
  }

  @media (max-width: 480px) {
    margin: 0 auto;
  }
`

const TravelImageSection = styled(ImageSection)`
  margin: 2rem 1rem 10rem 0;

  @media (max-width: 1024px) {
    margin: 5rem 0.75rem 7rem 0;
  }

  @media (max-width: 768px) {
    margin: 0 auto;
  }

  @media (max-width: 480px) {
    margin: 0 auto;
  }
`

const SectionImage = styled.img`
  max-width: 100%;
  height: auto;

  @media (max-width: 1024px) {
    max-width: 90%;
  }

  @media (max-width: 768px) {
    max-width: 90%;
  }

  @media (max-width: 480px) {
    max-width: 85%;
  }
`

const RightVerticalTitle = styled(VerticalTitle)`
  margin: 0 2rem 0 0;

  @media (max-width: 1024px) {
    margin: 0 1.5rem 0 0;
  }

  @media (max-width: 768px) {
    margin: 0;
  }
`

const RightTextSection = styled(TextSection)`
  margin: 2rem 2rem 0 2rem;

  @media (max-width: 1024px) {
    margin: 1.5rem 1.5rem 0 1.5rem;
  }

  @media (max-width: 768px) {
    margin: 0;
  }
`

const KakusyuGokitouSection = () => {
  return (
    <KakusyuGokitouSectionWrapper>
      <ContentContainer>
        {/* 車払い */}
        <SectionContainer>
          <VerticalTitle>車払い</VerticalTitle>
          <TextSection>
            <Description>
              <Paragraph>
                新たにお車をお求めになった際や、日頃の交通安全を願われる方のために執り行うご祈祷です。
                <br />
                車両を神前にお運びいただき、神職が祝詞を奏上し、お祓いを行います。車に宿る災厄を祓い、事故や故障から守られ、安全で快適な運転が続くようご祈念いたします。
                <br />
                自動車はもちろん、バイク、自転車、トラックなど各種車両にも対応しております。ご家族の送迎やお仕事で日常的に運転される方にとっても、大切な安心の祈願となります。
              </Paragraph>
            </Description>
          </TextSection>
          <CarImageSection>
            <SectionImage src='/kakusyuGokitouPhoto/kakusyugokitou-02.png' alt='車払いのイラスト' />
          </CarImageSection>
        </SectionContainer>

        {/* 合格祈願 */}
        <RightSectionContainer>
          <RightVerticalTitle>合格祈願</RightVerticalTitle>
          <RightTextSection>
            <Description>
              <Paragraph>
                受験や資格試験、昇進試験など、人生の大切な節目を迎える皆さまの努力が実を結び、志望の結果を得られますよう、学問の神さまに願いを込めてご祈祷いたします。
                <br />
                志をもって励んでこられた皆さまの力が十分に発揮されるように、集中力と知恵を授けていただけるよう祈りを捧げます。
                <br />
                ご本人はもちろん、ご家族による代理のご祈願も承っております。絵馬や合格守などの授与品もご用意しておりますので、併せてお受けください。
              </Paragraph>
            </Description>
          </RightTextSection>
          <GoukakuImageSection>
            <SectionImage src='/kakusyuGokitouPhoto/kakusyugokitou-03.png' alt='合格祈願のイラスト' />
          </GoukakuImageSection>
        </RightSectionContainer>

        {/* 必勝祈願 */}
        <SectionContainer>
          <VerticalTitle>必勝祈願</VerticalTitle>
          <TextSection>
            <Description>
              <Paragraph>
                大事な勝負や試練に挑む際、気力と運気を高め、勝利を引き寄せるためのご祈祷です。
                <br />
                スポーツ大会、就職活動、受験、選挙、ビジネスでの重要な商談やプロジェクトなど、人生の節目における"ここ一番"の場面で、力を尽くす皆さまを神さまのご加護で後押しいたします。
                <br />
                困難に打ち克ち、望む結果が得られますよう、神前にて厳粛に祈りを捧げます。勝守（かちまもり）などの授与品もご用意しております。
              </Paragraph>
            </Description>
          </TextSection>
          <HisshouImageSection>
            <SectionImage src='/kakusyuGokitouPhoto/kakusyugokitou-05.png' alt='必勝祈願のイラスト' />
          </HisshouImageSection>
        </SectionContainer>

        {/* 病気平癒祈願 */}
        <RightSectionContainer>
          <RightVerticalTitle>病気平癒祈願</RightVerticalTitle>
          <RightTextSection>
            <Description>
              <Paragraph>
                心身の健やかさを願い、病気やけがを遠ざけるとともに、すでに病を患っておられる方の快癒を祈るご祈祷です。
                <br />
                日々の健康維持を祈るものから、長引く病気の平癒、手術の無事成功、出産の安全など、幅広く承っております。
                <br />
                ご本人が参拝できない場合でも、ご家族や代理の方によるご祈祷も可能です。神前にて神職が心を込めてお祈りし、皆さまが安心して日々をお過ごしいただけるよう、ご加護を願い上げます。
              </Paragraph>
            </Description>
          </RightTextSection>
          <KenkouImageSection>
            <SectionImage src='/kakusyuGokitouPhoto/kakusyugokitou-06.png' alt='病気平癒祈願のイラスト' />
          </KenkouImageSection>
        </RightSectionContainer>

        {/* 旅行祈願 */}
        <SectionContainer>
          <VerticalTitle>旅行祈願</VerticalTitle>
          <TextSection>
            <Description>
              <Paragraph>
                旅先での無事と平穏、そしてよき思い出が得られるようにと願うご祈祷です。
                <br />
                国内外へのご旅行、ご出張、お遍路や巡礼など、あらゆる道中の安全を祈り、神前にて祈願いたします。
                <br />
                長距離の移動や飛行機・船などを利用される方にもおすすめです。ご出発前にお参りいただくことで、安心して道中をお過ごしいただけるよう、神さまのご加護をお受けください。旅行守の授与も行っております。
              </Paragraph>
            </Description>
          </TextSection>
          <TravelImageSection>
            <SectionImage src='/kakusyuGokitouPhoto/kakusyugokitou-08.png' alt='旅行祈願のイラスト' />
          </TravelImageSection>
        </SectionContainer>
      </ContentContainer>
    </KakusyuGokitouSectionWrapper>
  )
}

export default KakusyuGokitouSection
