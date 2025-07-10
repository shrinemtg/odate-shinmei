import Image from 'next/image'
import styled from '@emotion/styled'

const Section = styled.section`
  width: 100vw;
  background: #e5dbc2;
  border-top: 4px solid #ede7d7;
  border-bottom: 4px solid #ede7d7;
  padding: 64px 0 0 0;
  margin: 64px 0;
  min-height: 320px;
`

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 48px;
`

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 320px;
  min-width: 120px;
  position: relative;
`

const NoticeTitle = styled.div`
  writing-mode: vertical-rl;
  font-size: 2.5rem;
  color: #7c6b4f;
  font-weight: 600;
  letter-spacing: 0.2em;
  font-family: serif;
  margin-bottom: 0;
  line-height: 1.1;
`

const CatImageBox = styled.div`
  position: absolute;
  left: 25%;
  top: 68%;
  transform: translate(-50%, -40%);
  width: 70px;
  height: 120px;
  z-index: 2;
`

const RightCol = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const NoticeList = styled.div`
  width: 100%;
  background: none;
  border-radius: 0;
  box-shadow: none;
`

const NoticeItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  border-bottom: 1.5px solid #bba77b;
  padding: 0;
  min-height: 56px;
  background: none;
  position: relative;
`

const NoticeButton = styled.button`
  background: #8c3a2b;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 4px 24px;
  font-size: 1rem;
  font-weight: 500;
  font-family: serif;
  letter-spacing: 0.1em;
  cursor: pointer;
  min-width: 80px;
  margin-right: 12px;
`

const NoticeDate = styled.span`
  color: #7c6b4f;
  font-size: 0.95rem;
  min-width: 140px;
`

const NoticeText = styled.span`
  color: #7c6b4f;
  font-size: 1.05rem;
  flex: 1;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const NoticeArrow = styled.span`
  color: #7c6b4f;
  font-size: 1.5rem;
  margin-left: 8px;
`

const NoticeSection = () => (
  <Section>
    <Container>
      {/* 左カラム：縦書きお知らせ＋猫 */}
      <LeftCol>
        <NoticeTitle>お知らせ</NoticeTitle>
        <CatImageBox>
          <Image
            src='/neko/neko01.png'
            alt='猫'
            width={70}
            height={120}
            style={{ width: '100%', height: 'auto', display: 'block' }}
            priority
          />
        </CatImageBox>
      </LeftCol>
      {/* 右カラム：お知らせリスト */}
      <RightCol>
        <NoticeList>
          {[1, 2, 3].map((i) => (
            <NoticeItem key={i}>
              <NoticeButton>お知らせ</NoticeButton>
              <NoticeDate>令和7年5月22日</NoticeDate>
              <NoticeText>360年祭の日程について</NoticeText>
              <NoticeArrow>&#8250;</NoticeArrow>
            </NoticeItem>
          ))}
        </NoticeList>
      </RightCol>
    </Container>
  </Section>
)

export default NoticeSection
