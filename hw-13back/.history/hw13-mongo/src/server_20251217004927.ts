import dotenv from 'dotenv'
import { Publisher } from './models/Publisher'
import { Magazine } from './models/Magazine'
import { Article } from './models/Article'
import { Tag } from './models/Tag'

dotenv.config()

import app from './app'
import { connectDB } from './config/db'

const PORT = process.env.PORT || 3000

const startServer = async () => {
  await connectDB()

  // === TEST ONE-TO-MANY ===
  const publisher = await Publisher.create({
    name: 'Science Press',
    location: 'Berlin',
  })

  await Magazine.create({
    title: 'Quantum Monthly',
    issueNumber: 42,
    publisher: publisher._id,
  })

  const magazines = await Magazine.find().populate('publisher')

  console.log(JSON.stringify(magazines, null, 2))

  app.listen(PORT, () => {
    console.log(`🚀 Server started on port ${PORT}`)
  })
}

startServer()
