import styled from '@emotion/styled'

const Wrapper = styled.div`
  width: 100%;
  max-width: 520px;
  margin: 64px auto;
  border-radius: 0;
  box-shadow: none;
  padding: 0;
  text-align: center;
  font-family: serif;
  color: #7c6b4f;
`

const Title = styled.div`
  font-size: 1.7rem;
  font-weight: 500;
  margin-bottom: 18px;
  letter-spacing: 0.08em;
`

const SubText = styled.div`
  font-size: 1.08rem;
  margin-bottom: 8px;
`

const ContactButton = styled.a`
  display: inline-block;
  background: #8c3a2b;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 12px 36px;
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  font-family: serif;
  margin: 18px 0 18px 0;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: background 0.2s;
`

const Info = styled.div`
  margin-top: 12px;
  font-size: 1.08rem;
  line-height: 2;
`

const PhoneIcon = styled.span`
  font-size: 1.2rem;
  margin-right: 6px;
`

const ContactSection = () => (
  <Wrapper>
    <Title>大館神明社</Title>
    <SubText>
      御用の際は、お気軽にご連絡ください。
      <br />
      営業時間 午前9時～午後18時
    </SubText>
    <ContactButton href='#contact'>お問い合わせフォーム</ContactButton>
    <Info>
      <PhoneIcon>☎</PhoneIcon> 0816-42-0846
      <br />
      〒017-0867
      <br />
      秋田県大館市中神明町1-5
    </Info>
  </Wrapper>
)

export default ContactSection
