import styled from '@emotion/styled'

const GokitouSectionWrapper = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  padding: 4rem 0;
`

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 3rem;
  display: flex;
  flex-direction: column;
  gap: 6rem;
`

const SectionContainer = styled.div`
  width: 900px;
  display: flex;
  align-items: flex-start;
  position: relative;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    width: 100%;
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
  font-size: var(--font-size-4xl);
  font-weight: 600;
  writing-mode: vertical-rl;
  letter-spacing: 0.3em;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  font-family: var(--font-family-serif);
  line-height: 1.2;
  white-space: nowrap;
  margin: 0 2rem 0 0;
  flex-shrink: 0;
`

const RightVerticalTitle = styled(VerticalTitle)`
  margin: 0 0 0 2rem;
`

const TextSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem 0 0 0;
`

const RightTextSection = styled(TextSection)`
  margin: 2rem 2rem 0 2rem;
`

const Description = styled.div`
  color: var(--color-gray);
  font-size: var(--font-size-base);
  line-height: 1.6;
  font-family: var(--font-family-sans);
`

const Paragraph = styled.p`
  margin-bottom: 1rem;
  font-size: var(--font-size-base);

  &:last-child {
    margin-bottom: 0;
  }
`

const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

const SectionImage = styled.img`
  max-width: 100%;
  height: auto;
`

// 各祭事用の画像セクション
const JichinsaiImageSection = styled(ImageSection)`
  margin: 8rem 0 0 0;
`

const SekouImageSection = styled(ImageSection)`
  margin: 6rem 0 2rem 0;
`

const JoutouImageSection = styled(ImageSection)`
  margin: 6rem 0 3rem 0;
`

const YaharaiImageSection = styled(ImageSection)`
  margin: 1rem 0 3rem 0;
`

const KamidanaImageSection = styled(ImageSection)`
  margin: 3rem 0 2rem 0;
`

const IdoImageSection = styled(ImageSection)`
  margin: 3rem 0 2rem 0;
`

const KaitaiImageSection = styled(ImageSection)`
  margin: 1rem 0 3rem 0;
`

const AnzenImageSection = styled(ImageSection)`
  margin: 3rem 0 2rem 0;
`

const ShoubaiImageSection = styled(ImageSection)`
  margin: 3rem 0 2rem 0;
