import styled from '@emotion/styled'

const images = [
  { src: '/his/his-02.png', alt: '花1' },
  { src: '/his/his-03.png', alt: '花2' },
  { src: '/his/his-04.png', alt: '花3' },
  { src: '/his/his-05.png', alt: '大絵馬' },
]

const SectionWrapper = styled.section`
  width: 100vw;
  background: #f7f5ed url('/top-motion/haikei.png') center center / cover no-repeat;
  padding: 64px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TitleArea = styled.div`
  text-align: center;
  margin-bottom: 32px;
`

const SubTitle = styled.div`
  color: #92824b;
  font-family: 'Noto Serif JP', serif;
  font-size: 20px;
  margin-bottom: 8px;
`

const MainTitle = styled.h2`
  color: #927a3b;
  font-family: 'Noto Serif JP', serif;
  font-size: 48px;
  font-weight: 600;
  letter-spacing: 0.08em;
  margin: 0 0 16px 0;
`

const GridArea = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr;
  gap: 24px;
  width: 820px;
  margin: 0 auto 32px auto;
  position: relative;
  z-index: 2;
  @media (max-width: 900px) {
    width: 98vw;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, 1fr);
  }
`

const ImageBox = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 16px;
  overflow: hidden;
  background: #e5e0d2;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
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
  margin: -60px auto 32px auto;
  background: #d6c7a2;
  border-radius: 0 0 32px 32px;
  padding: 32px 32px 40px 32px;
  gap: 32px;
  width: 820px;
  position: relative;
  z-index: 1;
  @media (max-width: 900px) {
    flex-direction: column;
    padding: 24px 8px 32px 8px;
    gap: 16px;
    width: 98vw;
    margin-top: 0;
  }
`

const DescriptionColumn = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

const DescriptionText = styled.div`
  color: #605856;
  font-family: 'Noto Serif JP', serif;
  font-size: 16px;
  line-height: 2;
  margin-bottom: 0;
  white-space: pre-line;
`

const ButtonArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 24px;
  width: 100%;
`

const SeeMoreButton = styled.button`
  background: #993a37;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 14px 36px;
  font-size: 16px;
  font-family: 'Noto Serif JP', serif;
  font-weight: 500;
  letter-spacing: 0.08em;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #7a2d28;
  }
`

const DescriptionImageBox = styled(ImageBox)`
  width: 260px;
  min-width: 180px;
  max-width: 100%;
  aspect-ratio: 1/1;
  margin-left: 0;
  @media (max-width: 900px) {
    width: 100%;
    min-width: 0;
    margin: 0 auto;
  }
`

const MidokoroSection = () => (
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
      <div />
    </GridArea>
    <DescriptionArea>
      <DescriptionColumn>
        <DescriptionText>
          大館神明社には、訪れる人々の心を惹きつける見どころがいくつもあります。 中でも、社殿正面に掲げられた大絵馬は、
          地域の歴史と文化を感じさせる象徴的な存在です。 また、境内を彩る四季折々の観葉植物も、
          自然の美しさを楽しむことができる魅力の一つです。
          大館神明社を訪れた際には、ぜひこれらの見どころをお楽しみください。
        </DescriptionText>
        <ButtonArea>
          <SeeMoreButton>大館神明社の見どころを見る</SeeMoreButton>
        </ButtonArea>
      </DescriptionColumn>
      <DescriptionImageBox>
        <img src={images[3].src} alt={images[3].alt} />
      </DescriptionImageBox>
    </DescriptionArea>
  </SectionWrapper>
)

export default MidokoroSection
