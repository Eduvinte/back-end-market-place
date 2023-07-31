import pool from "../../db/index.js"

async function showProductsController( ){
    const limit = 4
    try {
        const query = 'SELECT * FROM products LIMIT $1'
        const products =  await pool.query(query, [limit])
        return products.rows
    } catch (error) {
        console.error('Error al obtener productos', error)
    }
  
}

export default showProductsController