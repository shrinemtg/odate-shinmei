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
  margin: 12rem auto 4rem;

  @media (max-width: 1024px) {
    height: 35vh;
    min-height: 250px;
    margin: 10rem auto 3rem;
  }

  @media (max-width: 768px) {
    height: 30vh;
    min-height: 200px;
    margin: 8rem auto 2rem;
  }

  @media (max-width: 480px) {
    height: 25vh;
    min-height: 150px;
    margin: 6rem auto 1.5rem;
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

  @media (max-width: 1024px) {
    max-width: 500px;
    width: 60%;
    padding: 2.5rem 1.5rem;
    left: 5%;
  }

  @media (max-width: 768px) {
    position: relative;
    left: auto;
    top: auto;
    transform: none;
    width: 100%;
    max-width: 100%;
    padding: 2rem 1rem;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0.5rem;
  }
`

const Title = styled.h2`
  color: var(--color-white);
  font-size: var(--font-size-2xl);
  font-weight: 700;
  margin-bottom: 2.5rem;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
  font-family: var(--font-family-serif);
  line-height: 1.3;

  @media (max-width: 1024px) {
    font-size: var(--font-size-xl);
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-lg);
    margin-bottom: 1.5rem;
    color: var(--color-brown);
    text-shadow: none;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-base);
    margin-bottom: 1rem;
  }
`

const Description = styled.div`
  color: var(--color-white);
  font-size: var(--font-size-base);
  line-height: 1.6;
  max-width: 400px;
  text-align: left;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 1024px) {
    max-width: 100%;
    font-size: var(--font-size-base);
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    color: var(--color-gray);
    font-size: var(--font-size-sm);
    line-height: 1.4;
    text-align: center;
    text-shadow: none;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-xs);
    line-height: 1.3;
  }
`

const Paragraph = styled.p`
  margin-bottom: 2rem;
  font-size: var(--font-size-lg);

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 1024px) {
    margin-bottom: 1.5rem;
    font-size: var(--font-size-base);
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    font-size: var(--font-size-sm);
  }

  @media (max-width: 480px) {
    margin-bottom: 0.75rem;
    font-size: var(--font-size-xs);
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
            犬は多産でお産が軽いことから、安産の象徴とされそれにあやかり、妊娠5ヶ月目の「戌（いぬ）の日」に神社にお参りし、腹帯をお祓いして安産祈願を行うと良いとされています。
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
