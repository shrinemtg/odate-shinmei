import styled from '@emotion/styled'

const EventSectionWrapper = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  padding: 4rem 0;

  @media (max-width: 1024px) {
    padding: 3rem 0;
  }

  @media (max-width: 768px) {
    padding: 2rem 0;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0;
  }
`

const ContentContainer = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0 0 0 6rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (max-width: 1024px) {
    max-width: 90%;
    padding: 0 0 0 6rem;
    gap: 3rem;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0;
    gap: 2.5rem;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    padding: 0;
    gap: 2rem;
  }
`

const SectionContainer = styled.div`
  width: 100%;
  max-width: 80%;
  display: flex;
  align-items: flex-start;
  position: relative;
  margin: 0 0 0 3em;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 90%;
    margin: 0 0 0 3em;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    max-width: 100%;
    margin: 0 auto;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    max-width: 100%;
    margin: 0 auto;
  }
`

const RightSectionContainer = styled(SectionContainer)`
  flex-direction: row-reverse;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 90%;
    margin: 0 0 0 3rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    max-width: 100%;
    margin: 0 auto;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    max-width: 100%;
    margin: 0 auto;
  }
`

const VerticalTitle = styled.h2`
  color: var(--color-brown);
  font-size: var(--font-size-4xl);
  font-weight: 600;
  writing-mode: vertical-rl;
  letter-spacing: 0.3em;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  font-family: var(--font-family-serif);
  line-height: 1.2;
  white-space: nowrap;
  margin: 0 2rem 0;
  flex-shrink: 0;

  @media (max-width: 1024px) {
    font-size: var(--font-size-3xl);
    margin: 0 1.5rem 0;
  }

  @media (max-width: 768px) {
    writing-mode: horizontal-tb;
    font-size: var(--font-size-2xl);
    margin: 0 0 1rem 0;
    text-align: center;
    letter-spacing: 0.2em;
    order: 1;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-xl);
    margin: 0 0 0.75rem 0;
  }
`

const MonthText = styled.span`
  color: var(--color-brown);
  font-size: var(--font-size-2xl);
  font-weight: 600;
  writing-mode: vertical-rl;
  letter-spacing: 0.2em;
  font-family: var(--font-family-serif);
  line-height: 1.2;
  white-space: nowrap;
  margin-bottom: 0.5rem;

  @media (max-width: 1024px) {
    font-size: var(--font-size-xl);
  }

  @media (max-width: 768px) {
    writing-mode: horizontal-tb;
    font-size: var(--font-size-lg);
    margin-bottom: 0.25rem;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-base);
  }
`

const EventTitle = styled.span`
  color: var(--color-brown);
  font-size: var(--font-size-5xl);
  font-weight: 600;
  writing-mode: vertical-rl;
  letter-spacing: 0.3em;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  font-family: var(--font-family-serif);
  line-height: 1.2;
  white-space: nowrap;

  @media (max-width: 1024px) {
    font-size: var(--font-size-4xl);
  }

  @media (max-width: 768px) {
    writing-mode: horizontal-tb;
    font-size: var(--font-size-3xl);
    letter-spacing: 0.2em;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-2xl);
  }
`

const RightVerticalTitle = styled(VerticalTitle)`
  margin: 0 2rem 0 0;

  @media (max-width: 1024px) {
    margin: 0 1.5rem 0 0;
  }

  @media (max-width: 768px) {
    margin: 0 0 1rem 0;
    order: 1;
  }

  @media (max-width: 480px) {
    margin: 0 0 0.75rem 0;
  }
`

const TextSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem 0 0 0;

  @media (max-width: 1024px) {
    gap: 1.25rem;
    margin: 1.5rem 0 0 0;
  }

  @media (max-width: 768px) {
    gap: 1rem;
    margin: 0;
    order: 2;
    width: 90%;
    max-width: 90%;
    text-align: center;
  }

  @media (max-width: 480px) {
    gap: 0.75rem;
    max-width: 80%;
  }
