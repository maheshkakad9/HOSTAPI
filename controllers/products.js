const Product = require("../models/product")

const getAllProducts = async(req,res) => {
    const { company, title ,location, requirements,apiData} = req.query;
    const queryObject = {};

    if (company){
        queryObject.company = {$regex:company, $options:"i"};
    }
      
    if(title){
        queryObject.title = {$regex:title, $options: "i" };     
    }

    if(location){
        queryObject.location = {$regex:location, $options: "i"};
    }

    if(requirements){
        queryObject.requirements = {$regex:requirements, $options:"i"}
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 10;

    let skip = (page-1) * limit;

    try {
        const Products = await Product.find(queryObject)
            .skip((page - 1) * limit)
            .limit(limit);

        res.status(200).json({ Products, nbHits: Products.length });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const getAllProductsTesting = async(req,res) => {
    console.log(req.query)
    const Products = await Product.find(req.query);    
    res.status(200).json({Products, nbHits:Products.length});
};

module.exports = {getAllProducts,getAllProductsTesting};