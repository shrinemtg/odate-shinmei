import styled from '@emotion/styled'

const timelineData = [
  {
    year: '1602年',
    title: '現在地に移設',
    description:
      '慶長7年佐竹義宣侯が秋田にご遷封になり大館初代城代小場義成の支裔長倉義尚の次男、上平義景が氏神として祀るご神体と小館花鎮座のご祭神とを合祀して1675年（延宝3年）現在地に遷座しました。',
  },
  {
    year: '1758年',
    title: '850年祭',
    description: '延般若院英泉発願紀年録に宝暦8年6月に850年祭を斎行したとの記録があります。',
  },
  {
    year: '1870年',
    title: '大火による社殿焼失',
    description: '明治3年9月の大火により、\n御神輿とともに社殿が焼失しました',
  },
  {
    year: '1873年',
    title: '郷社に指定',
    description: '再建されないまま明治6年、\n郷社に指定されました。',
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
    year: '1910年',
    title: '現在の例祭日の確立',
    description:
      '明治14年明治天皇の御巡幸を記念し旧暦7月31日から8月2日までの例祭を新暦9月10・11日の2日間とする。\nこれ以降、例祭は9月10・11日の2日間となりました。',
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

  @media (max-width: 768px) {
    padding: 48px 0;
  }
`

const TimelineRows = styled.div`
  position: relative;
  width: 900px;
  margin: 0 auto;
  z-index: 1;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 500px;
    padding: 0 16px;
  }
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

  @media (max-width: 768px) {
    left: 29px;
    transform: none;
  }
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

  @media (max-width: 768px) {
    justify-content: flex-start;
    min-height: auto;
    margin-bottom: 24px;
    align-items: flex-start;
  }
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

  @media (max-width: 768px) {
    display: none;
  }
`

const TimelineContent = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-left: 48px;
    width: calc(100% - 48px);
  }
`

const TimelineTitle = styled.div`
  color: #993a37;
  font-family: 'Noto Serif JP', serif;
  font-size: 32px;
  font-weight: 400;
  line-height: 1.1;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 4px;
  }
`

const TimelineYear = styled.div`
  font-family: 'Noto Serif JP', serif;
  font-size: 24px;
  color: #605856;
  font-weight: 400;
  margin-bottom: 4px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 2px;
  }
`

const TimelineDesc = styled.div`
  font-family: 'Noto Serif JP', serif;
  font-size: 16px;
  color: #605856;
  font-weight: 400;
  white-space: pre-line;
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.6;
  }
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

  @media (max-width: 768px) {
    left: 30px;
    top: 6px;
    transform: translateX(-50%);
    width: 12px;
    height: 12px;
    background: #fefefe;
    border: 2px solid #605856;
  }
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
                <TimelineContent>
                  <TimelineTitle>{item.title}</TimelineTitle>
                  <TimelineYear>{item.year}</TimelineYear>
                  <TimelineDesc>{item.description}</TimelineDesc>
                </TimelineContent>
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
                <TimelineContent>
                  <TimelineTitle>{item.title}</TimelineTitle>
                  <TimelineYear>{item.year}</TimelineYear>
                  <TimelineDesc>{item.description}</TimelineDesc>
                </TimelineContent>
              </>
            )}
          </TimelineRow>
        )
      })}
    </TimelineRows>
  </TimelineWrapper>
)

export default TimelineSection
