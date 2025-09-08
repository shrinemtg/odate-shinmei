import styled from '@emotion/styled'

const EmaSectionWrapper = styled.section`
  /* レイアウト関連 */
  padding: 5rem 0 0;
  width: 100%;
  background: var(--color-oud) url('/top-motion/haikei.png') center top / 100% auto repeat-y;
  background-attachment: fixed;
`

const Container = styled.div`
  /* レイアウト関連 */
  margin: 0 auto;
  max-width: 100%;

  @media (max-width: 1024px) {
  }

  @media (max-width: 768px) {
  }

  @media (max-width: 480px) {
  }
`

const ContentGrid = styled.div`
  /* レイアウト関連 */
  align-items: start;
  display: grid;
  grid-template-columns: 0.4fr 1fr 1.6fr;
  width: 100%;
  max-width: 100%;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 100%;
    grid-template-columns: 0.7fr 1fr 1.3fr;
  }

  @media (max-width: 768px) {
    gap: 1rem;
    grid-template-columns: 1fr;
    width: 100%;
    max-width: 100%;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 480px) {
    gap: 1rem;
    width: 100%;
    max-width: 100%;
    justify-content: center;
    align-items: center;
  }
`

const MainTitle = styled.h2`
  /* レイアウト関連 */
  align-items: center;
  display: flex;
  justify-content: center;
  letter-spacing: 0.5em;
  line-height: 1.8;
  margin: 0 0 0 8rem;
  text-orientation: mixed;
  writing-mode: vertical-rl;

  /* タイポグラフィ関連 */
  color: var(--color-brown);
  font-family: 'Noto Serif JP', serif;
  font-size: var(--font-size-2xl);
  font-weight: 600;

  span {
    /* タイポグラフィ関連 */
    color: var(--color-brown);
    font-size: var(--font-size-5xl);
    font-weight: 700;
  }

  @media (max-width: 1024px) {
    /* レイアウト関連 */
    margin: 0 0 0 8rem; /* 画面サイズに応じてマージンを調整 *

    /* タイポグラフィ関連 */
    font-size: var(--font-size-xl);

    span {
      font-size: var(--font-size-4xl);
    }
  }

  @media (max-width: 768px) {
    /* レイアウト関連 */
    height: auto;
    justify-content: center;
    margin-bottom: 24px;
    order: 1; /* モバイルで最初に表示 */
    text-align: center;
    text-orientation: initial;
    writing-mode: horizontal-tb;
    width: 90%;
    margin: 0 auto 24px auto;

    /* タイポグラフィ関連 */
    font-size: var(--font-size-lg);
    letter-spacing: 0.3em;

    span {
      font-size: var(--font-size-4xl);
    }
  }

  @media (max-width: 480px) {
    /* タイポグラフィ関連 */
    font-size: var(--font-size-base);
    letter-spacing: 0.2em;

    span {
      font-size: var(--font-size-3xl);
    }
  }
`

const DescriptionText = styled.p`
  /* レイアウト関連 */
  height: fit-content;
  margin: 0;
  margin-top: 200px;
  padding: 16px;
  width: 320px;

  /* タイポグラフィ関連 */
  color: var(--color-gray);
  font-family: 'Noto Serif JP', serif;
  font-size: var(--font-size-base);
  line-height: 2;
  white-space: pre-line;

  @media (max-width: 1024px) {
    /* レイアウト関連 */
    margin-top: 180px;
    padding: 14px;
    width: 300px;

    /* タイポグラフィ関連 */
    font-size: var(--font-size-base);
    line-height: 1.9;
  }

  @media (max-width: 768px) {
    /* レイアウト関連 */
    margin-top: 0;
    order: 2; /* モバイルで2番目に表示 */
    padding: 12px;
    width: 90%;
    margin: 0 auto;
    text-align: center;

    /* タイポグラフィ関連 */
    font-size: var(--font-size-sm);
    line-height: 1.8;
  }

  @media (max-width: 480px) {
    /* レイアウト関連 */
    padding: 8px;

    /* タイポグラフィ関連 */
    font-size: var(--font-size-sm);
    line-height: 1.7;
  }
`

