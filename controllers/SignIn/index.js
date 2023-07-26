import pool from "../../db/index.js"
import bcryp from 'bcrypt'
import jwt from "jsonwebtoken"
import secretKey from "../../secreteKey/index.js"

async function SignInController(email, password) {

    try {
        
        // Tomando dados do usuario e buscando na db o
        const query = "SELECT * FROM users WHERE email = $1"
        const values = [email]
        const result = await pool.query(query, values)
    
        // Antes de prosseguir verificar si el usuario existe
        if (result.rows.length === 0) {
            console.log("Usuario no existe");
            return; // Devuelve tempranamente si el usuario no existe
        }
    
        // Toma de valores para generar el token
        const user = result.rows[0]
    
        // Toma la contraseña encriptada
        const passwordEncrypted = result.rows[0].password
        // Compara con la contraseña que llega del cliente y la encriptada
        const passwordMatch = await bcryp.compare(password, passwordEncrypted)
    
        // Toma de valores para generar el token
    
        if (passwordMatch) {
            const token = jwt.sign(
                { userId: user.id, userEmail: user.email, userName: user.name },
                  secretKey,
                  { expiresIn: '1h' }              
            )
           return(token)
        } else (
            console.error('Usuario no autenticado', error)
        )

    } catch (error) {
        console.error("Erro al autenticar el usuario", error)
    }


}

export default SignInController