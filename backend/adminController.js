exports.dashboard = (req, res) => {

    res.json({
        success: true,
        users: 0,
        products: 0,
        orders: 0,
        scans: 0
    });

};
