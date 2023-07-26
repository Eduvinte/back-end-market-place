import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    database:'marketplace',
    user: 'postgres',
    password: '689101101024Edu',
    port: 5432,
})

export default pool
