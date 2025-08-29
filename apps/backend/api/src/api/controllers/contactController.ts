import { Request, Response } from 'express'
import nodemailer from 'nodemailer'

interface ContactFormData {
  subject: string
  name: string
  email: string
  phone: string
  company?: string
  message: string
}

export const sendContactEmail = async (req: Request, res: Response) => {
  try {
    const { subject, name, email, phone, company, message }: ContactFormData = req.body

    // バリデーション
    if (!subject || !name || !email || !phone || !message) {
      return res.status(400).json({
        error: '必須項目が不足しています',
        required: ['subject', 'name', 'email', 'phone', 'message'],
      })
    }

    // メール送信処理
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL || 'side.palette@gmail.com', // テスト用に変更
      replyTo: email, // フォーム入力者のメールアドレスを返信先に設定
      subject: `【お問い合わせ】${subject}`,
      text: `
お問い合わせフォームから新しいメッセージが届きました。

【お問い合わせ内容】
件名: ${subject}
お名前: ${name}
メールアドレス: ${email}
電話番号: ${phone || '未入力'}
会社名: ${company || '未入力'}

【メッセージ】
${message}

---
このメールは自動送信されています。
      `,
      html: `
        <h2>お問い合わせフォームから新しいメッセージが届きました。</h2>
        <h3>【お問い合わせ内容】</h3>
        <p><strong>件名:</strong> ${subject}</p>
        <p><strong>お名前:</strong> ${name}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        <p><strong>電話番号:</strong> ${phone || '未入力'}</p>
        <p><strong>会社名:</strong> ${company || '未入力'}</p>
        <h3>【メッセージ】</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>このメールは自動送信されています。</small></p>
      `,
    }

    await transporter.sendMail(mailOptions)

    res.status(200).json({
      message: 'お問い合わせを送信しました',
      success: true,
    })
  } catch (error) {
    console.error('Email sending error:', error)
    res.status(500).json({
      error: '送信に失敗しました。しばらく時間をおいて再度お試しください。',
      success: false,
    })
  }
}
