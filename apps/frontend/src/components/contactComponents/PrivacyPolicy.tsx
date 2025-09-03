import styled from '@emotion/styled'
import Link from 'next/link'

const PageWrapper = styled.div`
  min-height: 100vh;
  background: var(--color-oud) url('/top-motion/haikei.png') center center / cover no-repeat;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`

const BackgroundDecoration = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 300px;
  background: url('/top-motion/kumo.png') no-repeat center center / contain;
  opacity: 0.3;
  z-index: 1;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`

const BackgroundDecorationBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 250px;
  height: 250px;
  background: url('/top-motion/kumo.png') no-repeat center center / contain;
  opacity: 0.3;
  z-index: 1;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`

const ContentWrapper = styled.div`
  max-width: 80%;
  margin: 0 auto;
  padding: 6rem 2rem 8rem;
  box-sizing: border-box;
  position: relative;
  z-index: 2;
  max-width: 80%;

  @media (max-width: 1024px) {
    padding: 5rem 1.5rem 3rem 6rem;
    max-width: 80%;
  }

  @media (max-width: 768px) {
    padding: 4rem 2rem 2rem;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    padding: 3rem 2rem 2rem;
    max-width: 100%;
  }
`

const PolicyContent = styled.div`
  border-radius: 8px;
  padding: 3rem;
  border: 3px solid var(--color-shuiro);
  background-color: var(--color-white);
  box-shadow: 0 4px 12px rgba(153, 58, 55, 0.1);

  font-family: var(--font-family-sans);
  line-height: 1.7;
  color: var(--color-gray);

  @media (max-width: 768px) {
    padding: 2rem;
    border-width: 2px;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    border-width: 2px;
  }
`

const PolicyTitle = styled.h1`
  font-size: var(--font-size-2xl);
  color: var(--color-brown);
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
  font-family: var(--font-family-serif);

  @media (max-width: 768px) {
    font-size: var(--font-size-xl);
    margin-bottom: 1.5rem;
  }
`

const PolicySection = styled.section`
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`

const SectionTitle = styled.h2`
  font-size: var(--font-size-lg);
  color: var(--color-brown);
  font-weight: 600;
  margin-bottom: 1rem;
  font-family: var(--font-family-serif);

  @media (max-width: 768px) {
    font-size: var(--font-size-base);
    margin-bottom: 0.75rem;
  }
`

const SectionContent = styled.div`
  font-size: var(--font-size-base);
  margin-bottom: 1rem;
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
  }
`

const List = styled.ul`
  list-style-type: disc;
  margin-left: 1.5rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    margin-left: 1rem;
  }
`

const ListItem = styled.li`
  margin-bottom: 0.5rem;
  line-height: 1.6;

  &:last-child {
    margin-bottom: 0;
  }
`

const ContactInfo = styled.div`
  border: 1px solid rgb(187, 167, 123);
  border-radius: 6px;
  padding: 1.5rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

const ContactInfoTitle = styled.h3`
  font-size: var(--font-size-base);
  color: var(--color-brown);
  font-weight: 600;
  margin-bottom: 1rem;
  font-family: var(--font-family-serif);
`

const ContactInfoText = styled.p`
  font-size: var(--font-size-sm);
  margin-bottom: 0.5rem;
  line-height: 1.5;

  &:last-child {
    margin-bottom: 0;
  }
`

const BackButton = styled(Link)`
  display: inline-block;
  background-color: var(--color-brown);
  color: white;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  border-radius: 6px;
  font-size: var(--font-size-sm);
  font-weight: 600;
  font-family: var(--font-family-sans);
  margin-top: 2rem;
  transition: background-color 0.2s ease;
  border: 1px solid var(--color-brown);

  &:hover {
    background-color: transparent;
    color: var(--color-brown);
  }

  &:focus {
    outline: 2px solid var(--color-brown);
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    padding: 0.625rem 1.25rem;
    font-size: var(--font-size-sm);
    margin-top: 1.5rem;
  }
`

const PrivacyPolicy = () => {
  return (
    <PageWrapper>
      <BackgroundDecoration />
      <BackgroundDecorationBottom />
      <ContentWrapper>
        <PolicyContent>
          <PolicyTitle>プライバシーポリシー</PolicyTitle>

          <PolicySection>
            <SectionContent>
              大館神明社（以下「当神社」）は、参拝者やご利用者の皆さまからご提供いただく個人情報を、以下の方針に基づき適切に取り扱います。
            </SectionContent>
          </PolicySection>

          <PolicySection>
            <SectionTitle>1. 個人情報の利用目的</SectionTitle>
            <SectionContent>当神社は、以下の目的で個人情報を利用いたします。</SectionContent>
            <List>
              <ListItem>お問い合わせへの回答</ListItem>
              <ListItem>神事・祭事・各種行事に関するご案内や連絡</ListItem>
            </List>
          </PolicySection>

          <PolicySection>
            <SectionTitle>2. 個人情報の第三者提供</SectionTitle>
            <SectionContent>
              取得した個人情報は、法令に基づく場合を除き、第三者に提供することはありません。
            </SectionContent>
          </PolicySection>

          <PolicySection>
            <SectionTitle>3. 個人情報の管理</SectionTitle>
            <SectionContent>
              当神社は、個人情報を適切に管理し、漏えい・改ざん・紛失等の防止に努めます。また、利用目的の達成に不要となった個人情報は、適切な方法で速やかに廃棄いたします。
            </SectionContent>
          </PolicySection>

          <PolicySection>
            <SectionTitle>4. 個人情報に関するお問い合わせ</SectionTitle>
            <SectionContent>個人情報の取扱いに関するご質問は、下記までご連絡ください。</SectionContent>
            <ContactInfo>
              <ContactInfoTitle>大館神明社</ContactInfoTitle>
              <ContactInfoText>住所：〒017-0867 秋田県大館市中神明町1-5</ContactInfoText>
              <ContactInfoText>電話：0816-42-0846</ContactInfoText>
              <ContactInfoText>FAX：0816-49-0410</ContactInfoText>
              <ContactInfoText>責任者：宮司 佐藤 文人</ContactInfoText>
            </ContactInfo>
          </PolicySection>

          <BackButton href='/contact'>お問い合わせページに戻る</BackButton>
        </PolicyContent>
      </ContentWrapper>
    </PageWrapper>
  )
}

export default PrivacyPolicy
