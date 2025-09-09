import styled from '@emotion/styled'

const YakubaraiSectionWrapper = styled.section`
  width: 100vw;
  padding: 4rem 2rem;
  display: flex;
  align-items: flex-start;
  background: var(--color-oud) url('/top-motion/haikei.png') center top / 100% auto repeat-y;
  background-attachment: fixed;

  @media (max-width: 1024px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 768px) {
    width: 100vw;
    flex-direction: column;
    gap: 2rem;
    padding: 3rem 1rem;
    align-items: center;
  }

  @media (max-width: 480px) {
    width: 100vw;
    padding: 2rem 0.5rem;
    gap: 2rem;
    align-items: center;
  }
`

const ContentSection = styled.div`
  flex: 1;
  display: flex;
  gap: 0.8rem;

  @media (max-width: 1024px) {
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    align-items: center;
    order: 1;
  }

  @media (max-width: 480px) {
    gap: 1rem;
    align-items: center;
  }
`

const MainTitle = styled.h2`
  font-size: var(--font-size-5xl);
  font-weight: 600;
  color: var(--color-brown);
  writing-mode: vertical-rl;
  letter-spacing: 0.2em;
  font-family: var(--font-family-serif);
  margin: 0 0 0 8rem;
  line-height: 1.2;
  flex-shrink: 0;

  @media (max-width: 1024px) {
    font-size: var(--font-size-4xl);
    margin: 0 0 0 8rem;
  }

  @media (max-width: 768px) {
    writing-mode: horizontal-tb;
    font-size: var(--font-size-3xl);
    text-align: center;
    margin: 0;
    letter-spacing: 0.1em;
    order: 1;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-2xl);
  }
`

const TextContent = styled.div`
  flex: 1;
  color: var(--color-gray);
  font-size: var(--font-size-base);
  line-height: 1.8;
  font-family: var(--font-family-serif);
  margin: 2rem 0 0 0;
  padding: 0 1rem;

  @media (max-width: 1024px) {
    font-size: var(--font-size-base);
    line-height: 1.7;
    margin: 1.5rem 0 0 0;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
    line-height: 1.6;
    margin: 0;
    text-align: center;
    width: 90%;
    max-width: 600px;
    padding: 0 1rem;
    order: 3;
  }

  @media (max-width: 480px) {
    width: 90%;
    font-size: var(--font-size-xs);
    line-height: 1.5;
    padding: 0 0.5rem;
  }
`

const PhotoSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    order: 2;
  }
`

const PhotoWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  margin: 3rem 0 0 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    max-width: 350px;
    height: 250px;
    margin: 2rem 0 0 0;
  }

  @media (max-width: 768px) {
    max-width: 300px;
    height: 200px;
    margin: 0;
  }

  @media (max-width: 480px) {
    max-width: 250px;
    height: 180px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`

const YakubaraiSection = () => {
  return (
    <YakubaraiSectionWrapper>
      <ContentSection>
        <MainTitle>厄払い</MainTitle>
        <TextContent>
          <p>
            災厄を未然に防ぐ『転ばぬ先の杖』として神社でお願いを受け、厄災を除くのが厄払いです。
            <br />
            しかし、厄年はけして悪いことではなく、役につく年頃になったという意味もあり、その時を無事に迎えられたことに感謝の気持ちを込めて家族、友人達と共に歳祝としてお祝いします。
          </p>
        </TextContent>
      </ContentSection>

      <PhotoSection>
        <PhotoWrapper>
          <img src='/yakubaraiPhoto/yakubarai-02.png' alt='盛り塩' />
        </PhotoWrapper>
      </PhotoSection>
    </YakubaraiSectionWrapper>
  )
}

export default YakubaraiSection
