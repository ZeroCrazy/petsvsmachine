const { response, request } = require('express');
const { resp } = require('../helpers/response');
const Farm = require('../models/farm');

const ownerFarm = async (req = request, res = response, next) => {
    try {
        const { uid } = req;
        // Obtener id
        const { id } = req.params;
        // comprobar que el usuario es el proietario del farm
        const farm = new Farm();
        farm.id = id;
        const response = await farm.isOwner(uid)
        if (response.length > 0) next()
        else return resp(res, 404, { msg: "Not authoritzed" })
    } catch {
        return resp(res, 500, { msg: "Server error" })
    }
}


module.exports = {
    ownerFarm
};