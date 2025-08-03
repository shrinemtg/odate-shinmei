import styled from '@emotion/styled'
import { useRouter } from 'next/router'

const TitoseameSectionWrapper = styled.section`
  width: 100vw;
  min-height: 80vh;
  position: relative;
  display: flex;
  align-items: center;
`

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

const MainContent = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  align-items: flex-start;
  gap: 4rem;
  margin-bottom: 3rem;
  padding: 3rem;
  border: 2px solid var(--color-shuiro);
  border-radius: 8px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
  }
`

const TextSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const Title = styled.h2`
  color: var(--color-brown);
  font-size: var(--font-size-4xl);
  font-weight: 600;
  font-family: var(--font-family-serif);
  margin-bottom: 0.2rem;
  text-align: left;
`

const Description = styled.div`
  color: var(--color-gray);
  font-size: var(--font-size-base);
  line-height: 1.6;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;
`

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
`

const Notice = styled.div`
  color: var(--color-gray);
  font-size: var(--font-size-base);
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`
const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
`

const TitoseameImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`

const ReservationButton = styled.button`
  background: var(--color-shuiro);
  color: var(--color-white);
  border: none;
  padding: 1rem 3rem;
  font-size: var(--font-size-base);
  font-weight: 600;
  font-family: var(--font-family-sans);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  align-self: center;

  &:hover {
    background: var(--color-shuiro);
  }
`

const TitoseameSection = () => {
  const router = useRouter()

  const handleReservationClick = () => {
    router.push('/contact')
  }

  return (
    <TitoseameSectionWrapper>
      <ContentContainer>
        <MainContent>
          <TextSection>
            <Title>千歳飴</Title>
            <Description>
              <Paragraph>大館神明社では 七五三のご祈祷を受けられたお子さまに、千歳飴をお渡ししております。</Paragraph>
              <Paragraph>
                七五三のお祝いに欠かせない「千歳飴(ちとせあめ)」は 子どもの健やかな成長と長寿を願う象徴的な贈り物です。
              </Paragraph>
              <Paragraph>「千歳」は「千年」を意味し、長寿や繁栄を願う気持ちが 込められ</Paragraph>
              <Paragraph>
                細長い形状は「長生き」を象徴し、 紅白の色合いは「めでたさ」や「健康」を表しています。
              </Paragraph>
            </Description>
          </TextSection>
          <ImageSection>
            <TitoseameImage src='/life/life-06.png' alt='千歳飴の写真' />
          </ImageSection>
        </MainContent>
        <Notice>
          <Paragraph>大館神明社では 11月だけでなく1年を通して七五三の御祈祷を受け付けております。</Paragraph>
          <Paragraph>ご家族のご都合に合わせお越しください。</Paragraph>
        </Notice>
        <ReservationButton onClick={handleReservationClick}>ご予約はコチラ</ReservationButton>
      </ContentContainer>
    </TitoseameSectionWrapper>
  )
}

export default TitoseameSection
