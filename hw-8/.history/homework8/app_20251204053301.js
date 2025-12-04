// app.js
import express from 'express'
import db from './models/index.js' // наш индекс и модели
const { Book, sequelize } = db // получаем модель и sequelize

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

// GET /books - список всех книг
app.get('/books', async (req, res) => {
  try {
    const books = await Book.findAll()
    res.json(books)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Ошибка при получении книг' })
  }
})

// POST /books - создать книгу
app.post('/books', async (req, res) => {
  try {
    const { title, author, year } = req.body
    if (!title || !author)
      return res.status(400).json({ error: 'title и author обязательны' })

    const newBook = await Book.create({ title, author, year })
    res.status(201).json(newBook)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Ошибка при создании книги' })
  }
})

// PUT /books/:id - обновить книгу
app.put('/books/:id', async (req, res) => {
  try {
    const id = req.params.id
    const [updatedRows] = await Book.update(req.body, { where: { id } })
    if (updatedRows === 0)
      return res.status(404).json({ error: 'Книга не найдена' })

    const updatedBook = await Book.findByPk(id)
    res.json(updatedBook)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Ошибка при обновлении книги' })
  }
})

// DELETE /books/:id - удалить книгу
app.delete('/books/:id', async (req, res) => {
  try {
    const id = req.params.id
    const deletedRows = await Book.destroy({ where: { id } })
    if (deletedRows === 0)
      return res.status(404).json({ error: 'Книга не найдена' })

    res.json({ message: 'Книга удалена' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Ошибка при удалении книги' })
  }
})

// старт сервера
app.listen(PORT, async () => {
  try {
    await sequelize.authenticate()
    console.log('Connected to DB')
  } catch (e) {
    console.error('DB connection failed:', e)
  }
  console.log(`Server running on http://localhost:${PORT}`)
})
