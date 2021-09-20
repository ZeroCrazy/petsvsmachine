const { response } = require('express')
const bcryptjs = require('bcryptjs');

const { generateJWT } = require('../helpers/generateJWT');
const { resp } = require('../helpers/response');
const Player = require('../models/player');

// const MailController = require('../controllers/mail_controller');
// const startdb = require('../helpers/dbconnector')

const register = async (req, res = response) => {


    const { email, password } = req.body;

    const ip = req.connection.remoteAddress;

    const player = new Player();
    // Encriptar la contraseña
    player.email = email;
    player.ip = ip;
    const salt = bcryptjs.genSaltSync();
    player.password = bcryptjs.hashSync(password, salt);
    // Verificar si el correo existe
    const exist = await player.exist();

    if (exist.length > 0) resp(res, 409, {
        errors: {
            email: true
        }
    })

    const response = await player.register();

    if (!response) return resp(res, 404, { msg: 'An error ocurred' })
    // const mailCtrl = new MailController();
    // Enviar el email de registro
    // mailCtrl.register(email);

    return resp(res, 200, { msg: 'Account created success' })

}

const login = async (req, res = response) => {


    try {
        const { email, password } = req.body;

        const player = new Player();
        player.email = email;
        const response = await player.login();
        if (!response) return resp(res, 401, { msg: "User not found" })

        // Verificar contraseña
        const validPassword = bcryptjs.compareSync(password, response.password);
        console.log(validPassword);

        if (!validPassword) return resp(res, 402, { msg: "Incorrect password" });

        // Generar el JWT
        player.token = await generateJWT(response.id);
        player.id = response.id;

        return resp(res, 200, { token: player.token, });

    } catch (error) {
        return resp(res, 500, { msg: error });
    }
}

const identity = async (req, res = response) => {

    // try {
    //     const { uid } = req;
    //     const user = new User();
    //     user.id = uid;
    //     const response = await user.get();
    //     if (!response) return res.status(500).json({ msg: 'Server Error' })
    //     const lv = new Level;
    //     const exp = await lv.getAll();
    //     res.status(200).json({ auth: response[0], exp })

    // } catch (error) {
    //     console.log(error);
    //     res.status(500).json({ msg: 'Server Error' })
    // }

}


module.exports = {
    login,
    register,
    identity
}

