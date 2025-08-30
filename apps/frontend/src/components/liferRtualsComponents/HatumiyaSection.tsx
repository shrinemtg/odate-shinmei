import styled from '@emotion/styled'
import { useRouter } from 'next/router'

const HatumiyaSectionWrapper = styled.section`
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
  align-items: center;
  gap: 2rem;

  @media (max-width: 1024px) {
    padding: 3rem 1.5rem;
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 1rem;
    gap: 2rem;
    align-items: center;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0.5rem;
    gap: 1.5rem;
  }
`

const ImageSection = styled.div`
  flex: 1;
  max-width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    max-width: 45%;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    order: 2;
    justify-content: center;
    align-items: center;
  }
`

const HatumiyaImage = styled.img`
  width: 100%;
  max-width: 90%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  margin: 0 2rem 0 6rem;

  @media (max-width: 1024px) {
    max-width: 100%;
    margin: 0 2rem 5rem 2rem;
  }

  @media (max-width: 768px) {
    max-width: 80%;
    margin: 0;
  }

  @media (max-width: 480px) {
    max-width: 70%;
    margin: 0;
  }
`

const TextSection = styled.div`
  flex: 1;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;

  @media (max-width: 1024px) {
    max-width: 45%;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    align-items: center;
    text-align: center;
    order: 3;
  }
`

const VerticalTitle = styled.h1`
  position: absolute;
  top: -0.1rem;
  right: 0;
  color: var(--color-brown);
  font-size: var(--font-size-5xl);
  font-weight: 600;
  writing-mode: vertical-rl;
  letter-spacing: 0.3em;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  font-family: var(--font-family-serif);
  line-height: 1.2;
  margin: 0 5rem 0 0;
  white-space: nowrap;

  @media (max-width: 1024px) {
    font-size: var(--font-size-4xl);
    margin: 0 5rem 0 0;
  }

  @media (max-width: 768px) {
    position: static;
    writing-mode: horizontal-tb;
    font-size: var(--font-size-2xl);
    text-align: center;
    margin: 0 0 1rem 0;
    letter-spacing: 0.2em;
    order: 1;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-xl);
  }
`

const SectionTitle = styled.h2`
  color: var(--color-shuiro);
  font-size: var(--font-size-3xl);
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-family: var(--font-family-serif);
  line-height: 1.2;

  @media (max-width: 1024px) {
    font-size: var(--font-size-2xl);
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-xl);
    order: 3;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-lg);
  }
`

const Description = styled.div`
  color: var(--color-gray);
  font-size: var(--font-size-base);
  line-height: 1.6;
  max-width: 80%;

  @media (max-width: 1024px) {
    max-width: 80%;
    font-size: var(--font-size-base);
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
    line-height: 1.4;
    order: 4;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-xs);
    line-height: 1.3;
    padding: 0 0.5rem;
  }
`

const Paragraph = styled.p`
  margin-bottom: 1rem;
  font-size: var(--font-size-lg);

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 1024px) {
    margin-bottom: 0.875rem;
    font-size: var(--font-size-base);
  }

  @media (max-width: 768px) {
    margin-bottom: 0.75rem;
    font-size: var(--font-size-sm);
  }

  @media (max-width: 480px) {
    margin-bottom: 0.5rem;
    font-size: var(--font-size-xs);
  }
`

const ReservationButton = styled.button`
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
  align-self: flex-end;
  margin: 2rem auto 3rem;

  &:hover {
    background: #7a2e2b;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(153, 58, 55, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 1024px) {
    padding: 0.875rem 1.75rem;
    font-size: var(--font-size-base);
  }

  @media (max-width: 768px) {
    align-self: center;
    padding: 0.75rem 1.5rem;
    font-size: var(--font-size-sm);
    order: 5;
  }

  @media (max-width: 480px) {
    padding: 0.625rem 1.25rem;
    font-size: var(--font-size-xs);
  }
`

const HatumiyaSection = () => {
  const router = useRouter()

  const handleReservationClick = () => {
    router.push('/contact')
  }

  return (
    <HatumiyaSectionWrapper>
      <ContentContainer>
        <VerticalTitle>初宮参り</VerticalTitle>
        <ImageSection>
          <HatumiyaImage src='/life/life-04.png' alt='初宮詣の写真' />
        </ImageSection>

        <TextSection>
          <SectionTitle>初宮参りとは？</SectionTitle>
          <Description>
            <Paragraph>
              初宮詣は、赤ちゃんが生まれてから約30日後に神社にお参りし、
              無事に生まれてくれたことへの感謝と、これからの健やかな成長を祈願する大切な行事です。
            </Paragraph>
            <Paragraph>
              この風習は鎌倉時代に始まり、室町時代には神社参拝と祈願の形に発展しました。
              赤ちゃんにとって初めての儀式となりますので、お母さんと赤ちゃんの体調の良い日にお参りすることをお勧めします。
            </Paragraph>
          </Description>
          <ReservationButton onClick={handleReservationClick}>ご予約はコチラ</ReservationButton>
        </TextSection>
      </ContentContainer>
    </HatumiyaSectionWrapper>
  )
}

export default HatumiyaSection
