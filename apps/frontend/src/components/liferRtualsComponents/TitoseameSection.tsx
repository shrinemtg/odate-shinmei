import styled from '@emotion/styled'
import { useRouter } from 'next/router'

const TitoseameSectionWrapper = styled.section`
  width: 100vw;
  min-height: 80vh;
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    min-height: 70vh;
  }

  @media (max-width: 768px) {
    min-height: 60vh;
  }

  @media (max-width: 480px) {
    min-height: 50vh;
  }
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

  @media (max-width: 1024px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0.5rem;
  }
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
  box-sizing: border-box;

  @media (max-width: 1024px) {
    gap: 3rem;
    padding: 2.5rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
    padding: 1.5rem;
    margin-bottom: 1rem;
  }
`

const TextSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 1024px) {
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    gap: 1rem;
  }

  @media (max-width: 480px) {
    gap: 0.75rem;
  }
`

const Title = styled.h2`
  color: var(--color-brown);
  font-size: var(--font-size-4xl);
  font-weight: 600;
  font-family: var(--font-family-serif);
  margin-bottom: 0.2rem;
  text-align: left;

  @media (max-width: 1024px) {
    font-size: var(--font-size-3xl);
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-2xl);
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-xl);
  }
`

const TitleImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  margin-bottom: 0.5rem;

  @media (max-width: 1024px) {
    max-width: 350px;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    max-width: 300px;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    max-width: 250px;
    margin-bottom: 0.75rem;
  }
`

const Description = styled.div`
  color: var(--color-gray);
  font-size: var(--font-size-base);
  line-height: 1.6;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;

  @media (max-width: 1024px) {
    font-size: var(--font-size-base);
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
    line-height: 1.4;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-xs);
    line-height: 1.3;
  }
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

  @media (max-width: 1024px) {
    font-size: var(--font-size-base);
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
    line-height: 1.4;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-xs);
    line-height: 1.3;
    margin-bottom: 0.75rem;
  }
`

const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;

  @media (max-width: 1024px) {
    margin-top: 3rem;
  }

  @media (max-width: 768px) {
    margin-top: 0;
  }
`

const TitoseameImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    max-width: 90%;
  }

  @media (max-width: 768px) {
    max-width: 80%;
  }

  @media (max-width: 480px) {
    max-width: 75%;
  }
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

  @media (max-width: 1024px) {
    padding: 0.875rem 2.5rem;
    font-size: var(--font-size-base);
  }

  @media (max-width: 768px) {
    padding: 0.75rem 2rem;
    font-size: var(--font-size-sm);
  }

  @media (max-width: 480px) {
    padding: 0.625rem 1.5rem;
    font-size: var(--font-size-xs);
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
            <TitleImage src='/life/life-09.png' alt='千歳飴の写真' />
            <Description>
              <Paragraph>
                大館神明社では 七五三のご祈祷を受けられたお子さまに、千歳飴をお配りしております。
                <br />
                七五三のお祝いに欠かせない「千歳飴(ちとせあめ)」は 子どもの健やかな成長と長寿を願う象徴的な贈り物です。
              </Paragraph>
              <Paragraph>
                千歳飴は、長寿の願いを込めて、粘り強く細長い飴を、 人生になぞらえた縁起ものです。
                <br />
                七五三の内祝い、またそのお返しにご親戚、ご友人、ご近所とで贈り合ったりもします。
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
