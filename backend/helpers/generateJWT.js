const jwt = require('jsonwebtoken');


const generateJWT = (uid = '') => {
    return new Promise((resolve, reject) => {

        const payload = { uid };

        jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: '7d'
        }, (error, token) => {

            if (error) reject("No se pudo generar el token");
            else resolve(token);
        });
    })
}

module.exports = {
    generateJWT
}