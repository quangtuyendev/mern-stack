const { model, Schema } = require('mongoose');

const ProductSchema = Schema({
    description: {
        require: true,
        type: String,
    },
    images: {
        require: true,
        type: Array,
    },
    title: {
        require: true,
        type: String,
    }
});

module.exports = model('products', ProductSchema);