import express from 'express'
import mysql from 'mysql2'

const app = express()
const PORT = 3000

app.use(express.json())

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'faeTon1222!',
  database: 'product_db',
})

db.connect((err) => {
  if (err) {
    console.error('Ошибка подключения к базе данных:', err.message)
  } else {
    console.log('Подключение к базе данных успешно')

    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS products (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            price DECIMAL(10,2) NOT NULL
        )
        `
    db.query(createTableQuery, (err) => {
      if (err) console.error('Ошибка при создании таблицы:', err.message)
      else console.log('Таблица products создана или уже существует')
    })
  }
})

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
    res.json(results)
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
