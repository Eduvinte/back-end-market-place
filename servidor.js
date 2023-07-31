import express from 'express'
import bodyParser from 'body-parser';
import validatedToken from './middleware/index.js'
import multer from 'multer';
// Function
// Register
import RegisterServices from './services/Register/index.js'
// Login
import SignInService from './services/SignIn/index.js'
//Products
import AddProductService from './services/Products/addProducts.js'
import showProductsService from './services/Products/showProducts.js';
import ProductsFilterServices from './services/Products/productsFilter.js';
import productDetailsService from './services/Products/productsDetails.js';
import DeleteProductService from './services/Products/deleteProduct.js';
import ShowProductsUserService from './services/Products/showProductsUser.js';
import cors from 'cors'
import editProductService from './services/Products/editProduct.js';

const app = express()



app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen('0.0.0.0', () => {
    console.log(`Servidor escutando`)
})
app.use('/upload', express.static('upload'));
// Configura el destino donde se irá guardar la imagenes
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Carpeta upload
        cb(null, 'upload/')
    },
    // Concatena en el nombre de la imagene la fecga
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})
const upload = multer({ storage: storage })
// Routes
app.post('/register', RegisterServices)
app.post('/login', SignInService)
// Cualquier tipo de dato enviado por form-data necesito del multer para refereciar el archivo debemos poner el nombre igual al de la base de datos
app.post('/addProduct/:user_id', validatedToken, upload.single('photo'), AddProductService)
app.get('/showProducts', showProductsService)
app.get('/showProductsUser/:id_user_profile', ShowProductsUserService)
app.post('/productsFilter', ProductsFilterServices)
app.get('/productsDetails/:product_id', productDetailsService)
app.put('/editProducts/:product_id', upload.single('photo'), editProductService)
app.delete('/deleteProduct/:product_id', DeleteProductService)
