import pool from "../../db/index.js"
async function EditProductController({name, description, phone, price, photo, category, product_id}){
    const query = "UPDATE products SET name = $1, description = $2, phone = $3, price = $4, photo = $5, category = $6 WHERE id = $7"
    const values = [name, description, phone, price, photo, category, product_id]
    await pool.query(query, values)
    return console.log('Producto editado con éxito')
}

export default EditProductController