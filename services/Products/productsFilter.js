import ProductsFilterController from "../../controllers/Products/productsFilter.js"

async function ProductsFilterServices(req, res) {
    try {
        const { category, minPrice, maxPrice } = req.body
        console.log(req.body)
        const products = await ProductsFilterController({ category, minPrice, maxPrice })
        res.json(products)
    } catch (error) {
        console.error('Error al obtener productos filtrados', error)
    }
}

export default ProductsFilterServices