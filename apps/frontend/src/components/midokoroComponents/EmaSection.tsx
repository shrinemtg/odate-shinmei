import styled from '@emotion/styled'

const EmaSectionWrapper = styled.section`
  width: 100%;
  padding: 80px 0;
  position: relative;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  align-items: start;
  min-height: 600px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`

const TitleArea = styled.div`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  height: 78%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-left: 100px; /* MenuBarの幅(120px) + マージン(8px) + 余白(8px) */

  @media (max-width: 900px) {
    margin-left: 0;
  }
`

const MainTitle = styled.h2`
  color: var(--color-brown);
  font-family: 'Noto Serif JP', serif;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0.5em;
  line-height: 1.8;

  span {
    font-size: 48px;
    font-weight: 700;
    color: var(--color-brown);
  }
`

const TextArea = styled.div`
  padding: 16px;
  height: fit-content;
  margin-top: 200px;
  width: 320px;
`

const DescriptionText = styled.p`
  color: var(--color-gray);
  font-family: 'Noto Serif JP', serif;
  font-size: 16px;
  line-height: 2;
  margin: 0;
  white-space: pre-line;
`

const ImageArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`

const MainImage = styled.div`
  width: 560px;
  height: 460px;
  margin-left: 90px;
  overflow: hidden;
  background: var(--color-light-gray);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const BottomRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  align-items: start;
`

const SubImage = styled.div`
  width: 100%;
  height: 240px;
  overflow: hidden;
  background: var(--color-light-gray);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const BottomText = styled.div`
  border-radius: 12px;
  padding: 16px;
  height: fit-content;
  width: 60%;
`

const BottomDescription = styled.p`
  color: var(--color-gray);
  font-family: 'Noto Serif JP', serif;
  font-size: 14px;
  line-height: 1.8;
  margin: 0;
  white-space: pre-line;
`

const EmaSection = () => (
  <EmaSectionWrapper>
    <Container>
      <ContentGrid>
        <TitleArea>
          <MainTitle>
            大館神明社の<span>大絵馬</span>
          </MainTitle>
        </TitleArea>

        <TextArea>
          <DescriptionText>
            大館神明社の境内に一歩足を踏み入れると、 まず目を引くのが社殿正面に掲げられた大絵馬です。
            この大絵馬は、昭和○○年より始まったもので、 地域の平和や五穀豊穣を祈願して奉納されたのが始まりです。
            以来、毎年その年の干支や時代を象徴するテーマを題材に 絵師によって手描きされており、
            訪れるたびに新たな趣を感じていただけます。
          </DescriptionText>
        </TextArea>

        <ImageArea>
          <MainImage>
            <img src='/ema/ema-01.png' alt='大絵馬の詳細' />
          </MainImage>
          <BottomRow>
            <SubImage>
              <img src='/ema/ema-03.png' alt='大絵馬の様子' />
            </SubImage>
            <BottomText>
              <BottomDescription>
                大館神明社の境内では、 過去12年間の大絵馬をご覧いただけます。
                地域の人々の願いや想いが込められた「祈りのかたち」を 是非ご覧ください。
              </BottomDescription>
            </BottomText>
          </BottomRow>
        </ImageArea>
      </ContentGrid>
    </Container>
  </EmaSectionWrapper>
)

export default EmaSection
