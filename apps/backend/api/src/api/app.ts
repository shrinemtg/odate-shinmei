import cors from 'cors'
import express from 'express'
import sampleRouter from './routes/sample'
import contactRouter from './routes/contactRoutes'

const app = express()
const port = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
  }),
)

app.use('/sample', sampleRouter)
app.use('/api', contactRouter)

// エラーハンドリング
app.use((err: any, req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err.stack)
  res.status(500).json({ error: 'サーバーエラーが発生しました' })
})

app.listen(port, () => console.log(`App listening on port ${port}!`))
