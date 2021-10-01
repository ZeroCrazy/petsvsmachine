const { response, request } = require('express');
const { resp } = require('../helpers/response');
const Farm = require('../models/farm');
const Pet = require('../models/pet');
const PlayerResources = require('../models/playerResources');

const ownerFarm = async (req = request, res = response, next) => {
    try {
        const { uid } = req;
        // Obtener id
        const { id } = req.params;
        // comprobar que el usuario es el proietario del farm
        const farm = new Farm();
        farm.id = id;
        const data = await farm.isOwner(uid)
        if (data.length > 0) next()
        else return resp(res, 401, { msg: "Not authoritzed" })
    } catch {
        return resp(res, 500, { msg: "Server error" })
    }
}

const ownerPet = async (req = request, res = response, next) => {
    try {
        const { uid } = req;
        // Obtener id
        const { pet_id, isShop } = req.body;
        if (isShop) {
            const player = new PlayerResources();
            player.player_id = uid;
            const resources = await player.get('pet');
            if (!resources) return resp(res, 500, { msg: "Server error" });
            if (resources.pet < 1) return resp(res, 401, { msg: "Insuficients pets" });
            next();
        } else {
            // comprobar que el usuario es el proietario del farm
            const pet = new Pet();
            pet.id = pet_id;
            const data = await pet.owner();
            if (!data) return resp(res, 500, { msg: "Server error" });
            if (data[0].player_id === uid) next();
            else return resp(res, 401, { msg: "Not authoritzed" });

        }
    } catch {
        return resp(res, 500, { msg: "Server error" });
    }
}


module.exports = {
    ownerFarm,
    ownerPet
};