`

const RightTextSection = styled(TextSection)`
  margin: 2rem 2rem 0 2rem;

  @media (max-width: 1024px) {
    margin: 1.5rem 1.5rem 0 1.5rem;
  }

  @media (max-width: 768px) {
    margin: 0;
    order: 2;
    width: 90%;
    max-width: 90%;
    text-align: center;
  }

  @media (max-width: 480px) {
    max-width: 80%;
  }
`

const Description = styled.div`
  color: var(--color-gray);
  font-size: var(--font-size-base);
  line-height: 1.6;
  font-family: var(--font-family-sans);
  margin: 0.5rem 0 0;

  @media (max-width: 1024px) {
    font-size: var(--font-size-base);
    line-height: 1.5;
    margin: 0.375rem 0 0 0;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
    line-height: 1.4;
    margin: 0.25rem auto 0 auto;
    text-align: center;
    width: 100%;
    max-width: 80%;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-xs);
    line-height: 1.3;
    margin: 0.125rem auto 0 auto;
    max-width: 80%;
  }
`

const Paragraph = styled.p`
  margin-bottom: 1rem;
  font-size: var(--font-size-base);
  white-space: pre-line;
  overflow-wrap: break-word;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 1024px) {
    font-size: var(--font-size-base);
    margin-bottom: 0.875rem;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
    margin-bottom: 0.75rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-sm);
    margin-bottom: 0.625rem;
  }
`

const DateInfo = styled.div`
  color: var(--color-brown);
  font-size: var(--font-size-base);
  font-weight: 600;
  margin-top: 1rem;
  font-family: var(--font-family-serif);

  @media (max-width: 1024px) {
    font-size: var(--font-size-base);
    margin-top: 0.875rem;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
    margin-top: 0.75rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-xs);
    margin-top: 0.625rem;
  }
`

const DetailButton = styled.a`
  display: inline-block;
  background-color: var(--color-brown);
  color: white;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  border-radius: 4px;
  font-size: var(--font-size-sm);
  font-weight: 600;
  font-family: var(--font-family-sans);
  margin-top: 1.5rem;
  transition: background-color 0.3s ease;
  border: 2px solid var(--color-brown);

  &:hover {
    background-color: transparent;
    color: var(--color-brown);
  }

  &:focus {
    outline: 2px solid var(--color-brown);
    outline-offset: 2px;
  }

  @media (max-width: 1024px) {
    padding: 0.625rem 1.25rem;
    font-size: var(--font-size-sm);
    margin-top: 1.25rem;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: var(--font-size-xs);
    margin-top: 1rem;
    text-align: center;
    display: block;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0.875rem;
    font-size: var(--font-size-xs);
    margin-top: 0.875rem;
  }
`

const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    width: 100%;
    order: 3;
  }
`

const SectionImage = styled.img`
  width: 100%;
  max-width: 320px;
  height: auto;
  object-fit: cover;

  @media (max-width: 1024px) {
    max-width: 280px;
  }

  @media (max-width: 768px) {
    max-width: 280px;
    margin: 0 auto;
  }

  @media (max-width: 480px) {
    max-width: 250px;
    margin: 0 auto;
  }
`

// 各祭事用の画像セクション
const GantanImageSection = styled(ImageSection)`
  margin: 4rem 0 0 0;

  @media (max-width: 1024px) {
    margin: 3rem 0 0 0;
  }

  @media (max-width: 768px) {
    margin: 1rem 0 2rem 0;
  }

  @media (max-width: 480px) {
    margin: 0.75rem 0 1.5rem 0;
  }
`

const ShinnenImageSection = styled(ImageSection)`
  margin: 4.5rem 0 2rem 0;

  @media (max-width: 1024px) {
    margin: 3.5rem 0 1.5rem 0;
  }

  @media (max-width: 768px) {
    margin: 1rem 0 2rem 0;
  }

  @media (max-width: 480px) {
    margin: 0.75rem 0 1.5rem 0;
  }
`

