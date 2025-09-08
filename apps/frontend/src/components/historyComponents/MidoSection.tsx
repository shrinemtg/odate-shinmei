import styled from '@emotion/styled'

const images = [
  { src: '/his/his-02.png', alt: '花1' },
  { src: '/his/his-03.png', alt: '花2' },
  { src: '/his/his-04.png', alt: '花3' },
  { src: '/his/his-05.png', alt: '大絵馬' },
]

const SectionWrapper = styled.section`
  width: 100%;
  background: var(--color-oud) url('/top-motion/haikei.png') center top / 100% auto repeat-y;
  background-attachment: fixed;
  padding: 64px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 48px 0 0 0;
  }
`

const TitleArea = styled.div`
  text-align: center;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`

const SubTitle = styled.div`
  color: var(--color-brown);
  font-family: 'Noto Serif JP', serif;
  font-size: 20px;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 4px;
  }
`

const MainTitle = styled.h2`
  color: var(--color-brown);
  font-family: 'Noto Serif JP', serif;
  font-size: 3rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  margin: 0 0 16px 0;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin: 0 0 12px 0;
  }
`

const GridArea = styled.div`
  display: flex;
  gap: 24px;
  width: 90%;
  max-width: 800px;
  margin: 1rem auto 3rem;
  position: relative;
  z-index: 2;
  justify-content: flex-end;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 70%;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media (max-width: 900px) {
    width: 80%;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 768px) {
    gap: 16px;
    width: 80%;
  }
`

const ImageBox = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 16px;
  overflow: hidden;
  background: var(--color-oud);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  max-width: 240px;

  @media (max-width: 1024px) {
    max-width: 240px;
    border-radius: 12px;
  }
  @media (max-width: 768px) {
    max-width: 190px;
    border-radius: 12px;
  }
  @media (max-width: 480px) {
    max-width: 120px;
    border-radius: 12px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`

const DescriptionArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  margin: -90px 0 0 0;
  background: var(--color-oud);
  padding: 9rem 2rem 4rem 2rem;
  gap: 32px;
  position: relative;
  z-index: 1;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 6rem 2rem 6rem 2rem;
    gap: 16px;
    margin-top: 0;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    padding: 2rem 0.5rem 2rem 0.5rem;
    gap: 16px;
    margin-top: 0;
  }
  @media (max-width: 768px) {
    padding: 2rem 1rem 2rem 1rem;
    gap: 12px;
  }
  @media (max-width: 480px) {
    padding: 2rem 1rem 2rem 1rem;
    gap: 16px;
    margin-top: 0;
  }
`

const DescriptionColumn = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 450px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 0 2rem 0 2rem;
    gap: 16px;
    margin-top: 0;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    padding: 0 0.5rem 0 0.5rem;
    gap: 16px;
    margin-top: 0;
  }
  @media (max-width: 768px) {
    max-width: 80%;
  }
  @media (max-width: 480px) {
    max-width: 80%;
    padding: 0 1rem 0 1rem;
    gap: 16px;
    margin-top: 0;
  }
`

const DescriptionText = styled.div`
  color: var(--color-gray);
  font-family: 'Noto Serif JP', serif;
  font-size: 16px;
  line-height: 2;
  margin: 0 0 24px 0;
  white-space: pre-line;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.8;
    margin: 0 0 20px 0;
  }
`

const ButtonArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`

const MidoButton = styled.a`
  background: var(--color-shuiro);
  color: var(--color-white);
  border: none;
  border-radius: 8px;
  padding: 14px 36px;
  font-size: 16px;
  font-family: 'Noto Serif JP', serif;
  font-weight: 500;
  letter-spacing: 0.08em;
  cursor: pointer;
  transition: background 0.2s;
  text-decoration: none;
  display: inline-block;

  &:hover {
    background: #7a2d28;
  }

  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 14px;
    border-radius: 6px;
  }
`

const MidokoroSection = () => {
  return (
    <SectionWrapper>
      <TitleArea>
        <SubTitle>大館神明社の</SubTitle>
        <MainTitle>見どころ</MainTitle>
      </TitleArea>
      <GridArea>
        <ImageBox>
          <img src={images[0].src} alt={images[0].alt} />
        </ImageBox>
        <ImageBox>
          <img src={images[1].src} alt={images[1].alt} />
        </ImageBox>
        <ImageBox>
          <img src={images[2].src} alt={images[2].alt} />
        </ImageBox>
        <ImageBox>
          <img src={images[3].src} alt={images[3].alt} />
        </ImageBox>
      </GridArea>
      <DescriptionArea>
        <DescriptionColumn>
          <DescriptionText>
            大館神明社には、訪れる人々の心を惹きつける見どころがいくつもあります。
            中でも、社殿正面に掲げられた大絵馬は、 地域の歴史と文化を感じさせる象徴的な存在です。
            また、境内を彩る四季折々の観葉植物も、 自然の美しさを楽しむことができる魅力の一つです。
            大館神明社を訪れた際には、ぜひこれらの見どころをお楽しみください。
          </DescriptionText>
          <ButtonArea>
            <MidoButton href='/midokoro'>大館神明社の見どころを見る</MidoButton>
          </ButtonArea>
        </DescriptionColumn>
      </DescriptionArea>
    </SectionWrapper>
  )
}

export default MidokoroSection
