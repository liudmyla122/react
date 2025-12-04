import express from 'express'
import Book from './models/book.js'
import sequelize from './config/db.js'

const app = express()
app.use(express.json())

// Подключение к базе данных
sequelize.authenticate()
  .then(() => {
    console.log('Database connection established successfully.')
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error)
  })

// GET /books
app.get('/books', async (req, res) => {
  try {
    const books = await Book.findAll()
    res.json(books)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// POST /books
app.post('/books', async (req, res) => {
  try {
    const { title, author, year } = req.body
    const book = await Book.create({ title, author, year })
    res.json(book)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// PUT /books/:id
app.put('/books/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { title, author, year } = req.body
    await Book.update({ title, author, year }, { where: { id } })
    const updatedBook = await Book.findByPk(id)
    if (!updatedBook) {
      return res.status(404).json({ error: 'Book not found' })
    }
    res.json(updatedBook)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// DELETE /books/:id
app.delete('/books/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Book.destroy({ where: { id } })
    if (!deleted) {
      return res.status(404).json({ error: 'Book not found' })
    }
    res.json({ message: 'Book deleted' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
