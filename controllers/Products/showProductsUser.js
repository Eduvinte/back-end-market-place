import pool from "../../db/index.js"
async function showProductsUserController({ id_user_profile }){
    const query = 'SELECT * FROM products WHERE user_id = $1'
    const values = [id_user_profile]
    const result = await pool.query(query, values)
    return(result.rows)
}

export default showProductsUserController