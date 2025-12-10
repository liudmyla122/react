import express, { Request, Response, NextFunction } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())

const JWT_SECRET = process.env.JWT_SECRET || 'very_secret_key_for_demo'
const TOKEN_EXPIRES_IN = '15m'

type Role = 'user' | 'admin'

interface User {
  id: number
  username: string
  email: string
  password: string
  role: Role
}

const users: User[] = [
  {
    id: 1,
    username: 'alice',
    email: 'alice@example.com',
    password: bcrypt.hashSync('password1', 10),
    role: 'user',
  },
  {
    id: 2,
    username: 'bob',
    email: 'bob@example.com',
    password: bcrypt.hashSync('adminpass', 10),
    role: 'admin',
  },
]

function generateToken(user: User) {
  const payload = { id: user.id, username: user.username, role: user.role }
  return jwt.sign(payload, JWT_SECRET, { expiresIn: TOKEN_EXPIRES_IN })
}

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: number
        username: string
        role: Role
        iat?: number
        exp?: number
      }
    }
  }
}

function authenticateJWT(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.header('Authorization')
  if (!authHeader)
    return res.status(401).json({ message: 'Нет заголовка Authorization' })
  const [, token] = authHeader.split(' ')
  if (!token)
    return res.status(401).json({ message: 'Неверный формат Authorization' })

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err)
      return res
        .status(401)
        .json({
          message: 'Токен недействителен или просрочен',
          error: err.message,
        })
    req.user = decoded as any
    next()
  })
}

function authorizeRole(requiredRole: Role) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) return res.status(401).json({ message: 'Неавторизованный' })
    if (req.user.role !== requiredRole) {
      return res
        .status(403)
        .json({ message: 'Доступ запрещён: недостаточно прав' })
    }
    next()
  }
}

app.post('/login', async (req, res) => {
  const { username, password } = req.body as {
    username?: string
    password?: string
  }
  if (!username || !password)
    return res.status(400).json({ message: 'username и password обязательны' })

  const user = users.find((u) => u.username === username)
  if (!user) return res.status(401).json({ message: 'Неверные учётные данные' })

  const match = await bcrypt.compare(password, user.password)
  if (!match)
    return res.status(401).json({ message: 'Неверные учётные данные' })

  const token = generateToken(user)
  res.json({
    token,
    user: {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
    },
  })
})

app.put('/update-email', authenticateJWT, (req, res) => {
  const { email } = req.body as { email?: string }
  if (!email) return res.status(400).json({ message: 'Новый email обязателен' })
  if (!req.user) return res.status(401).json({ message: 'Неавторизованный' })

  const user = users.find((u) => u.id === req.user!.id)
  if (!user) return res.status(404).json({ message: 'Пользователь не найден' })

  user.email = email
  res.json({
    message: 'Email обновлён',
    user: {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
    },
  })
})

app.delete('/delete-account', authenticateJWT, (req, res) => {
  if (!req.user) return res.status(401).json({ message: 'Неавторизованный' })

  const userId = req.user.id
  const exists = users.some((u) => u.id === userId)
  if (!exists)
    return res.status(404).json({ message: 'Пользователь не найден' })

  for (let i = users.length - 1; i >= 0; i--) {
    if (users[i].id === userId) users.splice(i, 1)
  }

  res.json({ message: 'Аккаунт успешно удалён' })
})

app.put('/update-role', authenticateJWT, authorizeRole('admin'), (req, res) => {
  const { id, role } = req.body as { id?: number; role?: Role }
  if (typeof id !== 'number' || !role)
    return res.status(400).json({ message: 'Требуются id и новая role' })

  const user = users.find((u) => u.id === id)
  if (!user) return res.status(404).json({ message: 'Пользователь не найден' })

  user.role = role
  res.json({
    message: 'Роль обновлена',
    user: { id: user.id, username: user.username, role: user.role },
  })
})

app.post('/refresh-token', authenticateJWT, (req, res) => {
  if (!req.user) return res.status(401).json({ message: 'Неавторизованный' })

  const user = users.find((u) => u.id === req.user!.id)
  if (!user) return res.status(404).json({ message: 'Пользователь не найден' })

  const newToken = generateToken(user)
  res.json({ message: 'Токен обновлён', token: newToken })
})

app.get('/me', authenticateJWT, (req, res) => {
  if (!req.user) return res.status(401).json({ message: 'Неавторизованный' })
  const user = users.find((u) => u.id === req.user!.id)
  if (!user) return res.status(404).json({ message: 'Пользователь не найден' })
  res.json({
    id: user.id,
    username: user.username,
    email: user.email,
    role: user.role,
  })
})

const PORT = process.env.PORT ? Number(process.env.PORT) : 4000
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`)
  console.log('Available users (for demo):')
  console.log(
    users.map((u) => ({
      id: u.id,
      username: u.username,
      password: '(hidden)',
      role: u.role,
    }))
  )
})
