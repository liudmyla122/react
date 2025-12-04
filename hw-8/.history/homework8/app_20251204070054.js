import Book from './models/book.js'

// GET /books
app.get('/books', async (req, res) => {
  const books = await Book.findAll()
  res.json(books)
})

// POST /books
app.post('/books', async (req, res) => {
  const { title, author, year } = req.body
  const book = await Book.create({ title, author, year })
  res.json(book)
})

// PUT /books/:id
app.put('/books/:id', async (req, res) => {
  const { id } = req.params
  const { title, author, year } = req.body
  await Book.update({ title, author, year }, { where: { id } })
  const updatedBook = await Book.findByPk(id)
  res.json(updatedBook)
})

// DELETE /books/:id
app.delete('/books/:id', async (req, res) => {
  const { id } = req.params
  await Book.destroy({ where: { id } })
  res.json({ message: 'Book deleted' })
})
