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
        res.status(400).json({ msg: 'Fetch products faild' });       
    }
}


module.exports = { getAllProduct }