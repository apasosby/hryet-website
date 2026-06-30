const express = require("express");

const router = express.Router();

router.post("/register", (req, res) => {

    res.json({
        success: true,
        message: "Usuario registrado correctamente"
    });

});

router.post("/login", (req, res) => {

    res.json({
        success: true,
        message: "Inicio de sesión correcto"
    });

});

module.exports = router;

