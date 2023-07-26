import pool from "../../db/index.js";

async function DeleteProductController({ product_id }){
    try {
       const query = "DELETE FROM products WHERE id = $1"
       const values = [ product_id ]
       await pool.query(query, values)
    } catch (error) {
        res.status(500).json({ success: false, message: 'Ha ocurrido un error al eliminar producto' });
    }
    
}

export default DeleteProductController