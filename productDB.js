require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./models/product");

const ProductJson = require("./products.json")

const start = async () => {
    try{
        await connectDB(process.env.MONGODB_URL);
        await Product.deleteMany(); //Delete Previous data and upload new data
        await Product.create(ProductJson);
        console.log("Successfully Added");
    } catch (error) {
        console.log("Error:",error);
    }
}

start();