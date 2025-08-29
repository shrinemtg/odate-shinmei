import Image from 'next/image'
import styled from '@emotion/styled'

const MainContainer = styled.div`
  position: relative;
  width: 100vw;
  min-height: 160vh;
  overflow: visible;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    min-height: 120vh;
    width: 100vw;
  }

  @media (max-width: 480px) {
    width: 100vw;
  }
`

const VideoSection = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 10;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    height: 100vh;
    width: 100vw;
  }

  @media (max-width: 480px) {
    width: 100vw;
  }
`

const ContentOverlay = styled.div`
  position: relative;
  z-index: 20;
`

const BorderCloudContainer = styled.div`
  position: absolute;
  left: -400px;
  top: 480px;
  width: 900px;
  height: 350px;
  z-index: 5;
  pointer-events: none;

  @media (max-width: 768px) {
    width: 600px;
    height: 233px;
    left: -300px;
    top: 320px;
  }

  @media (max-width: 480px) {
    width: 450px;
    height: 175px;
    left: -250px;
    top: 240px;
  }
`

const PaperSection = styled.section`
  position: relative;
  width: 100vw;
  min-height: 60vh;
  background: url(/top-motion/haikei.png) left center / cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 5;

  @media (max-width: 768px) {
    min-height: 50vh;
    background: url(/top-motion/haikei.png) left center / cover no-repeat;
  }

  @media (max-width: 480px) {
    background: url(/top-motion/haikei.png) left center / cover no-repeat;
  }
`

const DecorativeCloud = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 220px;
  height: 120px;
  z-index: 1;
  opacity: 0.8;

  @media (max-width: 768px) {
    width: 147px;
    height: 80px;
  }

  @media (max-width: 480px) {
    width: 110px;
    height: 60px;
  }
`

const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 32px 0;
  margin-top: 64px;

  @media (max-width: 768px) {
    padding: 24px 0;
    margin-top: 32px;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 56px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    gap: 0.3rem;
  }
`

const VerticalText = styled.div<{ isLeft?: boolean }>`
  writing-mode: vertical-rl;
  text-align: center;
  font-size: 2rem;
  color: #7c6b4f;
  font-weight: 500;
  letter-spacing: 0.2em;
  font-family: serif;
  line-height: 1.8;
  margin-top: ${(props) => (props.isLeft ? '1.8em' : '0')};

  @media (max-width: 768px) {
    font-size: 1.5rem;
    letter-spacing: 0.15em;
    margin-top: ${(props) => (props.isLeft ? '1.4em' : '0')};
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    letter-spacing: 0.1em;
    margin-top: ${(props) => (props.isLeft ? '1.2em' : '0')};
  }
`

const ImageContainer = styled.div`
  margin: 0 0 56px 0;
  width: min(90vw, 520px);
  max-width: 520px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 0 40px 0;
    width: min(95vw, 400px);
    max-width: 400px;
  }

  @media (max-width: 480px) {
    width: min(95vw, 300px);
    max-width: 300px;
  }
`

const DescriptionContainer = styled.div`
  max-width: 520px;
  color: #7c6b4f;
  font-size: 1rem;
  text-align: center;
  line-height: 2;
  margin: 0 auto;
  padding-bottom: 48px;

  @media (max-width: 768px) {
    max-width: 90%;
    font-size: 0.9rem;
    line-height: 1.8;
    padding-bottom: 32px;
  }

  @media (max-width: 480px) {
    max-width: 95%;
    font-size: 0.8rem;
    line-height: 1.7;
    padding-bottom: 24px;
  }
`

const DescriptionText = styled.p`
  margin: 0;
`

const ActionButton = styled.button`
  margin-top: 32px;
  background: var(--color-shuiro);
  color: #fff;
  border: none;
  border-radius: 0.4rem;
  padding: 0.8rem 1.5rem;
  font-size: 1.1rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  font-family: serif;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: background 0.2s;

  @media (max-width: 768px) {
    margin-top: 24px;
    padding: 6px 16px;
    font-size: 1rem;
    border-radius: 0.4rem;
  }

  @media (max-width: 480px) {
    margin-top: 20px;
    padding: 5px 14px;
    font-size: 0.9rem;
    border-radius: 0.4rem;
  }
`

const HeroContent = () => {
  return (
    <MainContainer>
      {/* 動画＋雲の全画面セクション */}
      <VideoSection>
        <ContentOverlay>{/* ここにHeroSectionや他のメインコンテンツを配置 */}</ContentOverlay>
      </VideoSection>
      {/* 雲（hidari-4-kumo）を動画と和紙セクションの境界にまたがるように絶対配置 */}
      <BorderCloudContainer>
        <Image src='/top-motion/hidari-4-kumo.png' alt='cloud border' layout='fill' objectFit='contain' priority />
      </BorderCloudContainer>
      {/* 縦書きテキスト＋oyashiro.png画像＋説明文 */}
      <PaperSection>
        {/* 雲装飾（右下） */}
        <DecorativeCloud>
          <Image src='/top-motion/migi-1-kumo.png' alt='cloud right' layout='fill' objectFit='contain' priority />
        </DecorativeCloud>
        {/* 2カラム縦書きテキスト＋画像＋説明文 */}
        <ContentContainer>
          {/* 2カラム縦書きテキスト */}
          <TextContainer>
            {/* 大館神明社へ（左カラム、上マージンで「大」が「う」と揃うように調整） */}
            <VerticalText isLeft>大館神明社へ</VerticalText>
            {/* ようこそ（右カラム） */}
            <VerticalText>ようこそ</VerticalText>
          </TextContainer>
          {/* oyashiro.png画像 */}
          <ImageContainer>
            <Image
              src='/senga/oyashiro.png'
              alt='大館神明社イラスト'
              width={520}
              height={260}
              style={{ width: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
              priority
            />
          </ImageContainer>
          {/* 説明テキスト＋ボタン */}
          <DescriptionContainer>
            <DescriptionText>
              大館神明社は、秋田県大館市に鎮座する神社です。
              <br />
              初詣や七五三、厄除祈願、合格祈願など、人生の節目ごとに皆様の願いに寄り添い、
              <br />
              年間を通して様々な祭事や行事を行い
              <br />
              地域の文化と交流の中心として親しまれてきました。
            </DescriptionText>
            {/* 詳しく見るボタン */}
            <ActionButton>詳しく見る</ActionButton>
          </DescriptionContainer>
        </ContentContainer>
      </PaperSection>
    </MainContainer>
  )
}

export default HeroContent
