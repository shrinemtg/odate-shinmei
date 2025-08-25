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
  color: var(--color-brown);

  @media (max-width: 768px) {
    margin: 48px auto;
    padding: 0 16px;
  }
`

const Title = styled.div`
  font-size: var(--font-size-xl);
  font-weight: 500;
  margin-bottom: 18px;
  letter-spacing: 0.08em;

  @media (max-width: 768px) {
    font-size: var(--font-size-lg);
    margin-bottom: 16px;
  }
`

const SubText = styled.div`
  font-size: var(--font-size-base);
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
    margin-bottom: 6px;
  }
`

const ContactButton = styled.a`
  display: inline-block;
  background: var(--color-shuiro);
  color: var(--color-white);
  border: none;
  border-radius: 20px;
  padding: 12px 36px;
  font-size: var(--font-size-lg);
  font-weight: 500;
  letter-spacing: 0.1em;
  font-family: serif;
  margin: 18px 0 18px 0;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: background 0.2s;

  @media (max-width: 768px) {
    padding: 10px 28px;
    font-size: var(--font-size-base);
    margin: 16px 0 16px 0;
    border-radius: 16px;
  }
`

const Info = styled.div`
  margin-top: 12px;
  font-size: var(--font-size-base);
  line-height: 2;

  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
    line-height: 1.8;
    margin-top: 10px;
  }
`

const PhoneIcon = styled.span`
  font-size: var(--font-size-lg);
  margin-right: 6px;

  @media (max-width: 768px) {
    font-size: var(--font-size-base);
    margin-right: 4px;
  }
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
