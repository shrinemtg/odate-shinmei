import { Router } from 'express'
import { sendContactEmail } from '../controllers/contactController'

const router = Router()

// POST /api/contact
router.post('/contact', sendContactEmail)

export default router
