import pkg from 'pg';

const { Pool } = pkg;

const pool = new Pool({
    database: 'marketplace',
    host: 'dpg-cj3jn6diuie55plej2c0-a',
    port: 5432,
    user: 'postgress',
    password: 'iX8gdxeYlo9kDqJ1gAHK5hlODBnXFe3l'
})

export default pool
