const mongoose = require("mongoose")

const { Schema } = mongoose

const productSchema = new Schema({
    name: {
        type: String, 
        required: true,
    },
    code: {
        type: Number, 
        required: true,
    },
    price: {
        type: Number, 
        required: true,
    },
    description: {
        type: String, 
        required: true,
    },
}, {timestamps: true})


const Product = mongoose.model("Product", productSchema)

module.exports = Product