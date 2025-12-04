import { Sequelize } from 'sequelize'
const configJSON = require('./config.json')

const env = process.env.NODE_ENV || 'development'
const config = configJSON[env]

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: 'mysql',
    logging: false,
  }
)

export default sequelize
