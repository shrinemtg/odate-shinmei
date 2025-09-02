import styled from '@emotion/styled'
import { useRouter } from 'next/navigation'

const SeizinsikiSectionWrapper = styled.section`
  width: 100vw;
  min-height: 80vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(/life/life-07.png) 20% center / cover no-repeat;

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

const VerticalTitle = styled.section`
  width: 100vw;
  height: 40vh;
  min-height: 300px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4rem auto 4rem;

  @media (max-width: 1024px) {
    height: 35vh;
    min-height: 250px;
    margin: 3rem auto 3rem;
  }

  @media (max-width: 768px) {
    height: 20vh;
    min-height: 150px;
    margin: 1rem auto 1rem;
  }

  @media (max-width: 480px) {
    height: 15vh;
    min-height: 100px;
    margin: 0.5rem auto 0.5rem;
  }
`

const VerticalTitleText = styled.h1`
  color: var(--color-brown);
  font-size: var(--font-size-5xl);
  font-weight: 600;
  writing-mode: vertical-rl;
  letter-spacing: 0.3em;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  font-family: var(--font-family-serif);
  line-height: 1.2;
  margin: 12rem auto 4rem;
  white-space: nowrap;
  overflow: hidden;

  @media (max-width: 1024px) {
    font-size: var(--font-size-4xl);
    margin: 10rem auto 3rem;
  }

  @media (max-width: 768px) {
    writing-mode: horizontal-tb;
    font-size: var(--font-size-3xl);
    text-align: center;
    margin: 0;
    letter-spacing: 0.2em;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-2xl);
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1;
`

const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);

  @media (max-width: 1024px) {
    max-width: 350px;
    right: 3%;
  }

  @media (max-width: 768px) {
    background: rgba(94, 91, 91, 0.51);
    position: relative;
    right: auto;
    top: auto;
    transform: none;
    max-width: 100%;
    align-items: center;
    text-align: center;
  }
`

const Title = styled.h2`
  color: var(--color-white);
  font-size: var(--font-size-3xl);
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
  font-family: var(--font-family-serif);
  line-height: 1;

  @media (max-width: 1024px) {
    font-size: var(--font-size-2xl);
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-xl);
    color: var(--color-white);
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-lg);
  }
`

const Description = styled.div`
  color: var(--color-white);
  font-size: var(--font-size-base);
  line-height: 1.6;
  max-width: 100%;
  text-align: left;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 1024px) {
    font-size: var(--font-size-base);
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    color: var(--color-white);
    font-size: var(--font-size-sm);
    line-height: 1.4;
    text-align: center;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
    padding: 1rem;
    border-radius: 8px;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-xs);
    line-height: 1.3;
    padding: 0.75rem;
    background: rgba(128, 128, 128, 0.1);
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
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

const Notice = styled.div`
  color: var(--color-gray);
  font-size: var(--font-size-base);
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0;

  p {
    margin-bottom: 0;
  }

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

const SubContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (max-width: 1024px) {
    width: 90%;
    max-width: 100%;
    padding: 1.5rem 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.75rem 0.5rem;
  }
`

const SeizinsikiSection = () => {
  const router = useRouter()

  const handleReservationClick = () => {
    router.push('/contact/seizinsiki') // 成人式の予約ページにリダイレクト
  }

  return (
    <>
      <VerticalTitle>
        <VerticalTitleText>成人式</VerticalTitleText>
      </VerticalTitle>
      <SeizinsikiSectionWrapper>
        <Overlay />
        <ContentContainer>
          <Title>成人式</Title>
          <Description>
            <Paragraph>
              人生の大きな節目として、古くから大切にされてきた通過儀礼、その由来は、男子が冠をつける「元服」、女子が成人の装いに改める「裳着」など、平安時代より続く儀式にさかのぼります。子どもから大人へと変わることを神さまに報告し、社会の一員として歩み始める誓いの場でした。
            </Paragraph>
            <Paragraph>
              現代においても、成人の日のご祈祷は、節目に心を整え、家族や地域への感謝をあらたにする大切な機会です。
            </Paragraph>
            <Paragraph>大人としての第一歩を、どうぞ神様の御前でお迎えください。</Paragraph>
          </Description>
        </ContentContainer>
      </SeizinsikiSectionWrapper>
      <SubContainer>
        <Notice>
          <Paragraph>18歳、人生における大切な節目である社会人としての門出を</Paragraph>
          <Paragraph>ぜひご友人やご家族とともにお迎えください。</Paragraph>
        </Notice>
        <ReservationButton onClick={handleReservationClick}>ご予約はコチラ</ReservationButton>
      </SubContainer>
    </>
  )
}

export default SeizinsikiSection
