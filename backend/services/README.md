class UserService {

    createUser(user) {

        return {
            success: true,
            message: "Usuario creado",
            data: user
        };

    }

    getUser(email) {

        return {
            success: true,
            email
        };

    }

}

module.exports = new UserService();
