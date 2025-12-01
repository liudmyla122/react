import express from 'express'

import pool from './db.js'

const app = express()
const PORT = 3000

app.use(express.json())

app.get('/products', async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM products')
    res.status(200).json(rows)
  } catch (error) {
    console.error('❌ Ошибка при получении продуктов:', error.message)
    res.status(500).json({ error: 'Ошибка сервера при получении данных.' })
  }
})

app.post('/products', async (req, res) => {
  const { name, price } = req.body

  if (!name || typeof price !== 'number' || price <= 0) {
    return res.status(400).json({
      error:
        'Некорректные данные: требуются поля "name" (строка) и "price" (положительное число).',
    })
  }

  try {
    const insertQuery = 'INSERT INTO products (name, price) VALUES (?, ?)'
    const [result] = await pool.execute(insertQuery, [name, price])

    res.status(201).json({
      message: 'Продукт успешно добавлен',
      id: result.insertId,
      product: { name, price },
    })
  } catch (error) {
    console.error('❌ Ошибка при добавлении продукта:', error.message)
    res.status(500).json({ error: 'Ошибка сервера при добавлении продукта.' })
  }
})

app.use((req, res, next) => {
  res.status(404).json({ error: `Маршрут ${req.originalUrl} не найден.` })
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Произошла внутренняя ошибка сервера.' })
})

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`)
})
