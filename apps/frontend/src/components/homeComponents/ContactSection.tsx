import styled from '@emotion/styled'

const Wrapper = styled.div`
  width: 100%;
  max-width: 520px;
  margin: 64px auto 120px auto;
  border-radius: 0;
  box-shadow: none;
  padding: 0;
  text-align: center;
  font-family: serif;
  color: var(--color-brown);

  @media (max-width: 1024px) {
    max-width: 480px;
    margin: 56px auto 100px auto;
  }

  @media (max-width: 768px) {
    margin: 48px auto 100px auto;
    padding: 0 16px;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    margin: 40px auto 100px auto;
    padding: 0 12px;
  }
`

const Title = styled.div`
  font-size: var(--font-size-xl);
  font-weight: 500;
  margin-bottom: 18px;
  letter-spacing: 0.08em;

  @media (max-width: 1024px) {
    font-size: var(--font-size-lg);
    margin-bottom: 16px;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-lg);
    margin-bottom: 16px;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-base);
    margin-bottom: 14px;
  }
`

const SubText = styled.div`
  font-size: var(--font-size-base);
  margin-bottom: 8px;

  @media (max-width: 1024px) {
    font-size: var(--font-size-base);
    margin-bottom: 7px;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
    margin-bottom: 6px;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-xs);
    margin-bottom: 5px;
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

  @media (max-width: 1024px) {
    padding: 11px 32px;
    font-size: var(--font-size-base);
    margin: 16px 0 16px 0;
    border-radius: 18px;
  }

  @media (max-width: 768px) {
    padding: 10px 28px;
    font-size: var(--font-size-base);
    margin: 16px 0 16px 0;
    border-radius: 16px;
  }

  @media (max-width: 480px) {
    padding: 9px 24px;
    font-size: var(--font-size-sm);
    margin: 14px 0 14px 0;
    border-radius: 14px;
  }
`

const Info = styled.div`
  margin-top: 12px;
  font-size: var(--font-size-base);
  line-height: 2;

  @media (max-width: 1024px) {
    font-size: var(--font-size-base);
    line-height: 1.9;
    margin-top: 11px;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
    line-height: 1.8;
    margin-top: 10px;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-xs);
    line-height: 1.7;
    margin-top: 9px;
  }
`

const PhoneIcon = styled.span`
  font-size: var(--font-size-lg);
  margin-right: 6px;

  @media (max-width: 1024px) {
    font-size: var(--font-size-base);
    margin-right: 5px;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-base);
    margin-right: 4px;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-sm);
    margin-right: 3px;
  }
`

const ContactSection = () => (
  <Wrapper>
    <Title>大館神明社</Title>
    <SubText>
      御用の際は、お気軽にご連絡ください。
      <br />
      営業時間 午前8時30分～午後17時
    </SubText>
    <ContactButton href='#contact'>お問い合わせフォーム</ContactButton>
    <Info>
      <PhoneIcon>☎</PhoneIcon> 0816-42-0846
      <br />
      FAX 0816-49-0410
      <br />
      〒 017-0867
      <br />
      秋田県大館市中神明町1-5
    </Info>
  </Wrapper>
)

export default ContactSection
