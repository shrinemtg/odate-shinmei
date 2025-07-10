import Image from 'next/image'
import styled from '@emotion/styled'

const Section = styled.section`
  width: 100vw;
  min-height: 600px;
  background: url(/top-motion/haikei.png) center center / cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0;
  margin: 64px 0;
  overflow: hidden;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  align-items: flex-start;
  background: none;
`

const Title = styled.div`
  writing-mode: vertical-rl;
  font-size: 3rem;
  color: #7c6b4f;
  font-weight: 600;
  letter-spacing: 0.2em;
  font-family: serif;
  line-height: 1.5;
  min-width: 80px;
  margin-right: 32px;
  text-align: center;
  background: none;
`

const MapArea = styled.div`
  flex: 1;
  background: #e5dbc2;
  border: 2px solid #2196f3;
  border-radius: 8px;
  padding: 32px 24px;
  box-sizing: border-box;
  max-width: 700px;
`

const MapFrame = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 4px;
  overflow: hidden;
  border: 1.5px solid #bba77b;
  margin-bottom: 24px;
`

const ParkingRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 20px;
`

const ParkingImageBox = styled.div`
  width: 200px;
  min-width: 120px;
  height: 120px;
  border-radius: 4px;
  overflow: hidden;
  flex-shrink: 0;
  border: 1.5px solid #bba77b;
  background: #fff;
`

const ParkingText = styled.div`
  color: #7c6b4f;
  font-size: 1.1rem;
  font-family: serif;
  line-height: 2;
  margin-left: 8px;
  margin-top: 8px;
`

const ParkingTitle = styled.div`
  font-weight: 600;
  font-size: 1.15rem;
  margin-bottom: 4px;
`

const AccessSection = () => (
  <Section>
    <Container>
      {/* 左：縦書きタイトル */}
      <Title>ご来社案内</Title>
      {/* 右：地図＋駐車場案内 */}
      <MapArea>
        {/* Google Map埋め込み */}
        <MapFrame>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3132.991964019918!2d140.551919!3d40.26661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f9ac68734c4ce8d:0xa94575952fc9d7b0!2z5aSn5a2m6ZaA5a2m5a2m!5e1!3m2!1sja!2sjp!4v1680000000000!5m2!1sja!2sjp'
            width='100%'
            height='100%'
            style={{ border: 0 }}
            allowFullScreen={false}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            title='大館神明社 Google Map'
          ></iframe>
        </MapFrame>
        {/* 駐車場案内 */}
        <ParkingRow>
          <ParkingImageBox>
            <Image
              src='/backsozai/p.png'
              alt='駐車場'
              width={200}
              height={120}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              priority
            />
          </ParkingImageBox>
          <ParkingText>
            <ParkingTitle>お車でお越しの際</ParkingTitle>
            神社を正面に右に曲がり境内に沿って進むと駐車場がございます。
            <br />
            コチラの駐車場をお使いください
          </ParkingText>
        </ParkingRow>
      </MapArea>
    </Container>
  </Section>
)

export default AccessSection
