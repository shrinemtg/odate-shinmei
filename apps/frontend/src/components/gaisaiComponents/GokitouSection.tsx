import styled from '@emotion/styled'

const GokitouSectionWrapper = styled.section`
  width: 100%;
  position: relative;
  background: var(--color-oud) url('/top-motion/haikei.png') center top / 100% auto repeat-y;
  background-attachment: fixed;
  padding: 4rem 0;

  @media (max-width: 1024px) {
    padding: 3rem 0;
  }

  @media (max-width: 768px) {
    padding: 5rem 0 8rem 0;
  }

  @media (max-width: 480px) {
    padding: 5rem 0 8rem 0;
  }
`

const ContentContainer = styled.div`
  width: 100%;
  max-width: 90%;
  margin: 0 0 0 5rem;
  display: flex;
  flex-direction: column;
  gap: 8rem;

  @media (max-width: 1024px) {
    margin: 0 0 0 5rem;
    gap: 8rem;
  }

  @media (max-width: 768px) {
    margin: 0 auto;
    gap: 8rem;
  }

  @media (max-width: 480px) {
    margin: 0 auto;
    gap: 8rem;
  }
`

const SectionContainer = styled.div`
  width: 100%;
  max-width: 90%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1rem;
  position: relative;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 90%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    max-width: 900px;
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

  @media (max-width: 1024px) {
    font-size: var(--font-size-4xl);
    margin: 0 1.5rem 0 1.5rem;
  }

  @media (max-width: 768px) {
    writing-mode: horizontal-tb;
    font-size: var(--font-size-3xl);
    letter-spacing: 0.2em;
    margin: 0;
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
    margin: 0;
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
    margin: 0;
    width: 90%;
    order: 1;
  }

  @media (max-width: 480px) {
    gap: 1.25rem;
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
  }

  @media (max-width: 480px) {
    margin-bottom: 0.875rem;
    font-size: var(--font-size-base);
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
    width: 90%;
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

const ContactButton = styled.a`
  background: var(--color-shuiro);
  color: var(--color-white);
  border: none;
  border-radius: 8px;
  padding: 1rem 2rem;
  font-size: var(--font-size-base);
  font-weight: 600;
  font-family: var(--font-family-serif);
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 4rem auto 10rem;
  display: block;
  width: fit-content;
  text-decoration: none;
  text-align: center;

  &:hover {
    background: #7a2e2b;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(153, 58, 55, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 1024px) {
    padding: 0.875rem 1.75rem;
    font-size: var(--font-size-base);
  }

  @media (max-width: 768px) {
    align-self: center;
    padding: 0.75rem 1.5rem;
    font-size: var(--font-size-sm);
    margin: 3rem auto 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.625rem 1.25rem;
    font-size: var(--font-size-xs);
  }
`

// 各祭事用の画像セクション
const JichinsaiImageSection = styled(ImageSection)`
  margin: 0;

  @media (min-width: 769px) {
    margin: 2rem 0 0 0;
  }

  @media (min-width: 1025px) {
    margin: 2rem 0 0 0;
  }
`

const SekouImageSection = styled(ImageSection)`
  margin: 0;

  @media (min-width: 769px) {
    margin: 3rem 0 2rem 0;
  }

  @media (min-width: 1025px) {
    margin: 3rem 0 2rem 0;
  }
`

const JoutouImageSection = styled(ImageSection)`
  margin: 0;

  @media (min-width: 769px) {
    margin: 1rem 0 3rem 0;
  }

  @media (min-width: 1025px) {
    margin: 1rem 0 3rem 0;
  }
`

const YaharaiImageSection = styled(ImageSection)`
  margin: 0;

  @media (min-width: 769px) {
    margin: 6rem 0 3rem 0;
  }

  @media (min-width: 1025px) {
    margin: 6rem 0 3rem 0;
  }
`

const KamidanaImageSection = styled(ImageSection)`
  margin: 0;

  @media (min-width: 769px) {
    margin: 2rem 0 2rem 0;
  }

  @media (min-width: 1025px) {
    margin: 2rem 0 2rem 0;
  }
`

const IdoImageSection = styled(ImageSection)`
  margin: 0;

  @media (min-width: 769px) {
    margin: 0 0 2rem 0;
  }

  @media (min-width: 1025px) {
    margin: 0 0 2rem 0;
  }
