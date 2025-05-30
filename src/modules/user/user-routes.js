const express = require('express');
const router = express.Router();
const userController = require('./user-controller');

router.get('/', userController.getAll);
router.get('/:id', userController.findById);
router.post('/', userController.create);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

module.exports = router;