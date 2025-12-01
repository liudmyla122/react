import express from 'express'

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

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`)
})

// POST маршрут
app.post('/', (req, res) => {
  try {
    const data = req.body

    if (!data.name) {
      return res.status(400).send('Ошибка: поле name обязательно')
    }

    res.send(`Получено имя: ${data.name}`)
  } catch (err) {
    res.status(500).send('Произошла ошибка на сервере')
  }
})
