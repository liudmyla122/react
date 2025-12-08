import type { Request, Response, NextFunction } from 'express'
import { verifyToken } from '../utils/auth.js'
import { User } from '../models/user.js'

declare global {
  namespace Express {
    interface Request {
      user?: User
    }
  }
}

export async function authRequired(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const auth = req.headers.authorization
    if (!auth || !auth.startsWith('Bearer '))
      return res.status(401).json({ error: 'No token' })
    const token = auth.split(' ')[1]
    if (!token) return res.status(401).json({ error: 'No token' })
    const payload = verifyToken(token)
    const user = await User.findByPk(payload.id)
    if (!user) return res.status(401).json({ error: 'Invalid token' })
    req.user = user
    next()
  } catch (err) {
    return res
      .status(401)
      .json({ error: 'Unauthorized', details: (err as Error).message })
  }
}

export function requireRole(role: 'admin' | 'user') {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = req.user
    if (!user) return res.status(401).json({ error: 'Unauthorized' })
    if (user.role !== role)
      return res.status(403).json({ error: 'Access denied' })
    next()
  }
}

export function checkMustChangePassword(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const user = req.user
  if (user && user.mustChangePassword) {
    return res
      .status(403)
      .json({ error: 'Password change required', mustChangePassword: true })
  }
  next()
}