`

const KaitaiImageSection = styled(ImageSection)`
  margin: 0;

  @media (min-width: 769px) {
    margin: 3rem 0 3rem 0;
  }

  @media (min-width: 1025px) {
    margin: 3rem 0 3rem 0;
  }
`

const AnzenImageSection = styled(ImageSection)`
  margin: 0;

  @media (min-width: 769px) {
    margin: 0 0 2rem 0;
  }

  @media (min-width: 1025px) {
    margin: 0 0 2rem 0;
  }
`

const ShoubaiImageSection = styled(ImageSection)`
  margin: 0;

  @media (min-width: 769px) {
    margin: 3rem 0 2rem 0;
  }

  @media (min-width: 1025px) {
    margin: 3rem 0 2rem 0;
  }
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
                家や建物を建てる前に、その土地をお守りしている大地主神、産土神、建築をお守りする神様達をお迎えして土地のお祓いや工事の安全を祈願します。
              </Paragraph>
              <Paragraph>
                施主様をはじめ、設計者や施工関係者も参列されることが多く、建築の無事と繁栄を願う重要な節目です。
              </Paragraph>
            </Description>
          </TextSection>
          <JichinsaiImageSection>
            <SectionImage src='/gaisai/gaisai-01.png' alt='地鎮祭のイラスト' />
          </JichinsaiImageSection>
        </SectionContainer>

        {/* 起工祭 */}
        <RightSectionContainer>
          <RightVerticalTitle>起工祭</RightVerticalTitle>
          <RightTextSection>
            <Description>
              <Paragraph>基礎工事や重要な建築工程の開始時に、安全と円滑な進行を祈願する祭典です。</Paragraph>
              <Paragraph>
                地鎮祭の後、具体的な施工に入る段階において、事故や災いがないように、工事の安全と完成を祈る神事です。
                鉄骨工事・杭打ち・基礎打ち・内装工事など、大きな工程に入る前に実施することで、関係者の心も引き締まり、安全意識の高まりにも繋がります。
                地鎮祭と一緒に行うことが多いです。
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

        {/* 竣工祭 */}
        <RightSectionContainer>
          <RightVerticalTitle>竣工祭-家祓い</RightVerticalTitle>
          <RightTextSection>
            <Description>
              <Paragraph>
                竣工祭は、建物や施設の完成を神前に報告し、その加護と関係者への感謝をお伝えするお祭りです。
              </Paragraph>
              <Paragraph>
                工事中の安全を守っていただいたことへのお礼と、これからの事業や暮らしの繁栄を祈願いたします。
                神職が新しい建物の前で祝詞を奏上し、お清めとお祓いを行うことで、末永く安全で健やかな使用を願います。
                企業や店舗、住宅など、あらゆる竣工の場面で執り行うことができ、上棟祭と一緒に行われることが多いです。
              </Paragraph>
            </Description>
          </RightTextSection>
          <JoutouImageSection>
            <SectionImage src='/gaisai/gaisai-04.png' alt='竣工祭のイラスト' />
          </JoutouImageSection>
        </RightSectionContainer>

        {/* 家祓 */}
        <SectionContainer>
          <VerticalTitle>中古住宅の清祓</VerticalTitle>
          <TextSection>
            <Description>
              <Paragraph>
                中古住宅、また引っ越し先の住まいを祓い清め、安全で安心して暮らせるように祈願します。
              </Paragraph>
              <Paragraph>
                人が暮らす「家」は、日々の生活を守る大切な場です。住み替えの際には、住居全体を清め、神さまにご挨拶し、家内安全・災難除け・心身の平穏をお祈りします。中古物件や以前に事情のあった場所などでは、家を祓い清めることで心身ともに安心して新生活を始められます。
              </Paragraph>
            </Description>
          </TextSection>
          <YaharaiImageSection>
            <SectionImage src='/gaisai/gaisai-05.png' alt='家祓のイラスト' />
          </YaharaiImageSection>
        </SectionContainer>

        {/* 神棚祭 */}
        <RightSectionContainer>
          <RightVerticalTitle>神棚祭</RightVerticalTitle>
          <RightTextSection>
            <Description>
              <Paragraph>神棚を設置・移動・交換する際に、神さまを丁寧にお迎えし、日々の守護を願います。</Paragraph>
              <Paragraph>
                神棚は、日常の中で神さまとつながる大切な場です。
                新たに神棚を設ける際、または引越しやリフォームなどで移動・取り替えをする際に、神職が清祓を行い、神さまを正式にお迎えいたします。
                ご家庭はもちろん、会社・店舗などでも神棚を設けて日々の安全や商売繁盛を祈る習慣は古くから大切にされています。
              </Paragraph>
            </Description>
          </RightTextSection>
          <KamidanaImageSection>
            <SectionImage src='/gaisai/gaisai-06.png' alt='神棚祭のイラスト' />
          </KamidanaImageSection>
        </RightSectionContainer>

        {/* 井戸埋清祓 */}
        <SectionContainer>
          <VerticalTitle>井戸埋立清祓</VerticalTitle>
          <TextSection>
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
          </TextSection>
          <IdoImageSection>
            <SectionImage src='/gaisai/gaisai-07.png' alt='井戸埋立清祓のイラスト' />
          </IdoImageSection>
        </SectionContainer>

        {/* 解体清祭 */}
        <RightSectionContainer>
          <RightVerticalTitle>解体清祭</RightVerticalTitle>
          <RightTextSection>
            <Description>
              <Paragraph>これまでお世話になった建物を取り壊す前に感謝を込めて清め、安全な解体を祈ります。</Paragraph>
              <Paragraph>
                長年住まわれたご自宅や、使われてきた建物には多くの思い出と感謝が込められています。
                解体の前に、神職がその場を祓い清め、建物の御霊に感謝を捧げ、作業中の安全を祈願します。
                この祭事を通じて、建物に敬意を表し、次の新たな生活や建築へと心を整えることができます。
              </Paragraph>
            </Description>
          </RightTextSection>
          <KaitaiImageSection>
            <SectionImage src='/gaisai/gaisai-08.png' alt='解体清祭のイラスト' />
          </KaitaiImageSection>
        </RightSectionContainer>

        {/* 安全祈願祭 */}
        <SectionContainer>
          <VerticalTitle>安全祈願祭</VerticalTitle>
          <TextSection>
            <Description>
              <Paragraph>工事現場や事業所などで、作業に関わる全ての方々の安全と健康、無事故を願う神事です。</Paragraph>
              <Paragraph>
                建築現場や製造現場など、作業中の事故や災害の防止を目的として、作業前や年初めに行われるお祭りです。
                従業員の健康と無事、事業の円滑な運営、作業の安全をお祈りすることで、現場全体の士気も高まります。
                特に新年度・新規事業・大規模工事の開始前には、多くの企業で実施されています。
              </Paragraph>
            </Description>
          </TextSection>
          <AnzenImageSection>
            <SectionImage src='/gaisai/gaisai-09.png' alt='安全祈願祭のイラスト' />
          </AnzenImageSection>
        </SectionContainer>

        {/* 商売繁盛祈願祭 */}
        <RightSectionContainer>
          <RightVerticalTitle>商売繁盛祈願祭</RightVerticalTitle>
          <RightTextSection>
            <Description>
              <Paragraph>お店や会社の商売繁盛・千客万来・社運隆昌を祈願する祭典です。</Paragraph>
              <Paragraph>
                新たに事業を始める際、開店・開業・周年記念などの節目に、商売の繁盛と従業員の健康、取引先との良縁を祈る神事です。
                神さまにご加護をお願いすることで、商運が安定し、多くのお客様に恵まれることを願います。
                法人・個人問わず、店舗・事務所・工場など、幅広い業種に対応いたします。
              </Paragraph>
            </Description>
          </RightTextSection>
          <ShoubaiImageSection>
            <SectionImage src='/gaisai/gaisai-10.png' alt='商売繁盛祈願祭のイラスト' />
          </ShoubaiImageSection>
        </RightSectionContainer>

        {/* コンタクトボタン */}
        <ContactButton href='/contact'>お問い合わせ・ご予約</ContactButton>
      </ContentContainer>
    </GokitouSectionWrapper>
  )
}

export default GokitouSection
