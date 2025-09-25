# モノレポ開発用ベース基盤（Turborepo）

## 開発環境の標準化・セットアップ自動化

- Node.jsのバージョンは .nvmrc で管理しています（例: 18.16.0）。nvmやvolta等でバージョンを合わせてください
- 依存パッケージは yarn install または npm ci で必ずインストール
- .env.example を参考に .env を各自作成してください
- よく使うコマンドは Makefile または package.json scripts で共通化しています
- セットアップ自動化用の setup.sh も用意しています（初回セットアップや依存更新時に実行してください）
- 例:
  ```sh
  #!/bin/bash
  yarn install
  cp -n .env.example .env || true
  ```
- 詳細な運用ルールは .cursor/rules/dev-rules/\*.mdc を参照してください

## ディレクトリ構成

```
/
├── apps/                # 実行可能なアプリケーション
│   ├── backend/         # バックエンドアプリケーション
│   └── frontend/        # フロントエンドアプリケーション
├── packages/            # 共有ライブラリやパッケージ
│   ├── types/           # 共通の型定義
│   ├── utils/           # 共通ユーティリティ関数
│   ├── ui/              # フロントエンド共通UIコンポーネント
│   └── backend-shared/  # バックエンド固有の共有処理
├── infra/               # インフラ管理コード
│   ├── terraform/       # Terraformコード
│   └── ...              # docker, environments, modules など
├── .github/workflows/   # CI/CDワークフロー
├── .gitignore
├── package.json         # ルート: 開発ツールやスクリプト
├── turbo.json           # Turborepo設定
├── tsconfig.json        # TypeScriptプロジェクト参照
├── ...その他設定ファイル
```

## 推奨事項・特徴

- **Turborepo** による高速なビルド・依存管理・キャッシュ
- **apps/packages分離** で責務明確化・拡張性
- **CI/CD**（GitHub Actions等）で自動テスト・デプロイ
- **テスト共通化**（test-utils等）で重複排除
- **インフラ管理**（infra/）でIaC実現
- **README充実**でオンボーディング容易

## セットアップ手順

1. Node.jsバージョンを合わせる（例: nvm use）
2. 依存パッケージをインストール
   ```sh
   yarn install # または npm ci
   ```
3. .envファイルを作成
   ```sh
   cp .env.example .env
   # 必要に応じて値を編集
   ```
4. 開発サーバー起動
   ```sh
   yarn dev
   ```
5. テスト・Lint・型チェック
   ```sh
   yarn test
   yarn lint
   yarn typecheck
   ```

## よく使うコマンド例（Makefileがある場合）

```Makefile
setup:
	yarn install
	cp -n .env.example .env || true

yarn-dev:
	yarn dev

test:
	yarn test

lint:
	yarn lint
```

## 注意事項

- .env.example を必ず最新に保ち、**新しい環境変数を追加・変更した場合は必ず.env.exampleも更新してください**
- セットアップや運用ルールはREADMEと.mdcファイルで必ず確認してください

## パスワード保護機能

開発中のサイトをデプロイする際の一時的なアクセス制限機能を実装しています。

### 設定方法

1. `apps/frontend/env.example` を参考に環境変数を設定
2. パスワード保護を有効にする場合：
   ```
   NEXT_PUBLIC_PASSWORD_PROTECTED=true
   NEXT_PUBLIC_SITE_PASSWORD=your-secure-password-here
   ```
3. パスワード保護を無効にする場合：
   ```
   NEXT_PUBLIC_PASSWORD_PROTECTED=false
   ```

### 機能

- 全ページへのアクセス制限（クライアントサイド）
- パスワード入力オーバーレイ
- ローカルストレージベースのセッション管理
- ログアウト機能（右上のボタン）
- 環境変数による制御
- 静的サイト生成（SSG）対応

### セキュリティ注意事項

- 本番環境では強力なパスワードを設定してください
- `NEXT_PUBLIC_SITE_PASSWORD`はクライアントサイドで使用されるため、完全なセキュリティは保証されません
- 開発完了後は`NEXT_PUBLIC_PASSWORD_PROTECTED=false`に設定して無効化してください
- この機能は一時的な保護用であり、本格的なセキュリティが必要な場合は別の認証システムを検討してください

- ※ Turboの仕様上、devスクリプトが不要なワークスペースにも "dev": "echo no dev script" を追加しています。
- ※ 本当にdevタスクが必要になった場合は、このダミーを本来の内容に書き換えてください。

## 開発フロー例

1. apps/ または packages/ で開発
2. `yarn build` で全体ビルド
3. `yarn test` で全体テスト
4. プルリクエスト作成

## 参考

- [Turborepo公式ドキュメント](https://turbo.build/)
- [モノレポのメリット・デメリット](https://zenn.dev/)

## CI/CDとの連携

- CI（GitHub Actions等）でも本READMEのセットアップ手順・コマンドをそのまま利用しています
- 例: .github/workflows/ci.yml 参照

## トラブルシューティング

- Nodeバージョンが合わない場合: `nvm use` でバージョンを合わせてください
- 依存パッケージの不整合: `yarn install --force` で再インストール
- .envがない: `.env.example`をコピーして作成

## faviconのパスを追加
