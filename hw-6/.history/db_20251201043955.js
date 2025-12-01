import mysql from 'mysql2'

export const db = mysql.createConnection({
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
  }
})
