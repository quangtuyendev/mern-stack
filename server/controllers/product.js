const Product = require('../models/products');

async function getAllProduct(req, res, next) {
    try {
        const products = await Product.find()
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ msg: 'Fetch products faild' });       
    }
}

module.exports = { getAllProduct }