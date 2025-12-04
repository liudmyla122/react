import configJSON from './config.json' with { type: 'json' }

const env = process.env.NODE_ENV || 'development'
const config = configJSON[env]

import { Sequelize } from 'sequelize'

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
