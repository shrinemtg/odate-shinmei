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
              大館神明社では
              <br />
              さまざまな御祈祷に対応しております。
              <br />
              日々の感謝や心の平安を求めるご祈祷、
              <br />
              どうぞお気軽にお越しください。
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
          <DetailButton>詳しく見る</DetailButton>
        </RightCol>
      </Card>
    </Section>
    {/* --- お守りセクション --- */}
    <Section>
      <CardRed>
        <LeftColRed>
          <RowRed>
            <VerticalTitleRed>お守り</VerticalTitleRed>
            <DescriptionRed>
              大館神明社では、古くから地域の人々の願いに寄り添い、
              <br />
              さまざまなご利益を授けるお守りや授与品をご用意しております。
            </DescriptionRed>
          </RowRed>
          <OmamoriButton>詳しく見る</OmamoriButton>
        </LeftColRed>
        <RightColWhite>
          <RightImage src='/backsozai/omamori01.png' alt='お守りイメージ' />
        </RightColWhite>
      </CardRed>
    </Section>
  </Wrapper>
)

export default GokitouOmamoriSection

// ================= styled-components =================
const Wrapper = styled.div`
  margin: 64px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Section = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 56px 0;
  background: url(/top-motion/haikei.png) center center / cover no-repeat;
`

const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  max-width: 900px;
  width: 100%;
  border-radius: 32px;
  overflow: hidden;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
  background: #fff;
  min-height: 320px;
`

const LeftCol = styled.div`
  flex: 1.6;
  min-width: 0;
  position: relative;
  background: url(/backsozai/gokitou-haikei) center center / cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 450px;
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
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  justify-content: center;
  gap: 24px;
`

const VerticalTitle = styled.div`
  writing-mode: vertical-rl;
  font-size: var(--font-size-5xl);
  font-weight: 600;
  letter-spacing: 0.2em;
  font-family: serif;
  color: var(--color-white);
  line-height: 1.1;
  margin-right: 8px;
`

const Description = styled.div`
  font-size: var(--font-size-lg);
  font-family: serif;
  color: var(--color-white);
  line-height: 2;
  max-width: 260px;
  margin-top: 8px;
`

const CatImageBox = styled.div`
  position: absolute;
  right: 260px;
  bottom: -50px;
  width: 220px;
  height: 260px;
  z-index: 3;
`

const DetailButton = styled.button`
  position: absolute;
  right: 24px;
  bottom: 24px;
  background: transparent;
  color: var(--color-white);
  border: 1.5px solid var(--color-white);
  border-radius: 20px;
  padding: 10px 32px;
  font-size: var(--font-size-lg);
  font-weight: 400;
  letter-spacing: 0.1em;
  font-family: serif;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: background 0.2s;
`

// お守りセクション用
const CardRed = styled(Card)`
  background: #fff;
`

const LeftColRed = styled.div`
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
`

const RowRed = styled(Row)``

const VerticalTitleRed = styled(VerticalTitle)``

const DescriptionRed = styled(Description)``

const RightColWhite = styled.div`
  flex: 1.6;
  min-width: 0;
  position: relative;
  background: url(/backsozai/gokitou-haikei) center center / cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 450px;
`

const RightImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: none;
  border-radius: 0;
`

const OmamoriButton = styled.button`
  position: absolute;
  left: 24px;
  bottom: 24px;
  background: transparent;
  color: var(--color-shuiro);
  border: 1.5px solid var(--color-shuiro);
  border-radius: 20px;
  padding: 10px 32px;
  font-size: var(--font-size-lg);
  font-weight: 400;
  letter-spacing: 0.1em;
  font-family: serif;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: background 0.2s;
`
