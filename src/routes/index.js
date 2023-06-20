const express = require('express');
const routerCity = require('./city.router');
const routerProduct = require('./product.router');
const router = express.Router();

// colocar las rutas aquí

router.use('/cities', routerCity)
router.use('/products',routerProduct)



module.exports = router;