import RegisterController from '../../controllers/Register/index.js'


function RegisterServices(req, res) {
    try {
        const { name, email, password } = req.body
        RegisterController(name, email, password)
        res.send('Ejecutado con éxito')
    } catch (error) {
        res.status(500).send('Erro interno al registrar', error)
    }
}

export default RegisterServices