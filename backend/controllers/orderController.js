exports.getOrders = (req, res) => {

    res.json({
        success: true,
        orders: []
    });

};

exports.createOrder = (req, res) => {

    res.json({
        success: true,
        message: "Pedido creado"
    });

};
