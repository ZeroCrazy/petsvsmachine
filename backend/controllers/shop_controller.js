const { response } = require('express')
const { resp } = require('../helpers/response');

const Shop = require('../models/shop');
const PlayerResources = require('../models/playerResources');


const get = async (req, res = response) => {
    // Obtener productos de la tienda
    const shop = new Shop();
    const products = await shop.get();

    if (!products) return resp(res, 404, { msg: "Can't get shop " })

    return resp(res, 200, products)
}

const buyPet = async (req, res = response) => {
    const { uid } = req;

    const player = new PlayerResources();
    player.player_id = uid;
    // Restar la ce y sumar houses
    const response = await player.buyShop('pet');
    if (!response) return resp(res, 500, { msg: 'Server error' });

    return resp(res, 200, { msg: 'Success' });

}

const buyHouse = async (req, res = response) => {
    const { uid } = req;

    const player = new PlayerResources();
    player.player_id = uid;
    // Restar la ce y sumar houses
    const response = await player.buyShop('house');
    if (!response) return resp(res, 500, { msg: 'Server error' });

    return resp(res, 200, { msg: 'Success' });

}

const buyFood = async (req, res = response) => {
    const { uid } = req;

    const player = new PlayerResources();
    player.player_id = uid;
    // Restar la ce y sumar houses
    const response = await player.buyShop('food');
    if (!response) return resp(res, 500, { msg: 'Server error' });

    return resp(res, 200, { msg: 'Success' });

}

const buyCaress = async (req, res = response) => {
    const { uid } = req;

    const player = new PlayerResources();
    player.player_id = uid;
    // Restar la ce y sumar houses
    const response = await player.buyShop('caress');
    if (!response) return resp(res, 500, { msg: 'Server error' });

    return resp(res, 200, { msg: 'Success' });

}



module.exports = {
    get,
    buyPet,
    buyHouse,
    buyFood,
    buyCaress

}

