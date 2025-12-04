import sequelize from './config/db.js'
import Book from './models/book.js'

async function syncDatabase() {
  try {
    // Подключение к базе данных
    await sequelize.authenticate()
    console.log('Database connection established successfully.')

    // Синхронизация модели с базой данных (создание таблицы, если её нет)
    await Book.sync({ force: false, alter: true })
    console.log('Books table synchronized successfully.')

    // Проверяем, есть ли уже данные
    const existingBooks = await Book.findAll()
    
    if (existingBooks.length === 0) {
      // Заполняем таблицу начальными данными
      await Book.bulkCreate([
        {
          title: 'The Hobbit',
          author: 'J.R.R. Tolkien',
          year: 1937,
        },
        {
          title: 'Harry Potter',
          author: 'J.K. Rowling',
          year: 1997,
        },
      ])
      console.log('Initial books data inserted successfully.')
    } else {
      console.log(`Database already contains ${existingBooks.length} books.`)
    }

    // Показываем все книги в базе данных
    const allBooks = await Book.findAll()
    console.log('\nAll books in database:')
    allBooks.forEach(book => {
      console.log(`- ${book.title} by ${book.author} (${book.year})`)
    })

    await sequelize.close()
    console.log('\nDatabase synchronization completed!')
    process.exit(0)
  } catch (error) {
    console.error('Error synchronizing database:', error)
    process.exit(1)
  }
}

syncDatabase()

