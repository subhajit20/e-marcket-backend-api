const Category = require("../schemas/Category.model");

/*
 * Get all product categories name as response
 *
 */
async function getallcategories(req,res){
    try{
        const allCategories = await Category.find();
        if(allproducts.length <= 0){
            res.status(404).json({
                msg:"No Category exist..."
            })
        }else{
            res.status(200).json({
                products:allCategories
            })
        }
    }catch(e){
        res.status(500).json({
            msg:"Something went wrong..."
        })
    }
}

/*
 * Get all product categories name as response
 *
 */
function getcategory(req,res){
    res.status(200).json({
        msg:"get specific category...",
    })
}

/*
 * Get a specific category  as a response 
 *
 */
function addcategory(req,res){
    res.status(200).json({
        msg:"create cataegry...",
    })
}

module.exports = {
    getallcategories,
    getcategory,
    addcategory
}
