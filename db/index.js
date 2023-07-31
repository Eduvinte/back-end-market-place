import pkg from 'pg';
const { Pool } = pkg;

const DB_DATABASE = process.env.DB_DATABASE 
const DB_HOST = process.env.DB_HOST 
const DB_PASSWORD = process.env.DB_PASSWORD 
const DB_PORT = process.env.DB_PORT 
const DB_USER = process.env.DB_USER



const pool = new Pool({
    DB_DATABASE,
    DB_HOST,
    DB_PASSWORD,
    DB_PORT,
    DB_USER
})

export default pool
