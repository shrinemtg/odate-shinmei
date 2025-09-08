import styled from '@emotion/styled'

const GokitouSectionWrapper = styled.section`
  width: 100%;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  background: var(--color-oud) url('/top-motion/haikei.png') center top / 100% auto repeat-y;
  background-attachment: fixed;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 3rem 1.5rem;
    gap: 2.5rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 3rem 0;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 3rem 0;
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
  margin: 0;
  line-height: 1.2;

  @media (max-width: 1024px) {
    font-size: var(--font-size-4xl);
  }

  @media (max-width: 768px) {
    writing-mode: horizontal-tb;
    font-size: var(--font-size-3xl);
    text-align: center;
    letter-spacing: 0.1em;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-2xl);
  }
`

const ContentBox = styled.div`
  width: 100%;
  max-width: 800px;
  border: 2px solid var(--color-gray);
  border-radius: 8px;
  padding: 3rem 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: calc(90% - 2rem);
    max-width: calc(90% - 2rem);
    padding: 2.5rem 1.5rem;
    margin: 0 1rem;
  }

  @media (max-width: 768px) {
    width: calc(80% - 2rem);
    max-width: calc(80% - 2rem);
    padding: 1.5rem 0.75rem;
    border-radius: 8px;
    margin: 0 1rem;
  }

  @media (max-width: 480px) {
    width: calc(95% - 2rem);
    max-width: calc(320px - 2rem);
    padding: 1rem 0.5rem;
    border-radius: 4px;
    margin: 0 1rem;
  }
`

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 1024px) {
    gap: 1.75rem;
  }

  @media (max-width: 768px) {
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1.25rem;
  }
`

const Section = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 1rem;
  }

  @media (max-width: 768px) {
    gap: 0.875rem;
  }

  @media (max-width: 480px) {
    gap: 0.75rem;
  }
`

const SectionLabel = styled.div`
  background: var(--color-shuiro);
  color: var(--color-white);
  margin-top: 0.5rem;
  padding: 0.5rem 0.1rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: var(--font-size-base);
  font-family: var(--font-family-serif);
  min-width: 120px;
  text-align: center;
  flex-shrink: 0;

  @media (max-width: 1024px) {
    font-size: var(--font-size-base);
    padding: 0.5rem 0.7rem;
    min-width: 110px;
  }

  @media (max-width: 767px) {
    min-width: auto;
    width: fit-content;
    font-size: var(--font-size-sm);
    padding: 0.4rem 0.6rem;
    border-radius: 8px;
    margin-top: 0;
  }

  @media (max-width: 374px) {
    font-size: var(--font-size-xs);
    padding: 0.3rem 0.5rem;
    border-radius: 8px;
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

  @media (max-width: 1024px) {
    font-size: var(--font-size-base);
    line-height: 1.7;

    p {
      margin: 0 0 0.4rem 0;
    }

    ul {
      margin: 0.4rem 0;
      padding-left: 1.25rem;
    }
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
    line-height: 1.6;

    p {
      margin: 0 0 0.3rem 0;
    }

    ul {
      margin: 0.3rem 0;
      padding-left: 1rem;
    }

    li {
      margin-bottom: 0.2rem;
    }
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-xs);
    line-height: 1.5;

    p {
      margin: 0 0 0.25rem 0;
    }

    ul {
      margin: 0.25rem 0;
      padding-left: 0.75rem;
    }

    li {
      margin-bottom: 0.15rem;
    }
  }
`

const ContactButton = styled.a`
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
  margin: 2rem auto 1rem;
  display: block;
  width: fit-content;
  text-decoration: none;

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

const ImageGridSection = styled.section`
  width: 100%;
  max-width: 95%;
  margin: 0 auto;
  padding: 4rem 2rem;
  background: var(--color-oud) url('/top-motion/haikei.png') center top / 100% auto repeat-y;
  background-attachment: fixed;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 100%;
    padding: 3rem 3rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    padding: 2rem 0;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 100%;
    padding: 1.5rem 0;
  }
`

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin: 8rem;

  @media (max-width: 1024px) {
    gap: 1rem;
    margin: 5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin: 2rem auto 3rem auto;
    justify-items: center;
    max-width: 400px;
  }

  @media (max-width: 480px) {
    gap: 1rem;
    margin: 1.5rem auto;
    justify-items: center;
    max-width: 350px;
  }
`

const ImageCard = styled.a`
  background: var(--color-white);
  border: 1px solid var(--color-oud);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  display: block;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 1024px) {
    border-radius: 6px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
    }
  }

  @media (max-width: 768px) {
    border-radius: 4px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
  }

  @media (max-width: 480px) {
    border-radius: 3px;

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    }
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

  @media (max-width: 1024px) {
    height: 250px;
  }

  @media (max-width: 768px) {
    height: 200px;
  }

  @media (max-width: 480px) {
    height: 180px;
  }
`

const GokitouSection = () => {
  const imageData = [
    {
      id: 1,
      image: '/gokitou/gokitou-02.png',
      href: '/kakusyuGokitou',
    },
    {
      id: 2,
      image: '/gokitou/gokitou-03.png',
      href: '/lifeRtuals',
    },
    {
      id: 3,
      image: '/gokitou/gokitou-04.png',
      href: '/yakubaraiToshiiwai',
    },
    {
      id: 4,
      image: '/gokitou/gokitou-05.png',
      href: '/gaisai',
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
                <p>午前八時三十分～午後五時</p>
                <p>※その他ご不明な点等は神社社務所にお尋ねください。</p>
              </SectionContent>
            </Section>
          </SectionContainer>

          <ContactButton href='/contact'>お問い合わせフォーム</ContactButton>
        </ContentBox>
      </GokitouSectionWrapper>

      <ImageGridSection>
        <ImageGrid>
          {imageData.map((item) => (
            <ImageCard key={item.id} href={item.href}>
              <ImageWrapper>
                <img src={item.image} alt={`祈祷画像${item.id}`} />
              </ImageWrapper>
            </ImageCard>
          ))}
        </ImageGrid>
      </ImageGridSection>
    </>
  )
}

export default GokitouSection
