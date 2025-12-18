const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

// чтобы Express понимал JSON
app.use(express.json())

const PORT = 3000

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected')
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error)
  })

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
