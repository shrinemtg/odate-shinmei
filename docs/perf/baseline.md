# パフォーマンス計測ベースライン

`performance-improvement` ブランチ着手時点の Lighthouse 計測結果（最適化前の基準値）。

## 計測条件

- 対象: トップページ `/`（本番ビルド `next build` + `next start`、prod env、`http://localhost:3000`）
- ツール: Lighthouse 12.8.2 / Chrome for Testing 149
- フォームファクタ: モバイル（PageSpeed Insights のモバイル設定相当）
- 計測日: 2026-06-02
- 実行: 2回（スコア 44 / 46、代表値として 46 の回を採用）
- レポート: `baseline-home-mobile.report.html` / `.json`（同ディレクトリ）

## スコア（モバイル）

**Performance: 46 / 100**（2回計測で 44〜46）

| 指標 | 値 | スコア |
| --- | --- | --- |
| First Contentful Paint (FCP) | 3.1 s | 0.45 |
| Largest Contentful Paint (LCP) | 6.8 s | 0.07 |
| Total Blocking Time (TBT) | 1,030 ms | 0.26 |
| Cumulative Layout Shift (CLS) | 0.007 | 1.00 ✅ |
| Speed Index | 4.8 s | 0.67 |
| Time to Interactive (TTI) | 7.1 s | 0.52 |
| Max Potential FID | 330 ms | 0.29 |

LCP 内訳: TTFB 471ms(7%) / **Load Delay 3,640ms(53%)** / Load Time 231ms(3%) / **Render Delay 2,489ms(36%)**

## リソース内訳

| 種別 | 件数 | 転送量 |
| --- | --- | --- |
| Media（動画） | 1 | **14,336 KB** |
| Image | 12 | 476 KB |
| Stylesheet | 2 | 120 KB |
| Script | 8 | 152 KB |
| Other（icon/favicon） | 1+ | 97 KB |
| Font | 1 | 33 KB |
| **合計** | 26 | **約 15,218 KB** |

最大リクエスト: `/videos/shinmei-mv.webm` = 14.3 MB（ディスク上は 33 MB。加えて未使用の `shinmei-mv.mp4` 59MB が `public/videos` に存在）

## 主要なスコア低下要因（Lighthouse 監査）

- Eliminate render-blocking resources … 推定 -2,340ms
- Preload Largest Contentful Paint image … 推定 -1,930ms
- Reduce unused CSS … 119 KB / 推定 -1,110ms
- Properly size images … 165 KB / 推定 -550ms
- Minimize main-thread work … 7.9 s
- Reduce JavaScript execution time … 2.2 s
- Avoid enormous network payloads … 15,278 KB
- Avoid serving legacy JavaScript … 12 KB
- Reduce unused JavaScript … 20 KB

## 目標

Performance スコア 80 以上（見た目・レイアウト・配色・フォント表示・文言は変更しない）。
