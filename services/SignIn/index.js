import SignInController from "../../controllers/SignIn/index.js"
import jwt  from "jsonwebtoken"
import secretKey from "../../secreteKey/index.js"

async function SignInService(req, res) {
    const { email, password } = req.body
    try {
        // Guarda o retorno do controller e passa os valor do cliente tambén
        const token = await SignInController(email, password)

        // Se existe token e utilizamos verify e desustructuramos para coletar os dados do 
        if (token) {
            const decodedToken = jwt.verify(token, secretKey)
            const userId = decodedToken.userId
            const userEmail = decodedToken.userEmail
            const userName = decodedToken.userName
            res.json({ userId, token,  userEmail, userName})
        } else {
            res.status(404).json({ error: "Usuario no autenticado" })
        }
    } catch (error) {
        console.error("Error al autenticar el usuario:", error);
        res.status(500).json({ error: "Error al autenticar el usuario" });
    }

}
export default SignInService