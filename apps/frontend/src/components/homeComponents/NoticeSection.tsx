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
    gap: 1.25rem;
    min-height: 3.25rem;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 1.25rem;
    padding: 0.75rem;
    min-height: auto;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #bba77b;

    &:hover {
      transform: translateY(-0.125rem);
      box-shadow: 0 0.25rem 0.75rem rgba(187, 167, 123, 0.2);
    }
  }

  @media (max-width: 640px) {
    gap: 1.25rem;
    padding: 0.625rem;
    margin-bottom: 0.875rem;
  }

  @media (max-width: 480px) {
    gap: 0.7rem;
    padding: 0.5rem;
    margin-bottom: 0.75rem;
  }

  @media (max-width: 375px) {
    gap: 0.7rem;
    padding: 0.375rem;
    margin-bottom: 0.625rem;
  }
`

const NoticeButton = styled.button`
  background: var(--color-shuiro);
  color: var(--color-white);
  border: none;
  border-radius: 0.4rem;
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
    flex-shrink: 0;
    align-self: center;
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
    min-width: 6rem;
    flex-shrink: 0;
    display: block;
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
    flex: 1;
    display: block;
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

const NoticeContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex: 1;

  @media (max-width: 768px) {
    gap: 0.125rem;
    align-self: center;
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
    flex-shrink: 0;
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
  margin-bottom: 1rem;

  @media (max-width: 1024px) {
    padding: 0.875rem;
    font-size: var(--font-size-sm);
    line-height: 1.7;
    margin-bottom: 0.875rem;
  }

  @media (max-width: 768px) {
    padding: 0.75rem;
    font-size: var(--font-size-sm);
    line-height: 1.6;
    border-radius: 0 0 0.5rem 0.5rem;
    margin: 0 0.75rem 0.75rem 0.75rem;
  }

  @media (max-width: 640px) {
    padding: 0.625rem;
    font-size: var(--font-size-xs);
    line-height: 1.5;
    margin: 0 0.625rem 0.625rem 0.625rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
    font-size: var(--font-size-xs);
    line-height: 1.4;
    margin: 0 0.5rem 0.5rem 0.5rem;
  }

  @media (max-width: 375px) {
    padding: 0.375rem;
    font-size: var(--font-size-xs);
    line-height: 1.3;
    margin: 0 0.375rem 0.375rem 0.375rem;
  }
`

const NoticeMore = styled(Link)`
  display: inline-block;
  color: var(--color-gray);
  font-size: var(--font-size-base);
  text-decoration: none;
  border-bottom: 1.5px solid var(--color-gray);
  margin: 2rem 0;
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
    title: '鎮座350年記念大祭を斎行',
    date: '令和7年9月10日、11日',
    detail:
      'この度、当神社では鎮座350年を記念し、大祭を執り行います。9月10日は午後6時より宵宮祭を、9月11日は午前8時30分より例祭、午前10時より御神幸（おみゆき）を斎行いたします。なお、宵宮祭・例祭の両日において、神楽舞（浦安の舞・悠久の舞）を奉納いたします。また、11日午後1時からは余興奉納奉告祭が行われ、14台の山車が境内に集合し、祭りを賑やかに彩ります。皆様お誘い合わせの上、ご参拝ください。',
  },
  {
    id: 2,
    title: '境内整備工事完了のお知らせ',
    date: '令和7年5月8日',
    detail:
      '神社の鎮座350年祭記念事業として進めておりました境内整備が、このたび無事に完了いたしました。老朽化していた参道や手水舎などを一新し、地域の皆様にこれまで以上に清々しい気持ちでお参りいただけるようになりました。これもひとえに、ご支援ご協力いただきました皆様のご厚情の賜物と、心より感謝申し上げます。今後も、皆様にとって心の拠り所となるような神社を目指してまいります。引き続きのご支援をどうぞよろしくお願い申し上げます。',
  },
  {
    id: 3,
    title: '七五三のご予約について',
    date: '令和7年3月25日',
    detail:
      '今年も「七五三パック」をご用意いたしました。当社の齋館でゆっくりお着替え、プロのカメラマンによる記念撮影の後、ご祈祷を行います。ご祈祷後は、そのままお着替えをしてお帰りいただけますので、ご家族の負担も少なく、スムーズです。ご希望の方には、衣装選びにぴったりの「衣装展示会」を9月20日（土）から28日まで開催いたします。お気軽にご利用ください。',
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
                  <NoticeContent>
                    <NoticeDate>{notice.date}</NoticeDate>
                    <NoticeText>{notice.title}</NoticeText>
                  </NoticeContent>
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
