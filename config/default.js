const dotenv = require('dotenv')
const exceptions = ['production', 'uat']

if (!exceptions.includes(process.env.NODE_ENV)) {
  dotenv.config()
}

const {
  NODE_ENV,
  SLS_GRAPHQL_DB_HOST_MASTER,
  SLS_GRAPHQL_DB_HOST_SLAVE,
  SLS_GRAPHQL_DB_PORT,
  SLS_GRAPHQL_DB_DIALECT,
  SLS_GRAPHQL_DB_NAME,
  SLS_GRAPHQL_DB_USER,
  SLS_GRAPHQL_DB_PASSWORD

} = process.env

const config = {
  env: NODE_ENV,
  db: {
    dialect: SLS_GRAPHQL_DB_DIALECT,
    user: SLS_GRAPHQL_DB_USER,
    password: SLS_GRAPHQL_DB_PASSWORD,
    database: SLS_GRAPHQL_DB_NAME,
    port: SLS_GRAPHQL_DB_PORT,
    host: SLS_GRAPHQL_DB_HOST_MASTER
  }
}

console.log('config', config)

module.exports = config