import Image from 'next/image'
import styled from '@emotion/styled'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const Section = styled.section`
  width: 100vw;
  background: var(--color-oud);
  border-top: 4px solid #ede7d7;
  border-bottom: 4px solid #ede7d7;
  padding: 4rem 0 0 0;
  margin: 4rem 0;
  min-height: 20rem;

  @media (max-width: 1024px) {
    padding: 3.5rem 0 0 0;
    margin: 3.5rem 0;
    min-height: 18.75rem;
  }

  @media (max-width: 768px) {
    padding: 3rem 0 0 0;
    margin: 3rem 0;
    min-height: 17.5rem;
  }

  @media (max-width: 640px) {
    padding: 2.5rem 0 0 0;
    margin: 2.5rem 0;
    min-height: 16.25rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 0 0 0;
    margin: 2rem 0;
    min-height: 15rem;
  }

  @media (max-width: 375px) {
    padding: 1.5rem 0 0 0;
    margin: 1.5rem 0;
    min-height: 13.75rem;
  }
`

const Container = styled.div`
  max-width: 56.25rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 3rem;

  @media (max-width: 1024px) {
    gap: 2.5rem;
    padding: 0 1.5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    padding: 0 1.25rem;
  }

  @media (max-width: 640px) {
    gap: 1.75rem;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
    padding: 0 0.75rem;
  }

  @media (max-width: 375px) {
    gap: 1.25rem;
    padding: 0 0.5rem;
  }
`

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 20rem;
  min-width: 7.5rem;
  position: relative;

  @media (max-width: 1024px) {
    height: 18.75rem;
    min-width: 6.25rem;
  }

  @media (max-width: 768px) {
    height: auto;
    min-width: auto;
    flex-direction: row;
    gap: 1rem;
    align-items: flex-start;
  }

  @media (max-width: 640px) {
    height: auto;
    gap: 0.875rem;
  }

  @media (max-width: 480px) {
    height: auto;
    gap: 0.75rem;
  }

  @media (max-width: 375px) {
    height: auto;
    gap: 0.625rem;
  }
`

const NoticeTitle = styled.div`
  writing-mode: vertical-rl;
  font-size: var(--font-size-5xl);
  color: var(--color-gray);
  font-weight: 600;
  letter-spacing: 0.2em;
  font-family: serif;
  margin-bottom: 0;
  line-height: 1.1;
  margin-left: 1rem;

  @media (max-width: 1024px) {
    font-size: var(--font-size-4xl);
    margin-left: 0.75rem;
  }

  @media (max-width: 768px) {
    writing-mode: horizontal-tb;
    font-size: var(--font-size-3xl);
    margin-left: 0;
    margin-bottom: 1rem;
    order: 2;
  }

  @media (max-width: 640px) {
    font-size: var(--font-size-2xl);
    margin-bottom: 0.875rem;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-xl);
    margin-bottom: 0.75rem;
  }

  @media (max-width: 375px) {
    font-size: var(--font-size-lg);
    margin-bottom: 0.625rem;
  }
`

const CatImageBox = styled.div`
  position: absolute;
  left: 30%;
  top: 78%;
  transform: translate(-50%, -40%);
  width: 4.375rem;
  height: 7.5rem;
  z-index: 2;

  @media (max-width: 1024px) {
    width: 3.75rem;
    height: 6.4375rem;
    left: 28%;
    top: 76%;
  }

  @media (max-width: 768px) {
    position: relative;
    left: auto;
    top: auto;
    transform: none;
    width: 3.125rem;
    height: 5.375rem;
    margin: 0;
    order: 1;
    align-self: flex-start;
  }

  @media (max-width: 640px) {
    width: 2.8125rem;
    height: 4.8125rem;
  }

  @media (max-width: 480px) {
    width: 2.5rem;
    height: 4.3125rem;
  }

  @media (max-width: 375px) {
    width: 2.1875rem;
    height: 3.75rem;
  }
