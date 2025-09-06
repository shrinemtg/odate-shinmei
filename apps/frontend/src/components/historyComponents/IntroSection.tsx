import styled from '@emotion/styled'

const IntroSectionWrapper = styled.section`
  width: 100vw;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 56px 0;
  background: var(--color-oud) url('/top-motion/haikei.png') center center / cover no-repeat;

  /* 大画面デスクトップ */
  @media (min-width: 1440px) {
    min-height: 400px;
    padding: 64px 0 72px 0;
  }

  /* デスクトップ */
  @media (min-width: 1024px) and (max-width: 1439px) {
    min-height: 360px;
    padding: 56px 0 64px 0;
  }

  /* タブレット横向き */
  @media (min-width: 768px) and (max-width: 1023px) {
    min-height: 320px;
    padding: 48px 0 56px 0;
  }

  /* タブレット縦向き */
  @media (min-width: 481px) and (max-width: 767px) {
    min-height: 300px;
    padding: 40px 0 48px 0;
  }

  /* モバイル */
  @media (max-width: 480px) {
    min-height: 280px;
    padding: 32px 0 40px 0;
  }
`

const IntroTitle = styled.h2`
  color: var(--color-brown);
  font-size: var(--font-size-4xl);
  font-weight: 600;
  letter-spacing: 0.1em;
  font-family: serif;
  margin-bottom: 24px;
  text-align: center;

  /* 大画面デスクトップ */
  @media (min-width: 1440px) {
    font-size: 3.5rem;
    margin-bottom: 32px;
  }

  /* デスクトップ */
  @media (min-width: 1024px) and (max-width: 1439px) {
    font-size: 3rem;
    margin-bottom: 28px;
  }

  /* タブレット横向き */
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 2.5rem;
    margin-bottom: 24px;
  }

  /* タブレット縦向き */
  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  /* モバイル */
  @media (max-width: 480px) {
    font-size: 1.75rem;
    margin-bottom: 16px;
  }
`

const IntroTextContainer = styled.div`
  color: var(--color-brown);
  font-size: var(--font-size-base);
  font-family: serif;
  line-height: 2;
  text-align: center;
  max-width: 520px;
  margin: 0 auto 48px auto;

  /* 大画面デスクトップ */
  @media (min-width: 1440px) {
    font-size: 1.125rem;
    max-width: 90%;
    margin: 0 auto 56px auto;
    line-height: 2.2;
  }

  /* デスクトップ */
  @media (min-width: 1024px) and (max-width: 1439px) {
    font-size: 1.0625rem;
    max-width: 90%;
    margin: 0 auto 52px auto;
    line-height: 2.1;
  }

  /* タブレット横向き */
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 1rem;
    max-width: 90%;
    margin: 0 auto 48px auto;
    line-height: 2;
  }

  /* タブレット縦向き */
  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 0.9375rem;
    line-height: 1.9;
    max-width: 90%;
    margin: 0 auto 40px auto;
    padding: 0 20px;
  }

  /* モバイル */
  @media (max-width: 480px) {
    font-size: 0.875rem;
    line-height: 1.8;
    max-width: 92%;
    margin: 0 auto 32px auto;
    padding: 0 16px;
  }
`

const IntroParagraph = styled.p`
  margin: 0;
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
  flex-wrap: wrap;

  /* 大画面デスクトップ */
  @media (min-width: 1440px) {
    max-width: 1400px;
    gap: 1.5rem;
    padding: 0 2rem;
  }

  /* デスクトップ */
  @media (min-width: 1024px) and (max-width: 1439px) {
    max-width: 1200px;
    gap: 1.25rem;
    padding: 0 1.5rem;
  }

  /* タブレット横向き */
  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 900px;
    gap: 1rem;
    padding: 0 1rem;
  }

  /* タブレット縦向き */
  @media (min-width: 481px) and (max-width: 767px) {
    gap: 0.75rem;
    padding: 0 0.75rem;
    max-width: 100%;
  }

  /* モバイル */
  @media (max-width: 480px) {
    gap: 0.5rem;
    padding: 0 0.5rem;
    max-width: 100%;
  }
`

const ImageWrapper = styled.div`
  width: 200px;
  height: 150px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  flex-shrink: 0;
  background-color: #f5f5f5; /* 背景色を追加 */

  /* 大画面デスクトップ */
  @media (min-width: 1440px) {
    width: 250px;
    height: 180px;
    border-radius: 12px;
  }

  /* デスクトップ */
  @media (min-width: 1024px) and (max-width: 1439px) {
    width: 220px;
    height: 160px;
    border-radius: 10px;
  }

  /* タブレット横向き */
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 180px;
    height: 130px;
    border-radius: 8px;
  }

  /* タブレット縦向き */
  @media (min-width: 481px) and (max-width: 767px) {
    width: 140px;
    height: 100px;
    border-radius: 6px;
  }

  /* モバイル */
  @media (max-width: 480px) {
    width: 100px;
    height: 75px;
    border-radius: 6px;
  }

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* containからcoverに戻す */
    object-position: center;
    border-radius: inherit; /* 親要素のborder-radiusを継承 */
    transition: transform 0.3s ease;
  }
`

const IntroSection = () => {
  const images = [
    { src: '/his/his-06.png', alt: '神社の歴史写真1' },
    { src: '/his/his-07.png', alt: '神社の歴史写真2' },
    { src: '/his/his-08.png', alt: '神社の歴史写真3' },
  ]

  return (
    <IntroSectionWrapper>
      <IntroTitle>歴史</IntroTitle>
      <IntroTextContainer>
        <IntroParagraph>
          はじまりは平安時代までさかのぼるとされ、
          <br />
          地元の人々を守る「産土神(うぶすながみ)」として
          <br />
          信仰されてきました。
          <br />
          江戸時代には佐竹藩とのゆかりもあり、地域の発展とともに歩んできました。
        </IntroParagraph>
      </IntroTextContainer>
      <ImageContainer>
        {images.map((image, index) => (
          <ImageWrapper key={index}>
            <img src={image.src} alt={image.alt} />
          </ImageWrapper>
        ))}
      </ImageContainer>
    </IntroSectionWrapper>
  )
}

export default IntroSection
