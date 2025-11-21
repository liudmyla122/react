const EventEmitter = require('events')

const chatEmitter = new EventEmitter()
chatEmitter.on('message', (user, message) => {
  console.log(`${user}: ${message}`)
})

function sendMessage(user, message, emitter) {
  emitter.emit('message', user, message)
}

sendMessage('Alice', 'Привет, как дела?', chatEmitter)
sendMessage('Bob', 'Все отлично, спасибо!', chatEmitter)
sendMessage('Charlie', 'Я тоже здесь!', chatEmitter)
