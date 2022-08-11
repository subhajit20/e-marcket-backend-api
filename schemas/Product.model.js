const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');

const ProdcutSchema = new mongoose.Schema({
    ProdcutID:{
        type:String,
        default:uuidv4()
    },
    productName:{
        type:String,
    },
    title:{
        type:String,
    },
    price:{
        type:String
    },
    description:{
        type:String,
    },
    category:{
        type:mongoose.Types.ObjectId,
        ref:"category"
    },
    image:{
        type:String
    },
    rating:{
        rate:{
            type:String
        },
        count:{
            type:String
        }
    },
    date:{
        type:Date,
        default:Date.now(),
    }
})

const Prodcut = new mongoose.model("product",ProdcutSchema);

module.exports = Prodcut;