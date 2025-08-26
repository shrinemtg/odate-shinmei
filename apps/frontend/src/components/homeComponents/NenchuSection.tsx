import Image from 'next/image'
import styled from '@emotion/styled'

const Section = styled.section`
  width: 100vw;
  min-height: 480px;
  background: url(/top-motion/haikei.png) center center / cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0;
  margin: 64px 0;
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: 320px;
    margin: 48px 0;
  }
`

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`

const FrontIllustration = styled.div`
  position: absolute;
  left: 55%;
  bottom: 0;
  transform: translateX(-50%);
  width: 800px;
  height: 340px;
  z-index: 10;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: 768px) {
    width: 600px;
    height: 255px;
  }

  @media (max-width: 480px) {
    width: 400px;
    height: 170px;
  }
`

const TextArea = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 48px 56px 40px 160px;
  margin: 0;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.1);
  min-width: 340px;
  max-width: 360px;

  @media (max-width: 1024px) {
    padding: 40px 48px 32px 140px;
    min-width: 400px;
    max-width: 500px;
  }

  @media (max-width: 768px) {
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    border-radius: 0 0 16px 16px;
    padding: 1rem;
    min-width: 400px;
    max-width: 500px;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    min-width: 300px;
    max-width: 340px;
  }
`

const VerticalTitle = styled.div`
  writing-mode: vertical-rl;
  font-size: var(--font-size-5xl);
  color: var(--color-white);
  font-weight: 700;
  letter-spacing: 0.2em;
  font-family: serif;
  line-height: 1.1;
  margin-right: 32px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);

  @media (max-width: 1024px) {
    font-size: var(--font-size-4xl);
    margin-right: 28px;
  }

  @media (max-width: 768px) {
    writing-mode: horizontal-tb;
    font-size: var(--font-size-3xl);
    margin-right: 0;
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-xl);
    margin-bottom: 10px;
  }
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 220px;

  @media (max-width: 1024px) {
    min-width: 300px;
  }

  @media (max-width: 768px) {
    min-width: 0;
    width: 100%;
    text-align: center;
  }

  @media (max-width: 480px) {
    min-width: 0;
    width: 100%;
    text-align: center;
  }
`

const Description = styled.div`
  color: var(--color-white);
  font-size: var(--font-size-base);
  font-family: serif;
  line-height: 2;
  margin-bottom: 24px;
  white-space: pre-line;
  max-width: 400px;
  width: 100%;

  @media (max-width: 1024px) {
    font-size: var(--font-size-base);
    line-height: 1.9;
    margin-bottom: 20px;
    max-width: 480px;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
    line-height: 1.8;
    margin-bottom: 14px;
    max-width: 660px;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-xs);
    line-height: 1.7;
    margin-bottom: 12px;
    max-width: 620px;
  }
`

const DetailButton = styled.button`
  background: transparent;
  color: var(--color-white);
  border: 1.5px solid #fff;
  border-radius: 0;
  padding: 9px 18px;
  font-size: var(--font-size-lg);
  font-weight: 400;
  letter-spacing: 0.1em;
  font-family: serif;
  cursor: pointer;
  box-shadow: none;
  transition: background 0.2s;
  align-self: flex-start;
  margin-left: 0;
  border-radius: 8px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 1024px) {
    padding: 8px 16px;
    font-size: var(--font-size-base);
  }

  @media (max-width: 768px) {
    align-self: center;
    padding: 7px 14px;
    font-size: var(--font-size-sm);
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: var(--font-size-xs);
  }
`

const NenchuSection = () => (
  <Section>
    {/* 背景画像 */}
    <BackgroundImage>
      <Image
        src='/backsozai/maturi01.png'
        alt='祭り背景'
        layout='fill'
        objectFit='cover'
        priority
        style={{ filter: 'brightness(0.7)' }}
      />
    </BackgroundImage>
    {/* 前面イラスト（大きく中央下） */}
    <FrontIllustration>
      <Image
        src='/backsozai/irasut.png'
        alt='イラスト'
        width={800}
        height={340}
        style={{ width: '100%', height: 'auto', display: 'block' }}
        priority
      />
    </FrontIllustration>
    {/* テキストエリア */}
    <TextArea>
      {/* 縦書きタイトル */}
      <VerticalTitle>年中行事</VerticalTitle>
      {/* 横テキスト＋ボタン */}
      <ContentContainer>
        <Description>
          大館神明社では古くから伝わる伝統行事を通じて、地域の皆様の安寧を祈り、感謝の心を捧げています。
        </Description>
        <DetailButton>詳しく見る</DetailButton>
      </ContentContainer>
    </TextArea>
  </Section>
)

export default NenchuSection
