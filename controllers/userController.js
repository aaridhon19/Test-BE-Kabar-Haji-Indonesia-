const { User } = require("../models");
const { signToken } = require("../helpers/jwt");
const { comparePassword } = require("../helpers/brcypt");

class UserController {
    static async login(req, res, next) {
        try {
            const { email, password } = req.body;
            if (!email) throw { name: "require_email" };
            if (!password) throw { name: "require_password" };

            const user = await User.findOne({ where: { email } });
            if (!user) throw { name: "user_not_found" };

            const cek_password = comparePassword(password, user.password);
            if (!cek_password) throw { name: "wrong_password" };

            const access_token = signToken({ id: user.id });

            res.status(200).json({
                message: "Login success",
                access_token: access_token,
                username: user.username,
                email: user.email,
            });
        } catch (error) {
            console.log(error, 'Error at login controller');
            next(error);
        }
    }

    static async register(req, res, next) {
        try {
            const { username, email, password } = req.body;
            if (!username) throw { name: "require_username" };
            if (!email) throw { name: "require_email" };
            if (!password) throw { name: "require_password" };

            await User.create({ username, email, password });

            const newUser = { username, email }
            res.status(201).json({ message: "Register success", newUser });
        } catch (error) {
            console.log(error, 'Error at register controller');
            next(error);
        }
    }

    static async getUserById(req, res, next) {
        try {
            const { id } = req.params;
            if(!id) throw { name: "id_not_found" };
            const user = await User.findByPk(id);
            if (!user) throw { name: "user_not_found" };

            res.status(200).json({ user });
        } catch (error) {
            console.log(error, 'Error at getUserById controller');
            next(error);
        }
    }
}

module.exports = UserController;
