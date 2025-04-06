const express = require('express');
const router = express.Router();
const userController = require('./user-controller');

router.get('/', userController.listarUsuarios);
router.post('/', userController.criarUsuario);

module.exports = router;