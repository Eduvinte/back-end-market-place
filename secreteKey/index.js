import crypto from 'crypto'

// Generar clave secreta aleatória 32bits 
const secretKey = crypto.randomBytes(32).toString('hex')

export default secretKey