import pool from "../../db/index.js"

async function productDetailsController({ product_id }){
    const query = "SELECT * FROM products WHERE id = $1"
    const values = [product_id]
    const result = await pool.query(query, values)
    return result.rows

   
}

export default productDetailsController