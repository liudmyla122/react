import { Router } from 'express'
import { authRequired, requireRole } from '../middlewares/authMiddleware.js'

const router = Router()

router.get('/admin', authRequired, requireRole('admin'), async (req, res) => {
  return res.json({ message: 'Welcome, admin' })
})

export default router
