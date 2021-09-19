const { response, request } = require('express');
const jwt = require('jsonwebtoken');

const validateJWT = (req = request, res = response, next) => {
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            msg: "Missing token"
        })
    }

    try {
        const { uid } = jwt.verify(token, process.env.SECRET_KEY);
        req.uid = uid;
        next();
    } catch (error) {
        return res.status(401).json({
            msg: error
        })
    }
}

const validateJWTSocket = (token) => {

    try {
        const { uid } = jwt.verify(token, process.env.SECRET_KEY);
        return uid;
    } catch (error) {
        return false;
    }
}


module.exports = {
    validateJWT,
    validateJWTSocket
}