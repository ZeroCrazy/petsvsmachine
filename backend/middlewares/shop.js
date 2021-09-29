const { response, request } = require('express');
const { resp } = require('../helpers/response');
const PlayerResources = require('../models/playerResources');

const haveCE = async (uid, resource) => {
    try {
        const player = new PlayerResources();
        player.player_id = uid;
        const resources = await player.haveCE(resource);
        if (!resources) return false;
        if (resources.coins < resources.cost) return false;
        return true;
    } catch {
        return false
    }
}

const houseCE = async (req = request, res = response, next) => {
    try {
        const { uid } = req;
        // comprobar que el usuario tiene suficiente ce
        const response = await haveCE(uid, 'house')
        if (!response) return resp(res, 404, { msg: "Insuficient ce" });
        next()
    } catch {
        return resp(res, 500, { msg: "Server error" })
    }
}

const foodCE = async (req = request, res = response, next) => {
    try {
        const { uid } = req;
        // comprobar que el usuario tiene suficiente ce
        const response = await haveCE(uid, 'food')
        if (!response) return resp(res, 404, { msg: "Insuficient ce" });
        next()
    } catch {
        return resp(res, 500, { msg: "Server error" })
    }
}

const caressCE = async (req = request, res = response, next) => {
    try {
        const { uid } = req;
        // comprobar que el usuario tiene suficiente ce
        const response = await haveCE(uid, 'caress')
        if (!response) return resp(res, 404, { msg: "Insuficient ce" });
        next()
    } catch {
        return resp(res, 500, { msg: "Server error" })
    }
}


module.exports = {
    houseCE,
    foodCE,
    caressCE
};