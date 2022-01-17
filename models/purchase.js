const mongoose = require('mongoose')

const purchaseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    price:{
        type: Number,
        required: true

    },
    noOfQuantities:{
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
})

const Purchase = mongoose.model('purchaseSchema', purchaseSchema)
module.exports = Purchase