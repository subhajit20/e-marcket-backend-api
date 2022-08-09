/*
 * Get all product categories name as response
 *
 */
function getallcategories(req,res){
    res.status(200).json({
        msg:"This is your category list route...",
    })
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
