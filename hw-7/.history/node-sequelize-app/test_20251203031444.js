// test.js
const db = require('./models') // это models/index.js
async function run() {
  try {
    await db.sequelize.authenticate()
    console.log('Connected to DB')

    // Создаём запись
    const created = await db.App.create({ name: 'MyApp', size: 42 })
    console.log('Created:', created.toJSON())

    // Читаем все записи
    const all = await db.App.findAll()
    console.log(
      'All apps:',
      all.map((a) => a.toJSON())
    )
  } catch (err) {
    console.error('Error:', err)
  } finally {
    await db.sequelize.close()
  }
}

run()
