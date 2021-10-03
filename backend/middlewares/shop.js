const { response, request } = require('express');
const { resp } = require('../helpers/response');
const PlayerResources = require('../models/playerResources');

const haveCE = async (uid, resource, quantity) => {
    try {
        const player = new PlayerResources();
        player.player_id = uid;
        const resources = await player.haveCE(resource);

        if (!resources) return false;
        if (resources.coins < resources.cost * quantity) return false;
        return true;
    } catch {
        return false
    }
}

const petCE = async (req = request, res = response, next) => {
    try {
        const { uid } = req;
        const { quantity } = req.body;
        // comprobar que el usuario tiene suficiente ce
        const response = await haveCE(uid, 'pet', quantity)
        if (!response) return resp(res, 404, { msg: "Insuficient ce" });
        next()
    } catch {
        return resp(res, 500, { msg: "Server error" })
    }
}

const houseCE = async (req = request, res = response, next) => {
    try {
        const { uid } = req;
        const { quantity } = req.body;

        // comprobar que el usuario tiene suficiente ce
        const response = await haveCE(uid, 'house', quantity)
        if (!response) return resp(res, 404, { msg: "Insuficient ce" });
        next()
    } catch {
        return resp(res, 500, { msg: "Server error" })
    }
}

const foodCE = async (req = request, res = response, next) => {
    try {
        const { uid } = req;
        const { quantity } = req.body;

        // comprobar que el usuario tiene suficiente ce
        const response = await haveCE(uid, 'food', quantity)
        if (!response) return resp(res, 404, { msg: "Insuficient ce" });
        next()
    } catch {
        return resp(res, 500, { msg: "Server error" })
    }
}

const caressCE = async (req = request, res = response, next) => {
    try {
        const { uid } = req;
        const { quantity } = req.body;

        // comprobar que el usuario tiene suficiente ce
        const response = await haveCE(uid, 'caress', quantity)
        if (!response) return resp(res, 404, { msg: "Insuficient ce" });
        next()
    } catch {
        return resp(res, 500, { msg: "Server error" })
    }
}


module.exports = {
    petCE,
    houseCE,
    foodCE,
    caressCE
};