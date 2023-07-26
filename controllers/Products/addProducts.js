import pool from "../../db/index.js"

async function AddProductsController( name, description, phone, price, photo, user_id, category ){
    try {
        const query = "INSERT INTO products ( name, description, phone, price, photo, user_id, category ) VALUES ($1, $2, $3, $4, $5, $6, $7)"
        const values = [name, description, phone, price, photo, user_id, category]
        console.log(values)
        await pool.query(query, values)
        console.log('Producto registrado con éxito')
    } catch (error) {
        console.error('Error en cadastrar el producto', error)
    }
  
}
export default AddProductsController