const Product = require('../models/products');
const _ = require('lodash');

async function getAllProduct(req, res, next) {
    const { search } = req.query;
    try {
        const products = await Product.find(_.pickBy({
            title: search
        ? {
            $regex: search,
            $options: 'i',
          }
        : '',
        }))
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ msg: 'Fetch products failed' });       
    }
}

async function getProductDetails(req, res, next) {
    const { id } = req.params;
    try {
        const product = await Product.findOne({_id: id})
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ msg: 'Fetch product detail failed' });       
    }
}


module.exports = { getAllProduct, getProductDetails };