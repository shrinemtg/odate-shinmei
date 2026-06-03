# パフォーマンス計測（最適化後）

`performance-improvement` ブランチでの一連の最適化後の Lighthouse 計測結果。
ベースライン（[baseline.md](./baseline.md)、モバイル 46）との比較。

## 計測条件（ベースラインと同一）

- 対象: トップページ `/`（本番ビルド `next build` + `next start`、prod env、`http://localhost:3000`）
- ツール: Lighthouse 12.8.2 / Chromium（Playwright 同梱、headless）
- フォームファクタ: モバイル（既定のモバイル設定 + シミュレーションスロットリング）
- 計測日: 2026-06-03

## スコア（モバイル）

**Performance: 約 77（複数回計測で 72〜79、中央値 ≈ 79）**

| 指標 | ベースライン | 最適化後 |
| --- | --- | --- |
| First Contentful Paint (FCP) | 3.1 s | **0.7 s** |
| Largest Contentful Paint (LCP) | 6.8 s | 3.8〜5.0 s |
| Total Blocking Time (TBT) | 1,030 ms | 200〜400 ms |
| Cumulative Layout Shift (CLS) | 0.007 | 0.01 前後 |
| Speed Index | 4.8 s | 2.7 s |

→ **46 → 約77（+31）**。見た目・レイアウト・配色・フォント表示・文言は一切変更なし。

## 効いた主な施策

- 動画を初回ペイント後に遅延ロードし、ホーム切替時に冒頭から再生（巨大動画が初期表示をブロックしない）
- フォント CSS を非ブロッキング化（preload + media=print 切替）。LCP の critical path から外れた
- 上記イントロ刷新（再生方式・SSR・統一フェード）と above-the-fold 画像の扱い
- **next/image の画像最適化を有効化**（`unoptimized: false`）。デバイス別レスポンシブ画像(webp/avif)で
  モバイルの画像転送量・デコードを削減 → FCP が 0.7s に短縮、responsive-images の指摘が 182KB→30KB に
- イントロの雲は `priority`（preload）で先読みし LCP の Load Delay を短縮。ホーム(VideoBackground)の
  雲はモバイル非表示のため preload を外し無駄DLを削減。雲への過剰な `will-change` を撤去

## 残課題（80 まであと数点）

- LCP の **Render Delay が支配的（約56%）**。これはイントロ演出が一画面を一定時間占めることに起因する
  **構造的要因**で、演出（厳かな世界観）を維持する限りこれ以上の短縮は難しい。
- ラボ値は計測マシンの影響を受けるため、本番 PageSpeed Insights では数点異なる可能性がある。

レポート実体: `after-home-mobile.report.report.html` / `.json`（同ディレクトリ）
