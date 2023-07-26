import AddProductsController from "../../controllers/Products/addProducts.js"

function AddProductsService(req, res) {

    try {
        const { user_id } = req.params
        const { name, description, phone, price, category } = req.body
        // Si el archivo existe guardamos su ruta
        if (req.file) {
            const photo = req.file.path
            AddProductsController(name, description, phone, price, photo, user_id, category)
        }

        res.send('Cadastrado con éxito')
    } catch (error) {
        console.error('No fue posible cadastrar el producto', error)
    }

}

export default AddProductsService