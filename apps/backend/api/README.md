# お問い合わせフォーム メール送信機能

## セットアップ手順

### 1. 環境変数の設定

`apps/backend/api/env/.env.local` ファイルを作成し、以下の内容を設定してください：

```env
# SMTP設定
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# 管理者メールアドレス
ADMIN_EMAIL=admin@example.com

# フロントエンドURL
FRONTEND_URL=http://localhost:3000
```

### 2. Gmailの設定

1. Gmailアカウントで2段階認証を有効にする
2. アプリパスワードを生成する
3. `SMTP_PASS`にアプリパスワードを設定する

### 3. バックエンドの起動

```bash
cd apps/backend/api
yarn dev
```

### 4. フロントエンドの起動

```bash
cd apps/frontend
yarn dev
```

## API エンドポイント

### POST /api/contact

お問い合わせフォームの送信

**リクエスト例:**

```json
{
  "subject": "お問い合わせ",
  "name": "山田太郎",
  "email": "yamada@example.com",
  "phone": "090-1234-5678",
  "company": "株式会社サンプル",
  "message": "お問い合わせ内容"
}
```

**レスポンス例:**

```json
{
  "message": "お問い合わせを送信しました",
  "success": true
}
```

## ファイル構成

```
apps/backend/api/
├── src/api/
│   ├── controllers/
│   │   └── contactController.ts  # メール送信ロジック
│   ├── routes/
│   │   └── contactRoutes.ts      # APIルート定義
│   └── app.ts                    # メインアプリケーション
└── env/
    └── .env.local                # 環境変数（要作成）
```

## 注意事項

- 環境変数ファイル（.env.local）はGitにコミットしないでください
- 本番環境では適切なSMTP設定を使用してください
- セキュリティのため、アプリパスワードを使用してください
