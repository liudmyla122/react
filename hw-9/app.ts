import express from 'express'
import dotenv from 'dotenv'
import sequelize from './models/sequelize.js'
import authRoutes from './routes/auth.js'
import adminRoutes from './routes/admin.js'

dotenv.config()

const app = express()
app.use(express.json())

app.use('/api', authRoutes)
app.use('/api', adminRoutes)

async function start(): Promise<void> {
  try {
    await sequelize.authenticate()
    await sequelize.sync({ alter: true })
    console.log('DB ok')

    const PORT: number = Number(process.env.PORT) || 3000
    app.listen(PORT, () => console.log('Server running on', PORT))
  } catch (err) {
    console.error('Unable to start', err)
    process.exit(1)
  }
}

start()
