import showProductsUserController from "../../controllers/Products/showProductsUser.js"

async function ShowProductsUserService(req, res){
    const { id_user_profile } = req.params 
    console.log(id_user_profile)
    const response = await showProductsUserController({id_user_profile})
    res.json(response)
}

export default ShowProductsUserService