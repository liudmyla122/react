import pool from './db.js'

async function setupDatabase() {
  const createTableQuery = `
        CREATE TABLE IF NOT EXISTS products (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            price DECIMAL(10, 2) NOT NULL
        );
    `

  try {
    const connection = await pool.getConnection()
    await connection.execute(createTableQuery)
    connection.release()
    console.log("✅ Таблица 'products' успешно создана или уже существовала.")
  } catch (error) {
    console.error("❌ Ошибка при создании таблицы 'products':", error.message)
  } finally {
    await pool.end()
  }
}

setupDatabase()
