/*
 * Get all products from all categories out there
 *
 */
function getAllProductsList(req,res){
    res.status(200).json({
        msg:"Get all products from all categories out there",
    })
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