`

const RightCol = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
  }
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
  gap: 1rem;
  border-bottom: 1.5px solid #bba77b;
  padding: 0;
  min-height: 3.5rem;
  background: none;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(187, 167, 123, 0.1);
    transform: translateX(0.25rem);
  }

  @media (max-width: 1024px) {
    gap: 0.875rem;
    min-height: 3.25rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.75rem 0;
    min-height: auto;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #bba77b;
    padding: 0.75rem;

    &:hover {
      transform: translateY(-0.125rem);
      box-shadow: 0 0.25rem 0.75rem rgba(187, 167, 123, 0.2);
    }
  }

  @media (max-width: 640px) {
    gap: 0.375rem;
    padding: 0.625rem;
    margin-bottom: 0.875rem;
  }

  @media (max-width: 480px) {
    gap: 0.25rem;
    padding: 0.5rem;
    margin-bottom: 0.75rem;
  }

  @media (max-width: 375px) {
    gap: 0.1875rem;
    padding: 0.375rem;
    margin-bottom: 0.625rem;
  }
`

const NoticeButton = styled.button`
  background: var(--color-shuiro);
  color: var(--color-white);
  border: none;
  border-radius: 0.5rem;
  padding: 0.25rem 1.5rem;
  font-size: var(--font-size-base);
  font-weight: 500;
  font-family: serif;
  letter-spacing: 0.1em;
  cursor: pointer;
  min-width: 5rem;
  margin-right: 0.75rem;
  transition: all 0.3s ease;

  &:hover {
    background: #7a2e1f;
    transform: scale(1.05);
  }

  @media (max-width: 1024px) {
    padding: 0.1875rem 1.25rem;
    font-size: var(--font-size-sm);
    min-width: 4.6875rem;
    margin-right: 0.625rem;
  }

  @media (max-width: 768px) {
    padding: 0.1875rem 1rem;
    font-size: var(--font-size-sm);
    min-width: 4.375rem;
    margin-right: 0;
    align-self: flex-start;
  }

  @media (max-width: 640px) {
    padding: 0.125rem 0.875rem;
    font-size: var(--font-size-xs);
    min-width: 4.0625rem;
  }

  @media (max-width: 480px) {
    padding: 0.125rem 0.75rem;
    font-size: var(--font-size-xs);
    min-width: 3.75rem;
  }

  @media (max-width: 375px) {
    padding: 0.0625rem 0.625rem;
    font-size: var(--font-size-xs);
    min-width: 3.4375rem;
  }
`

const NoticeDate = styled.span`
  color: var(--color-gray);
  font-size: var(--font-size-base);
  min-width: 8.75rem;

  @media (max-width: 1024px) {
    font-size: var(--font-size-sm);
    min-width: 8.125rem;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
    min-width: auto;
  }

  @media (max-width: 640px) {
    font-size: var(--font-size-xs);
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-xs);
  }

  @media (max-width: 375px) {
    font-size: var(--font-size-xs);
  }
`

const NoticeText = styled.span`
  color: var(--color-gray);
  font-size: var(--font-size-lg);
  flex: 1;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 1024px) {
    font-size: var(--font-size-base);
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-base);
    white-space: normal;
    overflow: visible;
    text-overflow: clip;
  }

  @media (max-width: 640px) {
    font-size: var(--font-size-sm);
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-sm);
  }

  @media (max-width: 375px) {
    font-size: var(--font-size-xs);
  }
`

const NoticeArrow = styled.span<{ isOpen: boolean }>`
  color: var(--color-gray);
  font-size: var(--font-size-xl);
  margin-left: 0.5rem;
  transition: all 0.3s ease;
  transform: ${(props) => (props.isOpen ? 'rotate(90deg)' : 'rotate(0deg)')};

  @media (max-width: 1024px) {
    font-size: var(--font-size-lg);
    margin-left: 0.375rem;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-lg);
    margin-left: 0;
    align-self: flex-end;
  }

  @media (max-width: 640px) {
    font-size: var(--font-size-base);
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-base);
  }

  @media (max-width: 375px) {
    font-size: var(--font-size-sm);
  }
`

