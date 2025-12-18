const express = require('express')
const mongoose = require('mongoose')
const Category = require('./models/Category')
const Product = require('./models/Product')
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

app.post('/categories', async (req, res) => {
  try {
    const category = new Category(req.body)
    await category.save()
    res.status(201).json(category)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})
