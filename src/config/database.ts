import { createPool } from 'mysql2/promise'
import dotnev from 'dotenv'

dotnev.config()

const pool = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
})

export default pool