const YaharaiImageSection = styled(ImageSection)`
  margin: 4rem 0 3rem 0;

  @media (max-width: 1024px) {
    margin: 3rem 0 2rem 0;
  }

  @media (max-width: 768px) {
    margin: 1rem 0 2rem 0;
  }

  @media (max-width: 480px) {
    margin: 0.75rem 0 1.5rem 0;
  }
`

const NyugakuImageSection = styled(ImageSection)`
  margin: 4.5rem 0 3rem 0;

  @media (max-width: 1024px) {
    margin: 3.5rem 0 2rem 0;
  }

  @media (max-width: 768px) {
    margin: 1rem 0 2rem 0;
  }

  @media (max-width: 480px) {
    margin: 0.75rem 0 1.5rem 0;
  }
`

const NagoshiImageSection = styled(ImageSection)`
  margin: 4.5rem 0 2rem 0;

  @media (max-width: 1024px) {
    margin: 3.5rem 0 1.5rem 0;
  }

  @media (max-width: 768px) {
    margin: 1rem 0 2rem 0;
  }

  @media (max-width: 480px) {
    margin: 0.75rem 0 1.5rem 0;
  }
`

const KoreisaiImageSection = styled(ImageSection)`
  margin: 4.5rem 0 2rem 0;

  @media (max-width: 1024px) {
    margin: 3.5rem 0 1.5rem 0;
  }

  @media (max-width: 768px) {
    margin: 1rem 0 2rem 0;
  }

  @media (max-width: 480px) {
    margin: 0.75rem 0 1.5rem 0;
  }
`

const YomiyasaiImageSection = styled(ImageSection)`
  margin: 4.5rem 0 3rem 0;

  @media (max-width: 1024px) {
    margin: 3.5rem 0 2rem 0;
  }

  @media (max-width: 768px) {
    margin: 1rem 0 2rem 0;
  }

  @media (max-width: 480px) {
    margin: 0.75rem 0 1.5rem 0;
  }
`

const NichireisaiImageSection = styled(ImageSection)`
  margin: 4.5rem 0 2rem 0;

  @media (max-width: 1024px) {
    margin: 3.5rem 0 1.5rem 0;
  }

  @media (max-width: 768px) {
    margin: 1rem 0 2rem 0;
  }

  @media (max-width: 480px) {
    margin: 0.75rem 0 1.5rem 0;
  }
`

const GoshinkoImageSection = styled(ImageSection)`
  margin: 4.5rem 0 2rem 0;

  @media (max-width: 1024px) {
    margin: 3.5rem 0 1.5rem 0;
  }

  @media (max-width: 768px) {
    margin: 1rem 0 2rem 0;
  }

  @media (max-width: 480px) {
    margin: 0.75rem 0 1.5rem 0;
  }
`

const ShichigosanImageSection = styled(ImageSection)`
  margin: 4.5rem 0 2rem 0;

  @media (max-width: 1024px) {
    margin: 3.5rem 0 1.5rem 0;
  }

  @media (max-width: 768px) {
    margin: 1rem 0 2rem 0;
  }

  @media (max-width: 480px) {
    margin: 0.75rem 0 1.5rem 0;
  }
`

const ToshikoshiImageSection = styled(ImageSection)`
  margin: 6.5rem 0 2rem 0;

  @media (max-width: 1024px) {
    margin: 5rem 0 1.5rem 0;
  }

  @media (max-width: 768px) {
    margin: 1rem 0 2rem 0;
  }

  @media (max-width: 480px) {
    margin: 0.75rem 0 1.5rem 0;
  }
`

const ToshikoshiDescription = styled(Description)`
  margin: 1.5rem 0 0 0;

  @media (max-width: 1024px) {
    margin: 1rem 0 0 0;
  }

  @media (max-width: 768px) {
    margin: 0.25rem auto 0 auto;
    text-align: center;
    width: 100%;
    max-width: 80%;
  }

  @media (max-width: 480px) {
    margin: 0.125rem auto 0 auto;
  }
`