const ImageArea = styled.div`
  /* レイアウト関連 */
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  @media (max-width: 1024px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    gap: 16px;
    order: 3; /* モバイルで3番目に表示 */
    align-items: center;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`

const MainImage = styled.div`
  /* レイアウト関連 */
  align-items: center;
  display: flex;
  height: 400px;
  justify-content: center;
  overflow: hidden;
  width: 120%;
  max-width: 860px;

  /* ビジュアル関連 */
  background: var(--color-light-gray);
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  img {
    /* レイアウト関連 */
    height: 100%;
    width: 100%;

    /* ビジュアル関連 */
    border-radius: 8px;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    /* レイアウト関連 */
    height: 400px;
    width: 130%;
    max-width: 600px;
  }

  @media (max-width: 768px) {
    /* レイアウト関連 */
    height: 350px;
    margin-left: 0;
    width: 90%;
    max-width: 90%;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 480px) {
    height: 250px;
  }
`

const BottomRow = styled.div`
  /* レイアウト関連 */
  align-items: center;
  justify-items: center;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: 0.9fr 1.1fr;
  width: 100%;
  min-width: 100%;

  @media (max-width: 1024px) {
    gap: 0.5rem;
  }

  @media (max-width: 768px) {
    gap: 1rem;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`

const SubImage = styled.div`
  /* レイアウト関連 */
  align-items: center;
  display: flex;
  height: 240px;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  max-width: 100%;

  /* ビジュアル関連 */
  background: var(--color-light-gray);
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  img {
    /* レイアウト関連 */
    height: 100%;
    width: 100%;

    /* ビジュアル関連 */
    border-radius: 8px;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    height: 220px;
  }

  @media (max-width: 768px) {
    height: 250px;
    width: 100%;
    max-width: 90%;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 480px) {
    height: 160px;
  }
`

const BottomDescription = styled.p`
  /* レイアウト関連 */
  height: fit-content;
  width: 100%;
  padding: 0 0.4rem;

  /* タイポグラフィ関連 */
  color: var(--color-gray);
  font-family: 'Noto Serif JP', serif;
  font-size: var(--font-size-base);
  line-height: 1.8;
  white-space: pre-line;

  @media (max-width: 1024px) {
    /* レイアウト関連 */
    width: 100%;
    padding: 0 0.4rem;

    /* タイポグラフィ関連 */
    font-size: var(--font-size-base);
    line-height: 1.75;
  }

  @media (max-width: 768px) {
    /* レイアウト関連 */
    width: 100%;
    max-width: 90%;
    text-align: center;

    /* タイポグラフィ関連 */
    font-size: var(--font-size-sm);
    line-height: 1.7;
  }

  @media (max-width: 480px) {
    /* レイアウト関連 */

    /* タイポグラフィ関連 */
    font-size: var(--font-size-sm);
    line-height: 1.6;
  }
`

const EmaSection = () => (
  <EmaSectionWrapper>
    <Container>
      <ContentGrid>
        <MainTitle>
          大館神明社の<span>大絵馬</span>
        </MainTitle>
        <DescriptionText>
          大館神明社の境内に一歩足を踏み入れると、まず目を引くのが社殿正面に掲げらた大絵馬です。この大絵馬は、比内町出身の絵馬師殿村進様が、平成５年より地域の安寧と五穀豊穣等を祈願して奉納されたのが始まりです。以来、毎年その年の干支や時代を象徴するテーマを題材に絵師によって手描きされており、訪れるたびに新たな趣を感じていたけます。
        </DescriptionText>
        <ImageArea>
          <MainImage>
            <img src='/ema/ema-01.png' alt='大絵馬の詳細' />
          </MainImage>
          <BottomRow>
            <SubImage>
              <img src='/ema/ema-03.png' alt='大絵馬の様子' />
            </SubImage>
            <BottomDescription>
              大館神明社の境内では、 過去12年間の大絵馬をご覧いただけます。
              地域の人々の願いや想いが込められた「祈りのかたち」を 是非ご覧ください。
            </BottomDescription>
          </BottomRow>
        </ImageArea>
      </ContentGrid>
    </Container>
  </EmaSectionWrapper>
)

export default EmaSection
