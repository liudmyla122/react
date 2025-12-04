import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import Sequelize from 'sequelize'
import { sequelize } from '../config/db.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const db = {}

const modelFiles = fs
  .readdirSync(__dirname)
  .filter((file) => file !== 'index.js' && file.endsWith('.js'))

for (const file of modelFiles) {
  const modelPath = path.join(__dirname, file)

  // динамический ES-модуль импорт
  const modelModule = await import(modelPath)

  const model = modelModule.default(sequelize, Sequelize.DataTypes)

  db[model.name] = model
}

// экспортируем объекты sequelize
db.sequelize = sequelize
db.Sequelize = Sequelize

export default db
