import DeleteProductController from "../../controllers/Products/deleteProduct.js"

function DeleteProductService(req, res){
    try {
        const product_id  = req.params
        DeleteProductController(product_id)
        res.send('Producto eliminado con éxito')
    } catch (error) {
        res.status(500).json({ success: false, message: 'Ha ocurrido un error al eliminar producto' });
    }
}

export default DeleteProductService