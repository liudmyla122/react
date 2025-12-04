import { Sequelize } from 'sequelize'
import configJSON from './config.json' assert { type: 'json' }

const env = process.env.NODE_ENV || 'development'
const config = configJSON[env]

export const sequelize = new Sequelize(
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
