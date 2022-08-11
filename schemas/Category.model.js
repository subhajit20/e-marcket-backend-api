const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');


const CategorySchema = new mongoose.Schema({
    categoryID:{
        type:String,
        default:uuidv4()
    },
    categoryName:{
        type:String,
    },
    products:[
        {
            type:mongoose.Types.ObjectId,
            ref:"product"
        }
    ],
    date:{
        type:Date,
        default:Date.now()
    }
})

const Category = mongoose.model("category",CategorySchema);

module.exports = Category;