`

const GokitouSection = () => {
  return (
    <GokitouSectionWrapper>
      <ContentContainer>
        {/* 地鎮祭 */}
        <SectionContainer>
          <VerticalTitle>地鎮祭</VerticalTitle>
          <TextSection>
            <Description>
              <Paragraph>
                家や建物を建てる前に、土地の神さまにご挨拶し、工事の安全と家の繁栄を祈願する祭典です。
              </Paragraph>
              <Paragraph>
                新しく家を建てる際や、建物の建設に取りかかる前に行う最も代表的な神事です。
                その土地に住まう神さま（氏神様・産土神）に、これからここで工事を始めることを報告し、土地を祓い清め、安全に工事が進みますよう祈ります。
                施主様をはじめ、設計者や施工関係者も参列されることが多く、建築の無事と繁栄を願う重要な節目です。
              </Paragraph>
            </Description>
          </TextSection>
          <JichinsaiImageSection>
            <SectionImage src='/gaisai/gaisai-01.png' alt='地鎮祭のイラスト' />
          </JichinsaiImageSection>
        </SectionContainer>

        {/* 施工祭 */}
        <RightSectionContainer>
          <RightVerticalTitle>施工祭</RightVerticalTitle>
          <RightTextSection>
            <Description>
              <Paragraph>基礎工事や重要な建築工程の開始時に、安全と円滑な進行を祈願する祭典です。</Paragraph>
              <Paragraph>
                地鎮祭の後、具体的な施工に入る段階において、事故や災いがないように、工事の安全と完成を祈る神事です。
                鉄骨工事・杭打ち・基礎打ち・内装工事など、大きな工程に入る前に実施することで、関係者の心も引き締まり、安全意識の高まりにもつながります。
              </Paragraph>
            </Description>
          </RightTextSection>
          <SekouImageSection>
            <SectionImage src='/gaisai/gaisai-02.png' alt='施工祭のイラスト' />
          </SekouImageSection>
        </RightSectionContainer>

        {/* 上棟祭 */}
        <SectionContainer>
          <VerticalTitle>上棟祭</VerticalTitle>
          <TextSection>
            <Description>
              <Paragraph>棟木を上げる際に、建物の完成とそこに暮らす人々の安泰を祈る神事です。</Paragraph>
              <Paragraph>
                「棟上げ」や「建前（たてまえ）」とも呼ばれ、家づくりの中でも特に大きな節目とされる日です。
                建物の骨組みが完成し、屋根の一番高い部分である棟木を上げる際、これまでの工事の無事を感謝し、今後の完成と家内安全・繁栄をお祈りします。
                餅まきなど地域や家族での祝い事としても行われ、喜びのあるお祭りでもあります。
              </Paragraph>
            </Description>
          </TextSection>
          <JoutouImageSection>
            <SectionImage src='/gaisai/gaisai-03.png' alt='上棟祭のイラスト' />
          </JoutouImageSection>
        </SectionContainer>

        {/* 家祓 */}
        <RightSectionContainer>
          <RightVerticalTitle>家祓</RightVerticalTitle>
          <RightTextSection>
            <Description>
              <Paragraph>
                新築や中古住宅、また引っ越し先の住まいを祓い清め、安全で安心して暮らせるように祈願します。
              </Paragraph>
              <Paragraph>
                人が暮らす「家」は、日々の生活を守る大切な場です。
                新しい住まいに入る前や、住み替えの際には、住居全体を清め、神さまにご挨拶し、家内安全・災難除け・心身の平穏をお祈りします。
                特に中古物件や以前に事情のあった場所などでは、家を祓い清めることで心身ともに安心して新生活を始められます。
              </Paragraph>
            </Description>
          </RightTextSection>
          <YaharaiImageSection>
            <SectionImage src='/gaisai/gaisai-04.png' alt='家祓のイラスト' />
          </YaharaiImageSection>
        </RightSectionContainer>

        {/* 神棚祭 */}
        <SectionContainer>
          <VerticalTitle>神棚祭</VerticalTitle>
          <TextSection>
            <Description>
              <Paragraph>神棚を設置・移動・交換する際に、神さまを丁寧にお迎えし、日々の守護を願います。</Paragraph>
              <Paragraph>
                神棚は、日常の中で神さまとつながる大切な場です。
                新たに神棚を設ける際、または引越しやリフォームなどで移動・取り替えをする際に、神職が清祓を行い、神さまを正式にお迎えいたします。
                ご家庭はもちろん、会社・店舗などでも神棚を設けて日々の安全や商売繁盛を祈る習慣は古くから大切にされています。
              </Paragraph>
            </Description>
          </TextSection>
          <KamidanaImageSection>
            <SectionImage src='/gaisai/gaisai-05.png' alt='神棚祭のイラスト' />
          </KamidanaImageSection>
        </SectionContainer>

        {/* 井戸埋清祓 */}
        <RightSectionContainer>
          <RightVerticalTitle>井戸埋清祓</RightVerticalTitle>
          <RightTextSection>
            <Description>
              <Paragraph>
                長年使ってきた井戸を埋める前に、水の神さまに感謝を捧げ、清らかにお見送りする神事です。
              </Paragraph>
              <Paragraph>
                井戸には古くから「水の神さま」が宿るとされ、清らかな存在として大切にされてきました。
                建て替えやリフォームなどで井戸を使わなくなり、埋める必要がある際には、井戸の神さまに感謝を述べ、これまでの働きをねぎらい、祓い清めて埋めることで災いを避けることができます。
                自然と共に生きてきた日本ならではの、心のこもった神事です。
              </Paragraph>
            </Description>
          </RightTextSection>
          <IdoImageSection>
            <SectionImage src='/gaisai/gaisai-06.png' alt='井戸埋清祓のイラスト' />
          </IdoImageSection>
        </RightSectionContainer>

        {/* 解体清祭 */}
        <SectionContainer>
          <VerticalTitle>解体清祭</VerticalTitle>
          <TextSection>
            <Description>
              <Paragraph>これまでお世話になった建物を取り壊す前に感謝を込めて清め、安全な解体を祈ります。</Paragraph>
              <Paragraph>
                長年住まわれたご自宅や、使われてきた建物には多くの思い出と感謝が込められています。
                解体の前に、神職がその場を祓い清め、建物の御霊に感謝を捧げ、作業中の安全を祈願します。
                このお祭りを通じて、建物に敬意を表し、次の新たな生活や建築へと心を整えることができます。
              </Paragraph>
            </Description>
          </TextSection>
          <KaitaiImageSection>
            <SectionImage src='/gaisai/gaisai-07.png' alt='解体清祭のイラスト' />
          </KaitaiImageSection>
        </SectionContainer>

        {/* 安全祈願祭 */}
        <RightSectionContainer>
          <RightVerticalTitle>安全祈願祭</RightVerticalTitle>
          <RightTextSection>
            <Description>
              <Paragraph>工事現場や事業所などで、作業に関わる全ての方々の安全と健康、無事故を願う神事です。</Paragraph>
              <Paragraph>
                建築現場や製造現場など、作業中の事故や災害の防止を目的として、作業前や年初めに行われるお祭りです。
                従業員の健康と無事、事業の円滑な運営、作業の安全をお祈りすることで、現場全体の士気も高まります。
                特に新年度・新規事業・大規模工事の開始前には、多くの企業で実施されています。
              </Paragraph>
            </Description>
          </RightTextSection>
          <AnzenImageSection>
            <SectionImage src='/gaisai/gaisai-08.png' alt='安全祈願祭のイラスト' />
          </AnzenImageSection>
        </RightSectionContainer>

        {/* 商売繁盛祈願祭 */}
        <SectionContainer>
          <VerticalTitle>商売繁盛祈願祭</VerticalTitle>
          <TextSection>
            <Description>
              <Paragraph>お店や会社の商売繁盛・千客万来・社運隆昌を祈願する祭典です。</Paragraph>
              <Paragraph>
                新たに事業を始める際、開店・開業・周年記念などの節目に、商売の繁盛と従業員の健康、取引先との良縁を祈る神事です。
                神さまにご加護をお願いすることで、商運が安定し、多くのお客様に恵まれることを願います。
                法人・個人問わず、店舗・事務所・工場など、幅広い業種に対応いたします。
              </Paragraph>
            </Description>
          </TextSection>
          <ShoubaiImageSection>
            <SectionImage src='/gaisai/gaisai-09.png' alt='商売繁盛祈願祭のイラスト' />
          </ShoubaiImageSection>
        </SectionContainer>

        {/* まとめ */}
        <SectionContainer>
          <TextSection>
            <Description>
              <Paragraph>これらの外祭は、ご希望の日時・場所に応じて神職が出張し、丁寧に斎行いたします。</Paragraph>
            </Description>
          </TextSection>
        </SectionContainer>
      </ContentContainer>
    </GokitouSectionWrapper>
  )
}

export default GokitouSection
