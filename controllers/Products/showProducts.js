import pool from "../../db/index.js"

async function showProductsController( ){
    try {
        const query = 'SELECT * FROM products'
        const products =  await pool.query(query)
        return products.rows
    } catch (error) {
        console.error('Error al obtener productos', error)
    }
  
}

export default showProductsController