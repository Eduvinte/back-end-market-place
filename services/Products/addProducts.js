import AddProductsController from "../../controllers/Products/addProducts.js"

function AddProductsService(req, res) {
        console.log('funciona')
    try {

        const { user_id } = req.params
        const { name, description, phone, price, category } = req.body
        // Si el archivo existe guardamos su ruta
        
        if (req.file) {
            console.log('funcion')
            const photo = req.file.path
            console.log(name, description, phone, photo, price, user_id, category)
            AddProductsController(name, description, phone, price, photo, user_id, category)
            
        }

        res.send('Cadastrado con éxitoooo')
    } catch (error) {
        console.error('No fue posible cadastrar el producto', error)
    }

}

export default AddProductsService