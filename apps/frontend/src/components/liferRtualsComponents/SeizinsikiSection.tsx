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
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
`

const Title = styled.h2`
  color: var(--color-white);
  font-size: var(--font-size-3xl);
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
  font-family: var(--font-family-serif);
  line-height: 1;
`

const Description = styled.div`
  color: var(--color-white);
  font-size: var(--font-size-base);
  line-height: 1.6;
  max-width: 100%;
  text-align: left;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
`

const Paragraph = styled.p`
  margin-bottom: 1rem;
  font-size: var(--font-size-lg);

  &:last-child {
    margin-bottom: 0;
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

  &:hover {
    background: var(--color-shuiro);
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
          <Paragraph>18歳、人生に一度、社会人として大人になる大切な節目をぜひ</Paragraph>
          <Paragraph>ご友人やご家族とともにお越しください。</Paragraph>
        </Notice>
        <ReservationButton onClick={handleReservationClick}>ご予約はコチラ</ReservationButton>
      </SubContainer>
    </>
  )
}

export default SeizinsikiSection
