const Product = require('../models/product.model');

//create a product
exports.createProduct = (req, res) => {
    if (!req.body.sku || !req.body.name || !req.body.price) {
        throw Error("SKU, Name, and Price cannot be empty!");
    }

    const data = req.body;

    try {
        const product = new Product(data).save();
        return product;
    }
    catch (e) {
        throw Error('Error occurred while creating a user.');
    }
}

//get all products
exports.getProducts = async function () {

    try {
        const products = await Product.find()
        return products;
    } catch (e) {
        // Log Errors
        throw Error('Error while retrieving Products')
    }
}

//get single product
exports.getProduct = async function (sku) {
    try {
        const product = await Product.findOne(sku);
        //console.log(sku);
        return product;
    }
    catch (e) {
        throw Error('Error while retrieving the Product')
    }
}

exports.deleteProducts = async function () {

    try {
        const products = await Product.deleteMany();
        //console.log(products);
        return products;
    } catch (e) {
        // Log Errors
        throw Error('Error while deleting Products')
    }
}

exports.deleteProduct = async function (sku) {
    try {
        const product = await Product.deleteOne(sku);
        //console.log(sku);
        return product;
    }
    catch (e) {
        //console.log(sku);
        throw Error('Error while deleting the Product')
    }
}

exports.updateProduct = async function (sku, req, res) {
    try {
        const data = req.body;
        const product = await Product.updateOne(sku, data);
        //console.log(sku);
        return product;
    }
    catch (e) {
        //console.log(sku);
        throw Error('Error while updating the Product')
    }
}

exports.patchProduct = async function (sku, req, res) {
    try {
        const product = await Product.update(sku, {$set: req.body});
        //console.log(sku);
        return product;
    }
    catch (e) {
        //console.log(sku);
        throw Error('Error while patching the Product')
    }
}