import pkg from 'pg';
const { Pool } = pkg;

const DB_HOST = process.env.DB_HOST || 'localhost'
const DB_USER = process.env.DB_USER || 'postgres'
const DB_PORT = process.env.DB_PORT || '5432'
const DB_PASSWORD = process.env.DB_PASSWORD || '689101101024Edu'
const DB_NAME = process.env.DB_NAME || 'marketplace'

const pool = new Pool({
    database:'marketplace',
    user: 'postgres',
    password: '689101101024Edu',
    port: 5432,
})

export default pool
