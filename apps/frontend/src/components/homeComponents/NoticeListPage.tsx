// import Image from 'next/image'
import styled from '@emotion/styled'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const PageContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: var(--color-oud);
  padding: 64px 0;
`

const Header = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 24px;
  margin-bottom: 48px;
  text-align: center;
`

const PageTitle = styled.h1`
  font-size: var(--font-size-4xl);
  color: var(--color-gray);
  font-weight: 600;
  letter-spacing: 0.2em;
  font-family: serif;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: var(--font-size-3xl);
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-2xl);
  }
`

const PageSubtitle = styled.p`
  font-size: var(--font-size-lg);
  color: var(--color-gray);
  font-family: serif;
  line-height: 1.8;

  @media (max-width: 768px) {
    font-size: var(--font-size-base);
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-sm);
  }
`

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--color-gray);
  font-size: var(--font-size-base);
  text-decoration: none;
  border-bottom: 1px solid var(--color-gray);
  padding-bottom: 4px;
  margin-bottom: 32px;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.7;
    transform: translateX(-4px);
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
  }
`

const NoticeContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 24px;
`

const NoticeGrid = styled.div`
  display: grid;
  gap: 24px;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 480px) {
    gap: 16px;
  }
`

const NoticeCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #bba77b;
  border-radius: 12px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(187, 167, 123, 0.2);
    background: rgba(255, 255, 255, 0.08);
  }

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 16px;
  }
`

const NoticeHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`

const NoticeButton = styled.span`
  background: var(--color-shuiro);
  color: var(--color-white);
  border: none;
  border-radius: 8px;
  padding: 4px 16px;
  font-size: var(--font-size-sm);
  font-weight: 500;
  font-family: serif;
  letter-spacing: 0.1em;

  @media (max-width: 768px) {
    padding: 3px 12px;
    font-size: var(--font-size-xs);
  }
`

const NoticeDate = styled.span`
  color: var(--color-gray);
  font-size: var(--font-size-base);
  font-family: serif;

  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
  }
`

const NoticeTitle = styled.h3`
  color: var(--color-gray);
  font-size: var(--font-size-lg);
  font-weight: 600;
  font-family: serif;
  margin: 0;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: var(--font-size-base);
  }
`

const NoticeDetail = styled(motion.div)`
  color: var(--color-gray);
  font-size: var(--font-size-base);
  line-height: 1.8;
  font-family: serif;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid rgba(187, 167, 123, 0.3);

  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
    line-height: 1.6;
    margin-top: 12px;
    padding-top: 12px;
  }
`

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 48px;
`

const PageButton = styled.button<{ active?: boolean }>`
  background: ${(props) => (props.active ? 'var(--color-shuiro)' : 'transparent')};
  color: ${(props) => (props.active ? 'var(--color-white)' : 'var(--color-gray)')};
  border: 1px solid #bba77b;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: var(--font-size-base);
  font-family: serif;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => (props.active ? 'var(--color-shuiro)' : 'rgba(187, 167, 123, 0.1)')};
  }

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: var(--font-size-sm);
  }
`

// 過去のお知らせデータ
const pastNoticeData = [
  {
    id: 1,
    title: '鎮座350年記念大祭を斎行',
    date: '令和7年9月1日',
    detail:
      'この度、当神社では鎮座350年を記念し、大祭を執り行います。9月10日は午後6時より宵宮祭を、9月11日は午前8時30分より例祭、午前10時より御神幸（おみゆき）を斎行いたします。なお、宵宮祭・例祭の両日において、神楽舞（浦安の舞・悠久の舞）を奉納いたします。また、11日午後1時からは余興奉納奉告祭が行われ、14台の山車が境内に集合し、祭りを賑やかに彩ります。皆様お誘い合わせの上、ご参拝ください。',
  },
  {
    id: 2,
    title: '境内整備工事完了のお知らせ',
    date: '令和7年5月8日',
    detail: '鎮座350年祭記念事業で境内整備が行われ清々しくお参りできるよう整備されました。',
  },
  {
    id: 3,
    title: '七五三のご予約について',
    date: '令和7年3月25日',
    detail:
      '七五三パックを今年も行います。神社齋館でお着替え、写真を撮ってからご祈祷、終了後着替えてお帰りです。どうぞご利用下さい。衣装の展示会を9月20日（土）から28日まで行います。',
  },
  {
    id: 4,
    title: '新型コロナウイルス感染症対策について',
    date: '令和7年5月15日',
    detail:
      '新型コロナウイルス感染症の拡大防止のため、参拝時のマスク着用や手指消毒のご協力をお願いいたします。また、体調不良の際はご参拝をお控えいただき、ご理解とご協力を賜りますようお願い申し上げます。',
  },
  {
    id: 5,
    title: '境内整備工事のお知らせ',
    date: '令和5年4月20日',
    detail:
      '350年記念事業で境内の老朽化した設備の改修工事を実施いたします。工事期間中は一部参拝経路に変更がございますが、ご不便をおかけいたしますが、ご理解とご協力を賜りますようお願い申し上げます。工事完了後は、より安全で快適な参拝環境をご提供いたします。',
  },
  {
    id: 6,
    title: '御朱印の新デザインについて',
    date: '令和7年4月10日',
    detail:
      '大館神明社の御朱印が新デザインにリニューアルされました。伝統的な意匠をモチーフにした美しいデザインとなっており、記念品としてもおすすめです。',
  },
  {
    id: 7,
    title: '桜の開花状況について',
    date: '令和7年3月15日',
    detail:
      '境内の桜の開花が始まりました。例年より少し早い開花となっており、多くの方々が桜を楽しみにご来社されています。',
  },
  {
    id: 8,
    title: '年末年始の営業時間について',
    date: '令和6年12月20日',
    detail:
      '年末年始の営業時間をお知らせいたします。12月31日は終日営業、1月1日は午前0時から営業いたします。初詣のご参拝をお待ちしております。',
  },
]

const NoticeListPage = () => {
  const [openItems, setOpenItems] = useState<number[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 4
  const totalPages = Math.ceil(pastNoticeData.length / itemsPerPage)

  const toggleItem = (id: number) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentNotices = pastNoticeData.slice(startIndex, endIndex)

  return (
    <PageContainer>
      <Header>
        <BackButton href='/'>← トップページに戻る</BackButton>
        <PageTitle>お知らせ一覧</PageTitle>
        <PageSubtitle>大館神明社からのお知らせを時系列でご覧いただけます</PageSubtitle>
      </Header>

      <NoticeContainer>
        <NoticeGrid>
          {currentNotices.map((notice) => (
            <NoticeCard key={notice.id} onClick={() => toggleItem(notice.id)}>
              <NoticeHeader>
                <NoticeButton>お知らせ</NoticeButton>
                <NoticeDate>{notice.date}</NoticeDate>
              </NoticeHeader>
              <NoticeTitle>{notice.title}</NoticeTitle>
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
            </NoticeCard>
          ))}
        </NoticeGrid>

        <Pagination>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <PageButton key={page} active={page === currentPage} onClick={() => setCurrentPage(page)}>
              {page}
            </PageButton>
          ))}
        </Pagination>
      </NoticeContainer>
    </PageContainer>
  )
}

export default NoticeListPage
