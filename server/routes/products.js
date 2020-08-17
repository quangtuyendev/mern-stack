const express = require('express');
const router = express.Router();
const isAuth = require('../middleware/auth');
const product = require('../controllers/product');

router.get('/', isAuth, product.getAllProduct);
router.get('/:id', isAuth, product.getProductDetails);

module.exports = router;