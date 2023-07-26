import EditProductController from "../../controllers/Products/editProduct.js"

function EditProductService(req, res) {
    try {
        const { product_id } = req.params
        const { name, description, phone, price, category } = req.body
        if (req.file) {
            const photo = req.file.path
            EditProductController({name, description, phone, price, photo, category, product_id})
        }
        res.send('Producto editado con éxito')
    } catch (error) {
        console.error('Error al editar el product', error)
    }

}

export default EditProductService