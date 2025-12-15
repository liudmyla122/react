import express from 'express'
import { connectDB } from './db/index'
import { ObjectId } from 'mongodb'

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3000

async function startServer() {
  const db = await connectDB()

  app.get('/', (req, res) => {
    res.send('Server is running')
  })

  app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
}

startServer()
