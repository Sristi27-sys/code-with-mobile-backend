const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    size: {
        type: Number,
    },
    price:{
        type: Number
    }
})

const  Products = mongoose.model('products', productSchema)
module.exports = Products  