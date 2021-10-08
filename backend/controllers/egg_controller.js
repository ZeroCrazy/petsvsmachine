const { response } = require('express')
const { resp } = require('../helpers/response');
const { getRarity, getRole, getGeneticStats, getBaseStats, getRarityId, getRoleId } = require('../helpers/pets');
const Pet = require('../models/pet');
const PlayerResources = require('../models/playerResources');

const create = async (req, res = response) => {
    // const { username, email, password } = req.body;
    const { uid } = req;

    // Obtener huevos del usuario
    const player = new PlayerResources();
    player.player_id = uid;
    const eggs = await player.getEggs();
    if (!eggs) return resp(res, 500, { msg: "Server error" })
    if (eggs.eggs < 1) return resp(res, 401, { msg: "Insufficient eggs" })

    // Obtener la rareza
    const rarity = getRarity();
    //Obtener rol
    const role = getRole();
    const statsGenetic = getGeneticStats(rarity)
    const statsBase = getBaseStats(role)

    const hp = Math.floor((statsGenetic.hp + statsBase.hp) / 2);
    const atk = Math.floor((statsGenetic.atk + statsBase.atk) / 2);
    const def = Math.floor((statsGenetic.def + statsBase.def) / 2);
    const spd = Math.floor((statsGenetic.spd + statsBase.spd) / 2);

    const pet = new Pet();
    pet.player_id = uid;
    pet.rarity_id = getRarityId(rarity);
    pet.role_id = getRoleId(role);
    pet.hp = hp;
    pet.attack = atk;
    pet.armor = def;
    pet.speed = spd;
    pet.production = 600;
    pet.hours = 120;
    // TODO: open at

    const response = await pet.create();

    if (!response) return resp(res, 404, { msg: "Can't create pet" })

    return resp(res, 200, { id: response, rarity, role, stats: { hp, atk, def, spd } })
}

const getByPlayer = async (req, res = response) => {

    // Obtener el usuario
    const { uid } = req;

    // Obtener huevos del usuario
    const player = new PlayerResources();
    player.player_id = uid;
    const eggs = await player.getEggs();
    if (!eggs) return resp(res, 500, { msg: "Server error" })

    const pet = new Pet();
    pet.player_id = uid;
    const data = await pet.getEggs();
    if (!data) return resp(res, 500, { msg: "Server error" })

    data.map(egg => {
        egg.date = new Date();
        const date1 = new Date();
        const date2 = new Date(egg.open_at);
        const milliseconds = (date2 - date1); // milliseconds between 

        if (milliseconds <= 0) {
            egg.hours = 0;
            egg.minutes = 0;
            egg.seconds = 0;

        } else {
            //Get hours from milliseconds
            const hours = milliseconds / (1000 * 60 * 60);
            const absoluteHours = Math.floor(hours);
            const h = absoluteHours > 9 ? absoluteHours : '0' + absoluteHours;

            //Get remainder from hours and convert to minutes
            const minutes = (hours - absoluteHours) * 60;
            const absoluteMinutes = Math.floor(minutes);
            const m = absoluteMinutes > 9 ? absoluteMinutes : '0' + absoluteMinutes;

            //Get remainder from minutes and convert to seconds
            const seconds = (minutes - absoluteMinutes) * 60;
            const absoluteSeconds = Math.floor(seconds);
            const s = absoluteSeconds > 9 ? absoluteSeconds : '0' + absoluteSeconds;

            egg.hours = h;
            egg.minutes = m;
            egg.seconds = s;

        }


    })

    const dataEggs = {
        eggs: eggs.egg,
        incubate: [...data]
    }


    return resp(res, 200, dataEggs)

}


const openEgg = async (req, res = response) => {

    // Obtener el usuario
    const { uid } = req;
    const { id } = req.params;
    console.log(id)
    // Obtener huevos 
    const pet = new Pet();
    pet.id = id;
    pet.player_id = uid;
    const data = await pet.getEgg();
    if (!data) return resp(res, 500, { msg: "Server error" })

    const today = new Date();
    const openAt = new Date(data[0].open_at);

    if (today < openAt) return resp(res, 401, { msg: "Can't open egg" })
    const response = await pet.openEgg();
    if (!response) return resp(res, 500, { msg: "Server error" })

    return resp(res, 200, { msg: 'Egg is open' })

}






module.exports = {
    create,
    getByPlayer,
    openEgg

}

