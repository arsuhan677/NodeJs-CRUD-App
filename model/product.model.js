const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, "please inter your product name"]
        },
        price: {
            type: Number,
            require: true,
            default: 0,
        },
        quantity: {
            type: Number,
            require: true,
            default: 0,
        },
        image: {
            type: String,
            require: false,
        }  
    },
    {
        Timestamp: true,
    }
);

const Product = mongoose.model("product", ProductSchema);
module.exports = Product;