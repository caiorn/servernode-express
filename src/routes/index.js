const express = require('express');
const router = express.Router();

// importa rotas dos módulos
const userRoutes = require('../modules/user/user-routes');
const productRoutes = require('../modules/product/product-routes');

console.log('Rota principal da API carregada!');

// define prefixos para cada módulo
router.use('/users', userRoutes);
router.use('/products', productRoutes);

module.exports = router;