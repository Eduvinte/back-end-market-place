import pkg from 'pg';

const { Pool } = pkg;

const pool = new Pool({
    database: 'railway',
    host: 'containers-us-west-141.railway.app',
    port: 6492,
    user: 'postgres',
    password: 'Q5j0VZJxMTgIpzOL2ANq'
})

export default pool
