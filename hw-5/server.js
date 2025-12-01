const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain')

  try {
    // Задание 1: Проверка Authorization
    if (req.headers['authorization'] === undefined) {
      res.statusCode = 401
      return res.end('Unauthorized')
    }

    // Задание 3: PUT и DELETE
    if (req.method === 'PUT') {
      res.statusCode = 200
      return res.end('PUT-запрос обработан')
    } else if (req.method === 'DELETE') {
      res.statusCode = 200
      return res.end('DELETE-запрос обработан')
    }

    res.statusCode = 200
    res.end('Authorization header received')
  } catch (error) {
    fs.appendFile('errors.log', `${new Date()} - ${error.message}\n`, (err) => {
      if (err) console.error('Ошибка при записи в файл', err)
    })
    res.statusCode = 500
    res.end('Internal Server Error')
  }
})

server.listen(3000, () => {
  console.log('Сервер запущен на порту 3000')
})
