import styled from '@emotion/styled'

const AnzanSectionWrapper = styled.section`
  width: 100vw;
  min-height: 80vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(/life/life-02.png) center center / cover no-repeat;
`

const VerticalTitle = styled.section`
  width: 100vw;
  height: 40vh;
  min-height: 300px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 12rem auto 4rem;
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
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
`

const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
  max-width: 600px;
  width: 50%;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  position: absolute;
  left: 10%;
  top: 50%;
  transform: translateY(-50%);
`

const Title = styled.h2`
  color: var(--color-white);
  font-size: var(--font-size-2xl);
  font-weight: 700;
  margin-bottom: 2.5rem;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
  font-family: var(--font-family-serif);
  line-height: 1.3;
`

const Description = styled.div`
  color: var(--color-white);
  font-size: var(--font-size-base);
  line-height: 1.6;
  max-width: 400px;
  text-align: left;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
`

const Paragraph = styled.p`
  margin-bottom: 2rem;
  font-size: var(--font-size-lg);

  &:last-child {
    margin-bottom: 0;
  }
`

const AnzanSection = () => (
  <>
    <VerticalTitle>
      <VerticalTitleText>安産祈願</VerticalTitleText>
    </VerticalTitle>
    <AnzanSectionWrapper>
      <Overlay />
      <ContentContainer>
        <Title>安産祈願をなぜ戌の日に？</Title>
        <Description>
          <Paragraph>古来より、日本では子どもは神さまからの「授かりもの」と考えられてきました。</Paragraph>
          <Paragraph>
            犬は多産でお産が軽いことから、安産の象徴とされ
            それにあやかり、妊娠5ヶ月目の「戌（いぬ）の日」に神社へお参りし 安産祈願と帯祝いを行うと良いとされています。
          </Paragraph>
          <Paragraph>
            妊娠中は体調のすぐれない日もあることと思います。
            「戌の日」はあくまで目安として、どうぞ体調のよい日にお参りください。
          </Paragraph>
        </Description>
      </ContentContainer>
    </AnzanSectionWrapper>
  </>
)

export default AnzanSection
