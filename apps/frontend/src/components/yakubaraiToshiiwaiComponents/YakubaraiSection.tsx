import styled from '@emotion/styled'

const YakubaraiSectionWrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: flex;
  align-items: flex-start;
  gap: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`

const ContentSection = styled.div`
  flex: 1;
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
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
`

const TextContent = styled.div`
  flex: 1;
  color: var(--color-gray);
  font-size: var(--font-size-base);
  line-height: 1.8;
  font-family: var(--font-family-serif);
  margin: 2rem 0 0 0;
`

const PhotoSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
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
          <p>災厄を未然に防ぐ『転ばぬ先の杖』として神社でお願いを受け、厄災を除くのが厄払いです。</p>
          <p>
            しかし、厄年はけして悪いことではなく、役につく年頃になったという意味もあり、その時を無事に迎えられたことに感謝の気持ちを込めて歳祝いとして自分で祝うことも大切です。
          </p>
          <p>また、9年に一度巡る運気停滞の年が『年廻り』と言い、これは男女ともに誕生年から数えます。</p>
          <p>今年の『厄年』『年廻り』は下記表をご覧下さい。</p>
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
