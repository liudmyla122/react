import { Router } from 'express'
import { User } from '../models/user.js'
import { hashPassword, comparePassword, signToken } from '../utils/auth.js'
import {
  authRequired,
  checkMustChangePassword,
} from '../middlewares/authMiddleware.js'

const router = Router()

router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password)
      return res.status(400).json({ error: 'email and password required' })

    const existing = await User.findOne({ where: { email } })
    if (existing)
      return res.status(409).json({ error: 'Email already registered' })

    const passwordHash = await hashPassword(password)
    const user = await User.create({ email, passwordHash })
    return res.status(201).json({ id: user.id, email: user.email })
  } catch (err) {
    return res
      .status(500)
      .json({ error: 'Server error', details: (err as Error).message })
  }
})

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password)
      return res.status(400).json({ error: 'email and password required' })

    const user = await User.findOne({ where: { email } })
    if (!user) return res.status(401).json({ error: 'Invalid credentials' })

    const passwordHash = user.getDataValue('passwordHash')
    const userId = user.getDataValue('id')
    const userRole = user.getDataValue('role')
    const userEmail = user.getDataValue('email')
    const mustChangePassword = user.getDataValue('mustChangePassword')

    if (!passwordHash) {
      return res.status(500).json({ error: 'User data corrupted' })
    }

    const ok = await comparePassword(password, passwordHash)
    if (!ok) return res.status(401).json({ error: 'Invalid credentials' })

    const userForToken = {
      id: userId,
      role: userRole,
      email: userEmail,
    } as User

    const token = signToken(userForToken)

    return res.json({ token, mustChangePassword: mustChangePassword || false })
  } catch (err) {
    console.error('Login error:', err)
    const errorMessage = err instanceof Error ? err.message : 'Unknown error'
    return res
      .status(500)
      .json({ error: 'Server error', details: errorMessage })
  }
})

router.post('/change-password', authRequired, async (req, res) => {
  try {
    const user = req.user as User
    const { newPassword } = req.body
    if (!newPassword)
      return res.status(400).json({ error: 'newPassword required' })

    const newHash = await hashPassword(newPassword)
    user.passwordHash = newHash
    user.mustChangePassword = false
    await user.save()
    return res.json({ message: 'Password changed' })
  } catch (err) {
    return res.status(500).json({ error: 'Server error' })
  }
})

router.post('/delete-account', authRequired, async (req, res) => {
  try {
    const user = req.user as User
    const { password } = req.body
    if (!password) return res.status(400).json({ error: 'password required' })

    const ok = await comparePassword(password, user.passwordHash)
    if (!ok) return res.status(401).json({ error: 'Incorrect password' })

    await user.destroy()
    return res.json({ message: 'Account deleted' })
  } catch (err) {
    return res.status(500).json({ error: 'Server error' })
  }
})

router.post('/change-email', authRequired, async (req, res) => {
  try {
    const user = req.user as User
    const { newEmail, password } = req.body
    if (!newEmail || !password)
      return res.status(400).json({ error: 'newEmail and password required' })

    const ok = await comparePassword(password, user.passwordHash)
    if (!ok) return res.status(401).json({ error: 'Incorrect password' })

    const existing = await User.findOne({ where: { email: newEmail } })
    if (existing)
      return res.status(409).json({ error: 'Email already registered' })

    user.email = newEmail
    await user.save()
    return res.json({ message: 'Email updated', email: user.email })
  } catch (err) {
    return res.status(500).json({ error: 'Server error' })
  }
})

export default router
