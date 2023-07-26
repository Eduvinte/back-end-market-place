// DataBase
import pool from '../../db/index.js'
import bcrypt from 'bcrypt'



async function userExists(email) {
    const query = 'SELECT COUNT(*) AS count FROM  users WHERE email = $1'
    const value = [email]
    const result = await pool.query(query, value)
    return result.rows[0].count > 0
}

async function RegisterController(name, email, password) {
    try {

        // Verify if the email exists
        const verifyEmailExists = await userExists(email)
        if (verifyEmailExists) {
            console.log('El usuario ya existe, por favor registre con otro usuario')
            return
        } else {
            // Encypted password
            const passwordEnctypted = await bcrypt.hash(password, 10)
            const query = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3)'
            const values = [name, email, passwordEnctypted]
            await pool.query(query, values)
        }
    } catch (error) {
        console.error('Erro al registrar el usuario', error)
    }
}

export default RegisterController