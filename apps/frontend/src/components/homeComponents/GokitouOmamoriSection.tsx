import Image from 'next/image'
import styled from '@emotion/styled'

const GokitouOmamoriSection = () => (
  <Wrapper>
    {/* --- 御祈祷セクション --- */}
    <Section>
      <Card>
        <LeftCol>
          <LeftImage src='/backsozai/gokitou-01.png' alt='祈祷イメージ' />
        </LeftCol>
        <RightCol>
          <Row>
            <VerticalTitle>御祈祷</VerticalTitle>
            <Description>
              大館神明社では、さまざまな御祈祷に対応しております。
              日々の感謝や心の平安を求めるご祈祷、どうぞお気軽にお越しください。
            </Description>
          </Row>
          <CatImageBox>
            <Image
              src='/neko/neko02.png'
              alt='祈祷猫'
              width={220}
              height={260}
              style={{ width: '100%', height: 'auto', display: 'block' }}
              priority
            />
          </CatImageBox>
          <DetailButton href='/gokitouGosanpai'>詳しく見る</DetailButton>
        </RightCol>
      </Card>
    </Section>
    {/* --- お守りセクション --- */}
    <OmamoriSection>
      <Card>
        <LeftCol>
          <LeftImage src='/backsozai/omamori01.png' alt='お守りイメージ' />
        </LeftCol>
        <RightCol>
          <Row>
            <VerticalTitle>お守り</VerticalTitle>
            <Description>
              大館神明社では、古くから地域の人々の願いに寄り添い、御神符やお守りを授与しております。
            </Description>
          </Row>
          <OmamoriCatImageBox>
            <Image
              src='/neko/neko06.png'
              alt='お守り猫'
              width={220}
              height={260}
              style={{ width: '100%', height: 'auto', display: 'block' }}
              priority
            />
          </OmamoriCatImageBox>
          <DetailButton href='/omamori'>詳しく見る</DetailButton>
        </RightCol>
      </Card>
    </OmamoriSection>
  </Wrapper>
)

export default GokitouOmamoriSection

// ================= styled-components =================
const Wrapper = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin: 0;
  }
`

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9rem 0 0;
  background: url(/top-motion/haikei.png) center center / cover no-repeat;

  @media (max-width: 1024px) {
    padding: 8rem 0 0;
  }

  @media (max-width: 768px) {
    padding: 6rem 0 0;
  }

  @media (max-width: 480px) {
    padding: 4rem 0 0;
  }
`

const OmamoriSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9rem 0;
  background: url(/top-motion/haikei.png) center center / cover no-repeat;

  @media (max-width: 1024px) {
    padding: 8rem 0;
  }

  @media (max-width: 768px) {
    padding: 6rem 0;
  }

  @media (max-width: 480px) {
    padding: 4rem 0;
  }
`
const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  max-width: 70%;
  width: 100%;
  border-radius: 32px;
  overflow: hidden;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
  background: #fff;
  min-height: 320px;

  @media (max-width: 1024px) {
    max-width: 75%;
    border-radius: 28px;
    margin: 0 0 0 4rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 80%;
    border-radius: 24px;
    min-height: auto;
    margin: 0;
  }

  @media (max-width: 480px) {
    max-width: 80%;
    border-radius: 20px;
  }
`

const LeftCol = styled.div`
  flex: 1.6;
  min-width: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;

  @media (max-width: 1024px) {
    height: 450px;
  }

  @media (max-width: 768px) {
    flex: none;
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 280px;
  }
`

const LeftImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: none;
  border-radius: 0;
`

const RightCol = styled.div`
  flex: 1;
  min-width: 0;
  background: var(--color-shuiro);
  color: var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 32px;
  position: relative;
  min-height: 320px;
  overflow: visible;

  @media (max-width: 1024px) {
    padding: 32px 24px;
    min-height: 280px;
  }

  @media (max-width: 768px) {
    padding: 24px 20px;
    min-height: 240px;
  }

  @media (max-width: 480px) {
    padding: 20px 16px;
    min-height: 200px;
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  justify-content: center;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
`

const VerticalTitle = styled.div`
  writing-mode: vertical-rl;
  font-size: var(--font-size-5xl);
  font-weight: 600;
  letter-spacing: 0.2em;
  font-family: serif;
  color: var(--color-white);
  line-height: 1.1;
  margin: 1rem 0 8rem 0;

  @media (max-width: 1024px) {
    font-size: var(--font-size-5xl);
  }
  @media (max-width: 940px) {
    writing-mode: horizontal-tb;
    font-size: var(--font-size-5xl);
    margin-right: 0;
    margin: 1rem 0 8rem 0;
  }
  @media (max-width: 768px) {
    font-size: var(--font-size-4xl);
    margin-bottom: 1rem;
  }
  @media (max-width: 480px) {
    font-size: var(--font-size-3xl);
    margin-bottom: 1rem;
  }
`

const Description = styled.div`
  font-size: var(--font-size-base);
  font-family: serif;
  color: var(--color-white);
  line-height: 2;
  max-width: 200px;
  margin-top: 2rem;

  @media (max-width: 1024px) {
    font-size: var(--font-size-base);
    line-height: 1.5;
    max-width: 100%;
    text-align: center;
    margin-top: 1rem;
  }
  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
    line-height: 1.5;
    max-width: 100%;
    text-align: center;
    margin: 0;
  }
`

const CatImageBox = styled.div`
  position: absolute;
  right: 260px;
  bottom: -50px;
  width: 220px;
  height: 260px;
  z-index: 3;

  @media (max-width: 1024px) {
    right: 180px;
    bottom: -35px;
    width: 160px;
    height: 190px;
  }

  @media (max-width: 768px) {
    position: relative;
    right: auto;
    bottom: auto;
    width: 140px;
    height: 150px;
    margin: 10px 0;
  }

  @media (max-width: 480px) {
    width: 130px;
    height: 140px;
    margin: 8px 0;
  }
`

const OmamoriCatImageBox = styled.div`
  position: absolute;
  right: 220px;
  bottom: -140px;
  width: 280px;
  height: 330px;
  z-index: 3;

  @media (max-width: 1024px) {
    right: 180px;
    bottom: -60px;
    width: 200px;
    height: 240px;
  }

  @media (max-width: 768px) {
    position: relative;
    right: auto;
    bottom: auto;
    width: 180px;
    height: 140px;
    margin: 10px 0;
  }

  @media (max-width: 480px) {
    width: 180px;
    height: 140px;
    margin: 8px 0;
  }
`

const DetailButton = styled.a`
  position: absolute;
  right: 24px;
  bottom: 24px;
  background: transparent;
  color: var(--color-white);
  border: 1.5px solid var(--color-white);
  border-radius: 8px;
  padding: 10px 32px;
  font-size: var(--font-size-lg);
  font-weight: 400;
  letter-spacing: 0.1em;
  font-family: serif;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: background 0.2s;
  text-decoration: none;
  display: inline-block;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 1024px) {
    right: 18px;
    bottom: 18px;
    padding: 8px 24px;
    font-size: var(--font-size-sm);
  }

  @media (max-width: 768px) {
    position: relative;
    right: auto;
    bottom: auto;
    padding: 6px 20px;
    font-size: var(--font-size-xs);
    border-radius: 8px;
    margin: 12px 0 6px 0;
  }

  @media (max-width: 480px) {
    padding: 5px 16px;
    font-size: var(--font-size-xs);
    border-radius: 8px;
    margin: 10px 0 5px 0;
  }
`
