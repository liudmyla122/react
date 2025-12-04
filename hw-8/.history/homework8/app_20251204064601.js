import express from 'express'
import sequelize from './config/db.js'
import Book from './models/book.js'

const app = express()
app.use(express.json()) // для парсинга JSON

// Проверка подключения к БД
sequelize
  .authenticate()
  .then(() => console.log('DB connected'))
  .catch((err) => console.log('DB connection error:', err))

// Запуск сервера
const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
