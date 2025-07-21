import styled from '@emotion/styled'

const timelineData = [
  {
    year: '平安時代',
    title: '創建',
    description: '小館花道上にある古神明社が\n大館の小館花の産土神であったとされています。',
  },
  {
    year: '1675年',
    title: '現在地に移設',
    description:
      '延宝3年に大館神明社が現在地に移され\n佐竹氏を先に持つ長倉義尚の二男上平義景家が\n常陸時代から祀っていた御神像を\n神明社御神体として奉鎮座しました。',
  },
  {
    year: '1868年',
    title: '明治維新',
    description: '神仏分離により、\n神社としての地位が明確化されます。',
  },
  {
    year: '1870年',
    title: '大火による社殿焼失',
    description: '明治3年9月の大火により、\n御神輿とともに社殿が焼失しました。',
  },
  {
    year: '1874年',
    title: '御神輿建造',
    description: '明治5年から3年間、全氏子が毎月5厘ずつ奉納して\n新しい御神輿が建造されました。',
  },
  {
    year: '1876年',
    title: '社殿再建',
    description: '全郷から四千円余の献納金を得て工事が始まり\n明治9年秋に現在の社殿が完成しました。',
  },
  {
    year: '1909年',
    title: '例大祭日程変更',
    description: '明治42年に例大祭が\n新暦9月14・15日に変更されました',
  },
  {
    year: '1910年',
    title: '現在の例大祭日程確立',
    description: '明治天皇の御巡幸を記念して\n例大祭が9月10・11日の開催となり\n現在まで続いています',
  },
  {
    year: '1950年',
    title: '戦後の例大祭復興',
    description: '戦後の一時期は、曳き手が足りず\n山車をトラックに載せて巡行した時代もありました。',
  },
  {
    year: '1975年',
    title: '現代の山車形態の確立',
    description:
      '大豊講が建造した唐破風を\n四面に持つ神楽殿を模した曳き山車が登場し、\nこれ以降同じような形態の山車が\n次々と建造されました。',
  },
  {
    year: '1980年',
    title: '御神輿巡行区域の拡大',
    description: '住宅地の拡大とともに氏子区域も広がり、\n新たな町内も御神輿巡行区域に加わりました。',
  },
]

const TimelineWrapper = styled.section`
  width: 100vw;

  padding: 64px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TimelineRows = styled.div`
  position: relative;
  width: 900px;
  margin: 0 auto;
`

const VerticalLine = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: #605856;
  z-index: 1;
`

const TimelineRow = styled.div<{ isLeft: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  min-height: 110px;
  position: relative;
  margin-bottom: 32px;
  z-index: 2;
  justify-content: ${(props) => (props.isLeft ? 'flex-start' : 'flex-end')};
`

const Side = styled.div<{ align: 'right' | 'left' }>`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.align === 'right' ? 'flex-end' : 'flex-start')};
  text-align: ${(props) => (props.align === 'right' ? 'right' : 'left')};
  padding: 0 48px;
  justify-content: center;
  height: 100%;
`

const TimelineTitle = styled.div`
  color: #993a37;
  font-family: 'Noto Serif JP', serif;
  font-size: 32px;
  font-weight: 400;
  line-height: 1.1;
  margin-bottom: 8px;
`

const TimelineYear = styled.div`
  font-family: 'Noto Serif JP', serif;
  font-size: 24px;
  color: #605856;
  font-weight: 400;
  margin-bottom: 4px;
`

const TimelineDesc = styled.div`
  font-family: 'Noto Serif JP', serif;
  font-size: 16px;
  color: #605856;
  font-weight: 400;
  white-space: pre-line;
  line-height: 1.7;
`

const TimelineDot = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 28px;
  height: 28px;
  background: #fefefe;
  border: 2px solid #605856;
  border-radius: 50%;
  z-index: 3;
`

const TimelineSection = () => (
  <TimelineWrapper>
    <TimelineRows>
      <VerticalLine />
      {timelineData.map((item, i) => {
        const isLeft = i % 2 === 0
        return (
          <TimelineRow key={i} isLeft={isLeft}>
            {isLeft ? (
              <>
                <Side align='right'>
                  <TimelineTitle>{item.title}</TimelineTitle>
                </Side>
                <TimelineDot />
                <Side align='left'>
                  <TimelineYear>{item.year}</TimelineYear>
                  <TimelineDesc>{item.description}</TimelineDesc>
                </Side>
              </>
            ) : (
              <>
                <Side align='right'>
                  <TimelineYear>{item.year}</TimelineYear>
                  <TimelineDesc>{item.description}</TimelineDesc>
                </Side>
                <TimelineDot />
                <Side align='left'>
                  <TimelineTitle>{item.title}</TimelineTitle>
                </Side>
              </>
            )}
          </TimelineRow>
        )
      })}
    </TimelineRows>
  </TimelineWrapper>
)

export default TimelineSection
