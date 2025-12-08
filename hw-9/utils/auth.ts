import { hash, compare } from 'bcrypt'
import jwt from 'jsonwebtoken'
import { User } from '../models/user.js'
import dotenv from 'dotenv'
dotenv.config()

const SALT_ROUNDS = 10
const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret'
const JWT_EXPIRES = '7d'

export async function hashPassword(password: string) {
  return hash(password, SALT_ROUNDS)
}

export async function comparePassword(password: string, hashStr: string) {
  return compare(password, hashStr)
}

export function signToken(user: User) {
  return jwt.sign(
    { id: user.id, role: user.role, email: user.email },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES }
  )
}

export function verifyToken(token: string) {
  return jwt.verify(token, JWT_SECRET) as {
    id: number
    role: string
    email: string
    iat: number
    exp: number
  }
}
