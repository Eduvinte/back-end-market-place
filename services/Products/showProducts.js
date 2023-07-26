import showProductsController from "../../controllers/Products/showProducts.js"

async function showProductsService(req, res) {
    try {
        const query = req.query
        const product = await showProductsController(query)
        res.json(product)
    } catch (error) {
        console.error('Error al obtener productos', error)
    }
}

export default showProductsService