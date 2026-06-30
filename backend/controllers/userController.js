const UserService = require("../services/userService");

exports.getProfile = (req, res) => {

    res.json({
        success: true,
        message: "Perfil obtenido"
    });

};

exports.updateProfile = (req, res) => {

    const user = UserService.createUser(req.body);

    res.json(user);

};
