import { css } from '@emotion/react'

export const Home = () => {
  return (
    <main css={styles.container} aria-label='トップページ'>
      <h1 css={styles.heading}>モノレポ開発用ベース基盤</h1>
      <p css={styles.description}>
        このページはプロジェクトのトップページ（仮）です。
        <br />
        ディレクトリ構成・命名規則・アクセシビリティ等のルールを遵守してください。
      </p>
    </main>
  )
}

const styles = {
  container: css`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #f7f7f7;
    padding: 40px 0;
  `,
  heading: css`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    color: #222;
  `,
  description: css`
    font-size: 1.1rem;
    color: #555;
    text-align: center;
    line-height: 1.7;
  `,
}
