const { response } = require('express')
const { resp } = require('../helpers/response');
const Pet = require('../models/pet');
const Farm = require('../models/farm');
const { createFarmData } = require('../helpers/farm');
const PlayerResources = require('../models/playerResources');
const Land = require('../models/land');


const get = async (req, res = response) => {

    const { uid } = req;

    // Obtener farm
    const farm = new Farm();
    const data = await farm.getByUser(uid)

    if (!data) return resp(res, 404, { msg: "Can't get farms" });

    // Crear objeto con datos y eventos
    const farmData = createFarmData(data)

    return resp(res, 200, farmData);

}

const deleteFarm = async (req, res = response) => {

    const { uid } = req;
    const { id } = req.params;

    // Obtener farm
    const farm = new Farm();
    farm.id = id;
    const data = await farm.deleteFarm(uid)
    if (!data) return resp(res, 404, { msg: "Can't delete farm" });

    return resp(res, 200, {msg:'Farm deleted'});

}

const putFarm = async (req, res = response) => {

    const { uid } = req;
    let { pet_id, isShop } = req.body;

    //Comprobar que hay sitio para la pet
    const land = new Land();
    const farming = await land.petsFarming(uid);
    if (!farming) return resp(res, 500, { msg: "Server error" });
    if (farming.floor <= farming.isFarming) return resp(res, 401, { msg: "Land is complete" });
    // comprobar si es pet shop o no
    if (isShop) {
        // Crear pet
        const pet = new Pet();
        const response = await pet.createShopPet(uid);
        if (!response) return resp(res, 404, { msg: "Can't start farms" });

        return resp(res, 200, { msg: 'created' });
    }

    // Crear farm
    const farm = new Farm();
    farm.pet_id = pet_id;
    const data = await farm.create(uid)

    if (!data) return resp(res, 404, { msg: "Can't start farms" });

    return resp(res, 200, { msg: 'created' });

}

const getDetails = async (req, res = response) => {

    const { uid } = req;

    const { id } = req.params

    // Obtener farm
    const farm = new Farm();
    farm.id = id
    const data = await farm.getDetails(uid)
    if (!data) return resp(res, 404, { msg: "Can't get farms" });
    // Crear objeto con datos y eventos
    const farmData = createFarmData(data)

    const farming = await farm.getFarmingUser(uid)
    if (!farming) return resp(res, 404, { msg: "Can't get farms" });

    return resp(res, 200, { pet: farmData[0], farming });

}


const useHome = async (req, res = response) => {

    const { uid } = req;
    // Obtener id
    const { id } = req.params;
    // comprobar que tiene suficientes casas
    const player = new PlayerResources();
    player.player_id = uid;
    const resources = await player.get();
    if (!resources) return resp(res, 500, { msg: 'Server error' });
    if (resources.house < 1) return resp(res, 404, { msg: "Insuficient houses" });
    // comprobar que no tiene una casa puesta
    const farm = new Farm();
    const haveHome = await farm.haveHome(id);
    if (!haveHome) return resp(res, 500, { msg: 'Server error' });
    if (haveHome.length > 0) return resp(res, 404, { msg: "Already a house" });

    // Restar la casa y poner el evento
    const response = await player.useHouse(id);
    if (!response) return resp(res, 500, { msg: 'Server error' });

    return resp(res, 200, { msg: 'Success' });

}

const useFood = async (req, res = response) => {

    const { uid } = req;
    // Obtener id
    const { id } = req.params;
    // comprobar que tiene suficientes casas
    const player = new PlayerResources();
    player.player_id = uid;
    const resources = await player.get();
    if (!resources) return resp(res, 500, { msg: 'Server error' });
    if (resources.food < 1) return resp(res, 404, { msg: "Insuficient food" });


    const farm = new Farm();
    const haveHome = await farm.haveHome(id);
    if (!haveHome) return resp(res, 500, { msg: 'Server error' });
    if (haveHome.length === 0) return resp(res, 404, { msg: "Dont'have a house" });

    // comprobar cuanta comida la ha dado en el dia
    const haveFood = await farm.haveFood(id);
    if (!haveFood) return resp(res, 500, { msg: 'Server error' });
    if (haveFood.length > 1) return resp(res, 404, { msg: "Already a food" });

    // Restar la comida y poner el evento
    const response = await player.useFood(id);
    if (!response) return resp(res, 500, { msg: 'Server error' });

    return resp(res, 200, { msg: 'Success' });
}

const useCaress = async (req, res = response) => {

    const { uid } = req;
    // Obtener id
    const { id } = req.params;
    // comprobar que tiene suficientes caricias
    const player = new PlayerResources();
    player.player_id = uid;
    const resources = await player.get();
    if (!resources) return resp(res, 500, { msg: 'Server error' });
    if (resources.caress < 1) return resp(res, 404, { msg: "Insuficient caress" });

    // Restar la caricia, curar afraid
    const response = await player.useCaress(id);
    if (!response) return resp(res, 500, { msg: 'Server error' });

    return resp(res, 200, { msg: 'Success' });
}

module.exports = {
    get,
    getDetails,
    putFarm,
    useHome,
    useFood,
    useCaress,
    deleteFarm

}

