import productDetailsController from "../../controllers/Products/productsDetails.js"

async function productDetailsService(req, res){
    const product_id  = req.params
    const result = await productDetailsController(product_id)
    res.json(result)
}

export default productDetailsService