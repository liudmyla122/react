const fs = require('fs')
const path = require('path')
require('dotenv').config()

const filename = process.env.FILENAME || 'default.txt'

const filePath = path.join(__dirname, filename)

const text =
  'Это пример содержимого файла.\nСоздано с помощью Node.js и dotenv.'

fs.writeFileSync(filePath, text, { encoding: 'utf8' })
console.log(`Файл "${filename}" записан.`)

const content = fs.readFileSync(filePath, { encoding: 'utf8' })
console.log('Содержимое файла:')
console.log('------------------')
console.log(content)
console.log('------------------')
