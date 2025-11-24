const fs = require('fs')

fs.writeFile('info.txt', 'Node.js is awesome!', (err) => {
  if (err) {
    console.error('Ошибка при записи файла:', err.message || err)
    return
  }
  console.log('Файл info.txt успешно создан и записан.')

  fs.readFile('info.txt', 'utf-8', (err, data) => {
    if (err) {
      console.error('Ошибка при чтении файла:', err.message || err)
    } else {
      console.log('Содержимое файла info.txt:')
      console.log(data)
    }
  })
})
