import pool from "../../db/index.js"
async function ProductsFilterController({ category, minPrice, maxPrice }){
    try {
        const query = "SELECT * FROM products WHERE category = $1 AND price BETWEEN $2 AND $3"
        const values = [ category, minPrice, maxPrice ]
        const result = await pool.query(query, values)
        return result.rows
    } catch (error) {
        console.error('Error al obetener productos filtrados')
    }
}

export default ProductsFilterController