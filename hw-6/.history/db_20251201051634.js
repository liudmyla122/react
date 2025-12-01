import mysql from 'mysql2/promise'

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'faeTon1222!',
  database: 'product_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})

console.log('🗄️ MySQL пул подключений настроен.')

export default pool
