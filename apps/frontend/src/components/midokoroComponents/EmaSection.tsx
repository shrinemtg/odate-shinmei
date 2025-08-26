import styled from '@emotion/styled'

const EmaSectionWrapper = styled.section`
  width: 100%;
  padding: 80px 0;
  position: relative;

  @media (max-width: 768px) {
    padding: 60px 0;
  }

  @media (max-width: 480px) {
    padding: 40px 0;
  }
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    padding: 0 12px;
  }
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
    min-height: auto;
  }

  @media (max-width: 480px) {
    gap: 12px;
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

  @media (max-width: 768px) {
    height: auto;
    writing-mode: horizontal-tb;
    text-orientation: initial;
    justify-content: center;
    margin-bottom: 24px;
    order: 1; /* モバイルで最初に表示 */
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

  @media (max-width: 768px) {
    font-size: 20px;
    letter-spacing: 0.3em;
    text-align: center;

    span {
      font-size: 36px;
    }
  }

  @media (max-width: 480px) {
    font-size: 18px;
    letter-spacing: 0.2em;

    span {
      font-size: 28px;
    }
  }
`

const TextArea = styled.div`
  padding: 16px;
  height: fit-content;
  margin-top: 200px;
  width: 320px;

  @media (max-width: 768px) {
    margin-top: 0;
    width: 100%;
    padding: 12px;
    order: 2; /* モバイルで2番目に表示 */
  }

  @media (max-width: 480px) {
    padding: 8px;
  }
`

const DescriptionText = styled.p`
  color: var(--color-gray);
  font-family: 'Noto Serif JP', serif;
  font-size: 16px;
  line-height: 2;
  margin: 0;
  white-space: pre-line;

  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 1.8;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 1.7;
  }
`

const ImageArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  @media (max-width: 768px) {
    gap: 16px;
    order: 3; /* モバイルで3番目に表示 */
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
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

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    margin-left: 0;
  }

  @media (max-width: 480px) {
    height: 250px;
  }
`

const BottomRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
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

  @media (max-width: 768px) {
    height: 200px;
  }

  @media (max-width: 480px) {
    height: 160px;
  }
`

const BottomText = styled.div`
  border-radius: 12px;
  padding: 16px;
  height: fit-content;
  width: 60%;

  @media (max-width: 768px) {
    width: 100%;
    padding: 12px;
  }

  @media (max-width: 480px) {
    padding: 8px;
  }
`

const BottomDescription = styled.p`
  color: var(--color-gray);
  font-family: 'Noto Serif JP', serif;
  font-size: 14px;
  line-height: 1.8;
  margin: 0;
  white-space: pre-line;

  @media (max-width: 768px) {
    font-size: 13px;
    line-height: 1.7;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 1.6;
  }
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
            大館神明社の境内に一歩足を踏み入れると、まず目を引くのが社殿正面に掲げらた大絵馬です。この大絵馬は、比内町出身の絵馬師殿村進様が、平成５年より地域の安寧と五穀豊穣等を祈願して奉納されたのが始まりです。以来、毎年その年の干支や時代を象徴するテーマを題材に絵師によって手描きされており、訪れるたびに新たな趣を感じていたけます。
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