const EventSection = () => {
  return (
    <EventSectionWrapper>
      <ContentContainer>
        {/* 元旦祭 */}
        <SectionContainer>
          <VerticalTitle>
            <MonthText>一月</MonthText>
            <EventTitle>元旦祭</EventTitle>
          </VerticalTitle>
          <TextSection>
            <Description>
              <Paragraph>
                元旦祭（がんたんさい）は、新年のはじまりにあたり、皇室の安泰をはじめ、氏子崇敬者の無病息災・家内安全・商売繁盛などを祈念する、年の最初の大切なお祭りです。
                <br />
                大館神明社では、毎年一月一日に歳神様（としがみさま）をお迎えし、地域の皆さまとともに、新しい年の平穏無事と発展をお祈りいたします。
                <br />
                清らかな気持ちで新年をお迎えいただくために、ぜひご家族そろってご参拝ください。
              </Paragraph>
              <DateInfo>開催日時：1月1日</DateInfo>
            </Description>
          </TextSection>
          <GantanImageSection>
            <SectionImage src='/eventPhoto/event-01.png' alt='元旦祭の様子' />
          </GantanImageSection>
        </SectionContainer>

        {/* 新年祈祷 */}
        <RightSectionContainer>
          <RightVerticalTitle>
            <MonthText>一月</MonthText>
            <EventTitle>新年祈祷</EventTitle>
          </RightVerticalTitle>
          <RightTextSection>
            <Description>
              <Paragraph>
                新しい年を健やかに、穏やかに過ごせるように
                <br />
                大館神明社では、年の初めにあたって、皆さまの家内安全・無病息災・商売繁盛・厄除開運などをお祈りする「新年祈祷」を承っております。
                <br />
                個人やご家族はもちろん、企業・団体のご祈祷も受け付けております。
                <br />
                新しい年のはじまりに、ぜひご参拝いただき、神さまとのご縁を深めてください。
                <br />
              </Paragraph>
              <DateInfo>開催期間：1月2日～1月15日前後</DateInfo>
            </Description>
          </RightTextSection>
          <ShinnenImageSection>
            <SectionImage src='/eventPhoto/event-02.png' alt='新年祈祷の様子' />
          </ShinnenImageSection>
        </RightSectionContainer>

        {/* 厄払い */}
        <SectionContainer>
          <VerticalTitle>
            <MonthText>二月</MonthText>
            <EventTitle>厄払い</EventTitle>
          </VerticalTitle>
          <TextSection>
            <Description>
              <Paragraph>
                厄年は、身体や環境の変化が起こりやすく、古くから"慎みの年"とされてきました。
                <br />
                大館神明社では、厄年を迎えた皆さまが、災厄を避け、健やかな日々を送れるよう、「厄除け・厄払い」のご祈祷を執り行っております。
                <br />
                神さまの御前で心を整え、日々の感謝とこれからの無事を祈ることは、これまでの歩みを見つめ直す良い機会でもあります。
                <br />
                ご本人はもちろん、ご家族の代理でのご祈祷も承っておりますので、どうぞお気軽にご相談ください。
                <br />
              </Paragraph>
              <DateInfo>開催期間：1月下旬～2月末</DateInfo>
            </Description>
          </TextSection>
          <YaharaiImageSection>
            <SectionImage src='/eventPhoto/event-03.png' alt='厄払いの様子' />
          </YaharaiImageSection>
        </SectionContainer>

        {/* 入学祈願 */}
        <RightSectionContainer>
          <RightVerticalTitle>
            <MonthText>四月</MonthText>
            <EventTitle>入学祈願</EventTitle>
          </RightVerticalTitle>
          <RightTextSection>
            <Description>
              <Paragraph>
                入学は、人生の中でも大きな節目のひとつです。
                <br />
                新しい環境での出会いや学びが、実り多きものとなるよう、「入学祈願」のご祈祷を承っております。
                <br />
                お子さまの健やかな成長と、学業成就・登下校の安全を願い、神前にて真心を込めてご奉仕いたします。
                <br />
                ご本人はもちろん、保護者さまのみでのご参拝も可能です。
                <br />
                ご家族そろって、節目を祈りとともにお迎えください。
                <br />
              </Paragraph>
              <DateInfo>開催期間：3月～4月</DateInfo>
            </Description>
          </RightTextSection>
          <NyugakuImageSection>
            <SectionImage src='/eventPhoto/event-04.png' alt='入学祈願の様子' />
          </NyugakuImageSection>
        </RightSectionContainer>

        {/* 夏越しの大祓い */}
        <SectionContainer>
          <VerticalTitle>
            <MonthText>六月</MonthText>
            <EventTitle>夏越しの大祓い</EventTitle>
          </VerticalTitle>
          <TextSection>
            <Description>
              <Paragraph>
                「夏越の大祓い（なごしのおおはらい）」は、毎年六月行われる伝統の神事で、
                <br />
                この半年のあいだに知らずに犯した過ちや、心身についた穢れを祓い、無病息災を願うものです。
                <br />
                大館神明社では、皆さまが清らかな心で残りの半年を迎えられるよう、夏越の大祓を斎行しております。
                <br />
                日々の感謝とともに、心身を整える節目として、どなたさまもどうぞご参列ください。
                <br />
              </Paragraph>
              <DateInfo>開催日時：6月30日</DateInfo>
            </Description>
          </TextSection>
          <NagoshiImageSection>
            <SectionImage src='/eventPhoto/event-05.png' alt='夏越しの大祓いの様子' />
          </NagoshiImageSection>
        </SectionContainer>

        {/* 古例祭 */}
        <RightSectionContainer>
          <RightVerticalTitle>
            <MonthText>八月</MonthText>
            <EventTitle>古例祭</EventTitle>
          </RightVerticalTitle>
          <RightTextSection>
            <Description>
              <Paragraph>
                古例祭は、当初斎行していた旧暦８月１日の例祭を偲び、９月の例祭が無事斎行されることを祈願しております。
                <br />
                氏子崇敬者の皆さまとともに、神さまのご加護に感謝を捧げ、地域の安寧と五穀豊穣をお祈りいたします。
                <br />
                どうぞ皆さまおそろいでご参拝いただき、心あらたに神さまと向き合うひとときをお過ごしください。
              </Paragraph>
              <DateInfo>開催日時：8月1日</DateInfo>
            </Description>
          </RightTextSection>
          <KoreisaiImageSection>
            <SectionImage src='/eventPhoto/event-06.png' alt='古例祭の様子' />
          </KoreisaiImageSection>
        </RightSectionContainer>

        {/* 宵宮祭 */}
        <SectionContainer>
          <VerticalTitle>
            <MonthText>九月</MonthText>
            <EventTitle>宵宮祭</EventTitle>
          </VerticalTitle>
          <TextSection>
            <Description>
              <Paragraph>
                宵宮祭は翌日の本祭・御神幸祭が無事に斎行されるよう祈願する神事です。
                <br />
                静かな夕暮れのなかで心を整え、氏子崇敬者の皆様の神恩感謝の心を届けられるよう、厳粛に斎行されます。
                <br />
              </Paragraph>
              <DateInfo>開催日時：9月10日</DateInfo>
            </Description>
          </TextSection>
          <YomiyasaiImageSection>
            <SectionImage src='/eventPhoto/event-07.png' alt='宵宮祭の様子' />
          </YomiyasaiImageSection>
        </SectionContainer>

        {/* 日例祭 */}
        <RightSectionContainer>
          <RightVerticalTitle>
            <MonthText>九月</MonthText>
            <EventTitle>例祭</EventTitle>
          </RightVerticalTitle>
          <RightTextSection>
            <Description>
              <Paragraph>
                例祭は神恩に感謝するとともに、氏子崇敬者の皆さまを始め地域の安寧、五穀豊穣等を祈願します。
                <br />
                御神輿の御巡幸も行われ、氏子の皆さまは各町内に設置される祭典事務所でお迎えをします。
              </Paragraph>
              <DateInfo>開催日時：9月11日</DateInfo>
            </Description>
          </RightTextSection>
          <NichireisaiImageSection>
            <SectionImage src='/eventPhoto/event-08.png' alt='日例祭の様子' />
          </NichireisaiImageSection>
        </RightSectionContainer>

        {/* 御神幸行事 */}
        <SectionContainer>
          <VerticalTitle>
            <MonthText>九月</MonthText>
            <EventTitle>御神幸行事</EventTitle>
          </VerticalTitle>
          <TextSection>
            <Description>
              <Paragraph>
                御神幸行事は、神明社祭の重要な行事の一つとして執り行われます。
                <br />
                神さまの御霊を神輿に遷し、地域を巡行することで、地域の安寧と繁栄をお祈りいたします。
                <br />
                多くの氏子崇敬者の皆さまにご参加いただき、神さまとともに地域を巡る大切な行事です。
                <br />
              </Paragraph>
              <DetailButton href='https://odate-shinmei.com/' target='_blank' rel='noopener noreferrer'>
                詳しくはこちら
              </DetailButton>
            </Description>
          </TextSection>
          <GoshinkoImageSection>
            <SectionImage src='/eventPhoto/event-09.png' alt='御神幸行事の様子' />
          </GoshinkoImageSection>
        </SectionContainer>

        {/* 七五三 */}
        <RightSectionContainer>
          <RightVerticalTitle>
            <MonthText>十月・十一月</MonthText>
            <EventTitle>七五三</EventTitle>
          </RightVerticalTitle>
          <RightTextSection>
            <Description>
              <Paragraph>
                「七五三」は、3歳・5歳・7歳を迎えたお子さまの成長を神さまに感謝し、これからの健やかな成長と無事をお祈りする、日本の美しい伝統行事です。
                <br />
                大館神明社では、晴れの日にふさわしい清らかなご祈祷を通して、ご家族の皆さまとともにお子さまの節目をお祝いしております。
                <br />
                ご祈祷を受けられたお子さまには、児童守りや千歳飴などの授与品をご用意しております。
                <br />
                ぜひご家族そろって、心に残るひとときをお過ごしください。
                <br />
              </Paragraph>
              <DateInfo>開催期間：10月～11月を中心に随時受付しております。</DateInfo>
            </Description>
          </RightTextSection>
          <ShichigosanImageSection>
            <SectionImage src='/eventPhoto/event-10.png' alt='七五三の様子' />
          </ShichigosanImageSection>
        </RightSectionContainer>

        {/* 年越しの大祓い */}
        <SectionContainer>
          <VerticalTitle>
            <MonthText>十二月</MonthText>
            <EventTitle>年越しの大祓い</EventTitle>
          </VerticalTitle>
          <TextSection>
            <ToshikoshiDescription>
              <Paragraph>
                「年越の大祓（としこしのおおばらい）」は、古来より続く日本の伝統行事で、知らず知らずのうちに身についた罪や穢れを祓い清め、心新たに新年を迎えるための神事です。
                <br />
                一年の感謝を込め、清らかな気持ちで年を越していただけるよう、どなたでもご参列いただけます。
                <br />
                どうぞご家族おそろいでお参りください。
                <br />
              </Paragraph>
              <DateInfo>開催日時：12月31日</DateInfo>
            </ToshikoshiDescription>
          </TextSection>
          <ToshikoshiImageSection>
            <SectionImage src='/eventPhoto/event-11.png' alt='年越しの大祓いの様子' />
          </ToshikoshiImageSection>
        </SectionContainer>
      </ContentContainer>
    </EventSectionWrapper>
  )
}

export default EventSection
