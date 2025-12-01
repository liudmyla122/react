import express from 'express'
import { db } from './db.js'

const app = express()
const PORT = 3000

app.use(express.json())

app.get('/', (req, res) => {
  try {
    res.send('Hello, World!')
  } catch (err) {
    res.status(500).send('Произошла ошибка на сервере')
  }
})

app.post('/', (req, res) => {
  try {
    const data = req.body
    if (!data.name) return res.status(400).send('Ошибка: поле name обязательно')
    res.send(`Получено имя: ${data.name}`)
  } catch (err) {
    res.status(500).send('Произошла ошибка на сервере')
  }
})

app.get('/products', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) return res.status(500).json({ error: err.message })

    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(results, null, 2))
  })
})

app.post('/products', (req, res) => {
  const { name, price } = req.body

  if (!name || !price)
    return res.status(400).json({ error: 'Необходимо указать name и price' })

  db.query(
    'INSERT INTO products (name, price) VALUES (?, ?)',
    [name, price],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message })
      res.json({ message: 'Продукт успешно добавлен', id: result.insertId })
    }
  )
})

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`)
})
