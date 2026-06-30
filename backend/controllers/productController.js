const ProductService = require("../services/productService");

exports.getProducts = (req, res) => {

    res.json(ProductService.getAllProducts());

};

exports.createProduct = (req, res) => {

    res.json(ProductService.createProduct(req.body));

};
