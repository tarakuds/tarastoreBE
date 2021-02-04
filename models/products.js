const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
        unique:true
    },
    desc: String,
    img: String,
    cat: String,
    price: {
        type:Number,
        required: true,
    },
    salesPrice: Number
})

const Product =mongoose.model('product', productSchema)

module.exports = Product