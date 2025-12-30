const express = require('express')
const http = require('http')
const { Server } = require('socket.io')
const path = require('path')

const app = express()
const server = http.createServer(app)
const io = new Server(server)

// Обслуживаем статические файлы из public/
app.use(express.static(path.join(__dirname, 'public')))

// Обрабатываем подключения
io.on('connection', (socket) => {
  console.log('Пользователь подключился:', socket.id)

  socket.on('chat message', (msg) => {
    console.log('Сообщение от пользователя:', msg)

    // Отправляем подтверждение клиенту
    socket.emit('message received', `Сообщение получено: "${msg}"`)
  })

  socket.on('disconnect', () => {
    console.log('Пользователь отключился:', socket.id)
  })
})

server.listen(3000, () => {
  console.log('Сервер запущен: http://localhost:3000')
})