const NoticeDetail = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.05);
  border-top: 1px solid #bba77b;
  padding: 1rem;
  color: var(--color-gray);
  font-size: var(--font-size-base);
  line-height: 1.8;
  font-family: serif;
  backdrop-filter: blur(10px);
  border-radius: 0 0 0.5rem 0.5rem;

  @media (max-width: 1024px) {
    padding: 0.875rem;
    font-size: var(--font-size-sm);
    line-height: 1.7;
  }

  @media (max-width: 768px) {
    padding: 0.75rem;
    font-size: var(--font-size-sm);
    line-height: 1.6;
    border-radius: 0 0 0.5rem 0.5rem;
    margin: 0 0.75rem 0.5rem 0.75rem;
  }

  @media (max-width: 640px) {
    padding: 0.625rem;
    font-size: var(--font-size-xs);
    line-height: 1.5;
    margin: 0 0.625rem 0.375rem 0.625rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
    font-size: var(--font-size-xs);
    line-height: 1.4;
    margin: 0 0.5rem 0.25rem 0.5rem;
  }

  @media (max-width: 375px) {
    padding: 0.375rem;
    font-size: var(--font-size-xs);
    line-height: 1.3;
    margin: 0 0.375rem 0.1875rem 0.375rem;
  }
`

const NoticeMore = styled(Link)`
  display: inline-block;
  color: var(--color-gray);
  font-size: var(--font-size-base);
  text-decoration: none;
  border-bottom: 1.5px solid var(--color-gray);
  margin: 2rem 0 0 0;
  margin-left: auto;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;

  &:hover {
    opacity: 0.7;
    transform: translateX(0.25rem);
  }

  @media (max-width: 1024px) {
    font-size: var(--font-size-sm);
    margin: 1rem auto;
    padding: 0.375rem 0.75rem;
  }

  @media (max-width: 768px) {
    margin: 1rem auto;
    text-align: center;
    font-size: var(--font-size-sm);
    padding: 0.5rem 1.25rem;
    border-radius: 0.5rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid #bba77b;
  }

  @media (max-width: 640px) {
    margin-top: 0.875rem;
    font-size: var(--font-size-xs);
    padding: 0.375rem 1rem;
  }

  @media (max-width: 480px) {
    margin-top: 0.75rem;
    font-size: var(--font-size-xs);
    padding: 0.375rem 0.875rem;
  }

  @media (max-width: 375px) {
    margin-top: 0.625rem;
    font-size: var(--font-size-xs);
    padding: 0.3125rem 0.75rem;
  }
`

// お知らせデータ
const noticeData = [
  {
    id: 1,
    title: '360年祭の日程について',
    date: '令和7年9月10日,11日,13日',
    detail:
      '大館神明社では、創建360年を記念して盛大な祭事を執り行います。期間中は特別な御祈祷や奉納行事が予定されており、多くの皆様のご参拝をお待ちしております。詳細な日程や行事内容については、後日改めてお知らせいたします。',
  },
  {
    id: 2,
    title: '新型コロナウイルス感染症対策について',
    date: '令和7年5月15日',
    detail:
      '新型コロナウイルス感染症の拡大防止のため、参拝時のマスク着用や手指消毒のご協力をお願いいたします。また、体調不良の際はご参拝をお控えいただき、ご理解とご協力を賜りますようお願い申し上げます。',
  },
  {
    id: 3,
    title: '境内整備工事のお知らせ',
    date: '令和7年5月8日',
    detail:
      '境内の老朽化した設備の改修工事を実施いたします。工事期間中は一部参拝経路に変更がございますが、ご不便をおかけいたしますが、ご理解とご協力を賜りますようお願い申し上げます。工事完了後は、より安全で快適な参拝環境をご提供いたします。',
  },
]

const NoticeSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
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
            {noticeData.map((notice) => (
              <div key={notice.id}>
                <NoticeItem onClick={() => toggleItem(notice.id)}>
                  <NoticeButton>お知らせ</NoticeButton>
                  <NoticeDate>{notice.date}</NoticeDate>
                  <NoticeText>{notice.title}</NoticeText>
                  <NoticeArrow isOpen={openItems.includes(notice.id)}>&#8250;</NoticeArrow>
                </NoticeItem>
                <AnimatePresence>
                  {openItems.includes(notice.id) && (
                    <NoticeDetail
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      {notice.detail}
                    </NoticeDetail>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </NoticeList>
          <NoticeMore href='/notices'>お知らせ一覧</NoticeMore>
        </RightCol>
      </Container>
    </Section>
  )
}

export default NoticeSection
