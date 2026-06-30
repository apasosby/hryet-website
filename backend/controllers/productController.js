exports.getProducts = (req, res) => {

    res.json({
        success: true,
        products: []
    });

};

exports.createProduct = (req, res) => {

    res.json({
        success: true,
        message: "Producto creado"
    });

};
