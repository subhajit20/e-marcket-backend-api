const Product = require("../schemas/Product.model");

/*
 * Get all products from all categories out there
 *
 */
async function getAllProductsList(req,res){
    try{
        const allproducts = await Product.find();
        if(allproducts.length <= 0){
            res.status(404).json({
                msg:"No Products exist..."
            })
        }else{
            res.status(200).json({
                products:allproducts
            })
        }
    }catch(e){
        res.status(500).json({
            msg:"Something went wrong..."
        })
    }
}

/*
 * Get a single product 
 *
 */
function getProduct(req,res){
    res.status(200).json({
        msg:"Get a single product ",
    })
}

/*
 * Get a single product 
 *
 */
function getAllCategoryProductsList(req,res){
    res.status(200).json({
        msg:"Get all products corresponding specific  category",
    })
}

module.exports = {
    getAllProductsList,
    getProduct,
    getAllCategoryProductsList
}