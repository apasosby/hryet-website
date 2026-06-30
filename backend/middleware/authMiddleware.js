const authMiddleware = (req, res, next) => {

    console.log("Verificando autenticación...");

    next();

};

module.exports = authMiddleware;
