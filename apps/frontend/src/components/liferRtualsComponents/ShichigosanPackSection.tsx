import styled from '@emotion/styled'
// import { useRouter } from 'next/router'

const ShichigosanPackSectionWrapper = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
`

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`

const MainTitle = styled.h1`
  color: var(--color-gray);
  font-size: var(--font-size-3xl);
  font-weight: 600;
  text-align: center;
  margin-bottom: 0.2rem;
  font-family: var(--font-family-serif);
`

const Subtitle = styled.p`
  color: var(--color-gray);
  font-size: var(--font-size-base);
  text-align: center;
  margin-bottom: 3rem;
  font-family: var(--font-family-serif);
`

const PriceTableContainer = styled.div`
  width: 100%;
  max-width: 600px;
  position: relative;
  margin-bottom: 0.5rem;
  background: var(--color-oud);

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const PrayerFee = styled.div`
  position: absolute;
  left: -200px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-brown);
  font-size: var(--font-size-xl);
  font-weight: 600;
  font-family: var(--font-family-serif);
  text-align: center;
  line-height: 1.8;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    position: static;
    transform: none;
    margin-bottom: 2rem;
    order: 1;
  }
`

const PrayerFeeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const PrayerFeeText = styled.div`
  font-size: var(--font-size-2xl);
  font-weight: 600;
`

const PrayerFeeAmount = styled.div`
  font-size: var(--font-size-2xl);
  font-weight: 700;
`

const PlusSign = styled.div`
  font-size: var(--font-size-3xl);
  font-weight: 700;
`

const PriceTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: var(--color-white);
  border: 1px solid var(--color-brown);
  box-shadow: none;

  @media (max-width: 768px) {
    order: 2;
  }
`

const TableHeader = styled.th`
  padding: 1.5rem 1rem;
  background: var(--color-oud);
  color: var(--color-brown);
  font-weight: 600;
  font-family: var(--font-family-serif);
  border: 1px solid var(--color-white);
  text-align: center;
  font-size: var(--font-size-lg);
`

const TableCell = styled.td`
  padding: 1.5rem 1rem;
  border: 1px solid var(--color-white);
  background: var(--color-oud);
  text-align: center;
  font-family: var(--font-family-serif);
  color: var(--color-gray);
`

const RowHeader = styled.td`
  padding: 1.5rem 1rem;
  background: var(--color-oud);
  color: var(--color-gray);
  font-weight: 600;
  font-family: var(--font-family-serif);
  border: 1px solid var(--color-white);
  text-align: left;
  font-size: var(--font-size-base);
`

const TotalRow = styled.tr`
  background: var(--color-oud);
`

const TotalCell = styled.td`
  padding: 1.5rem 1rem;
  border: 1px solid var(--color-white);
  text-align: center;
  font-family: var(--font-family-serif);
  color: var(--color-gray);
  font-weight: 600;
`

const Notes = styled.div`
  text-align: left;
  color: var(--color-gray);
  font-size: var(--font-size-base);
  font-family: var(--font-family-serif);
  line-height: 1.8;
  margin-bottom: 0;

  p {
    margin: 0;
    padding: 0;
  }

  @media (max-width: 768px) {
    order: 3;
    text-align: center;
  }
`

const InfoContainer = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 2rem;
  gap: 1rem;

  @media (max-width: 768px) {
    align-items: center;
  }
`

const ContactInfo = styled.div`
  text-align: right;
  color: var(--color-gray);
  font-size: var(--font-size-base);
  font-family: var(--font-family-serif);
  line-height: 1.5;

  p {
    margin: 0;
    padding: 0;
  }

  @media (max-width: 768px) {
    order: 4;
    text-align: center;
  }
`

const ShichigosanPackSection = () => {
  return (
    <ShichigosanPackSectionWrapper>
      <ContentContainer>
        <MainTitle>七五三パック料金表</MainTitle>
        <Subtitle>※パックは10月と11月のみ行っています</Subtitle>

        <PriceTableContainer>
          <PrayerFee>
            <PrayerFeeText>祈祷料</PrayerFeeText>
            <PrayerFeeRow>
              <PrayerFeeAmount>8000円～</PrayerFeeAmount>
              <PlusSign>+</PlusSign>
            </PrayerFeeRow>
          </PrayerFee>

          <PriceTable>
            <thead>
              <tr>
                <TableHeader rowSpan={2}>サービス</TableHeader>
                <TableHeader colSpan={2} style={{ color: 'var(--color-brown)' }}>
                  男の子
                </TableHeader>
                <TableHeader colSpan={2} style={{ color: 'var(--color-shuiro)' }}>
                  女の子
                </TableHeader>
              </tr>
              <tr>
                <TableHeader>3才</TableHeader>
                <TableHeader>5才</TableHeader>
                <TableHeader>3才</TableHeader>
                <TableHeader>5才</TableHeader>
              </tr>
            </thead>
            <tbody>
              <tr>
                <RowHeader>衣装(着物)</RowHeader>
                <TableCell>6000円</TableCell>
                <TableCell>6000円</TableCell>
                <TableCell>6000円</TableCell>
                <TableCell>8000円</TableCell>
              </tr>
              <tr>
                <RowHeader>ヘアメイク</RowHeader>
                <TableCell>3500円</TableCell>
                <TableCell>3500円</TableCell>
                <TableCell>7000円</TableCell>
                <TableCell>7500円</TableCell>
              </tr>
              <tr>
                <RowHeader>写真</RowHeader>
                <TableCell>13,000円</TableCell>
                <TableCell>13,000円</TableCell>
                <TableCell>13,000円</TableCell>
                <TableCell>13,000円</TableCell>
              </tr>
              <TotalRow>
                <RowHeader>合計</RowHeader>
                <TotalCell>22,500円</TotalCell>
                <TotalCell>22,500円</TotalCell>
                <TotalCell>26,000円</TotalCell>
                <TotalCell>28,500円</TotalCell>
              </TotalRow>
            </tbody>
          </PriceTable>
        </PriceTableContainer>

        <InfoContainer>
          <Notes>
            <p>※10月、11月以外は御祈祷のみ行っております。</p>
            <p>衣装やメイクなどの詳しい内容はこちらのサイトにてお問い合わせください</p>
          </Notes>

          <ContactInfo>
            <p>UOZUMI</p>
            <p>http://www.uozumi-g.com/</p>
            <p>0186-49-2434</p>
          </ContactInfo>
        </InfoContainer>
      </ContentContainer>
    </ShichigosanPackSectionWrapper>
  )
}

export default ShichigosanPackSection
