import styled from '@emotion/styled'
import { useRouter } from 'next/router'

const GokitouSectionWrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`

const MainTitle = styled.h2`
  font-size: var(--font-size-5xl);
  font-weight: 600;
  color: var(--color-brown);
  writing-mode: vertical-rl;
  letter-spacing: 0.2em;
  font-family: var(--font-family-serif);
  margin: 0;
  line-height: 1.2;
`

const ContentBox = styled.div`
  width: 100%;
  max-width: 800px;
  border: 2px solid var(--color-gray);
  border-radius: 8px;
  padding: 3rem 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const Section = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`

const SectionLabel = styled.div`
  background: var(--color-shuiro);
  color: var(--color-white);
  margin-top: 0.5rem;
  padding: 0.5rem 0.8rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: var(--font-size-base);
  font-family: var(--font-family-serif);
  min-width: 120px;
  text-align: center;
  flex-shrink: 0;

  @media (max-width: 768px) {
    min-width: auto;
    width: fit-content;
  }
`

const SectionContent = styled.div`
  flex: 1;
  color: var(--color-gray);
  font-size: var(--font-size-base);
  line-height: 1.8;

  p {
    margin: 0 0 0.5rem 0;
  }

  ul {
    margin: 0.5rem 0;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.25rem;
  }
`

const ContactButton = styled.button`
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
  margin-top: 2rem;
  width: 100%;
  max-width: 300px;
  display: block;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    background: #7a2e2b;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(153, 58, 55, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`

const ImageGridSection = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin: 8rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`

const ImageCard = styled.div`
  background: var(--color-white);
  border: 1px solid var(--color-oud);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    object-position: center;
  }
`

const GokitouSection = () => {
  const router = useRouter()

  const handleContactClick = () => {
    // お問い合わせフォームへの遷移処理
    console.log('お問い合わせフォームへ遷移')
  }

  const handleLifeRtualsClick = () => {
    router.push('/lifeRtuals')
  }

  const handleKakusyuGokitouClick = () => {
    router.push('/kakusyuGokitou')
  }

  const handleYakubaraiToshiiwaiClick = () => {
    router.push('/yakubaraiToshiiwai')
  }

  const handleGaisaiClick = () => {
    router.push('/gaisai')
  }

  const imageData = [
    {
      id: 1,
      image: '/gokitou/gokitou-02.png',
    },
    {
      id: 2,
      image: '/gokitou/gokitou-03.png',
    },
    {
      id: 3,
      image: '/gokitou/gokitou-04.png',
    },
    {
      id: 4,
      image: '/gokitou/gokitou-05.png',
    },
  ]

  return (
    <>
      <GokitouSectionWrapper>
        <MainTitle>祈祷</MainTitle>
        <ContentBox>
          <SectionContainer>
            <Section>
              <SectionLabel>願意</SectionLabel>
              <SectionContent>
                <p>
                  厄払い・歳祝い、人生儀礼、外祭、など、その他様々な御祈祷を行っています。詳しくは各ページをご参照下さい。
                </p>
              </SectionContent>
            </Section>

            <Section>
              <SectionLabel>初穂料</SectionLabel>
              <SectionContent>
                <p>八千円~お気持ちでいただいております。</p>
                <p>外祭は二万円~お気持ちでいただいております。</p>
                <p>※七五三はパックがございます。詳しくは七五三ページにてご参照下さい。</p>
              </SectionContent>
            </Section>

            <Section>
              <SectionLabel>祈願受付</SectionLabel>
              <SectionContent>
                <p>午前九時~午後六時</p>
                <p>※その他ご不明な点等は神社社務所にお尋ねください。</p>
              </SectionContent>
            </Section>
          </SectionContainer>

          <ContactButton onClick={handleContactClick}>お問い合わせフォーム</ContactButton>
        </ContentBox>
      </GokitouSectionWrapper>

      <ImageGridSection>
        <ImageGrid>
          {imageData.map((item) => {
            let onClickHandler = undefined

            if (item.image === '/gokitou/gokitou-02.png') {
              onClickHandler = handleKakusyuGokitouClick
            } else if (item.image === '/gokitou/gokitou-03.png') {
              onClickHandler = handleLifeRtualsClick
            } else if (item.image === '/gokitou/gokitou-04.png') {
              onClickHandler = handleYakubaraiToshiiwaiClick
            } else if (item.image === '/gokitou/gokitou-05.png') {
              onClickHandler = handleGaisaiClick
            }

            return (
              <ImageCard key={item.id} onClick={onClickHandler}>
                <ImageWrapper>
                  <img src={item.image} alt={`祈祷画像${item.id}`} />
                </ImageWrapper>
              </ImageCard>
            )
          })}
        </ImageGrid>
      </ImageGridSection>
    </>
  )
}

export default GokitouSection
