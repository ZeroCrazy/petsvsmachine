const { response } = require('express')
const { resp } = require('../helpers/response');
const { getRarity, getRole, getGeneticStats, getBaseStats } = require('../helpers/pets');
const Pet = require('../models/pet');

const create = async (req, res = response) => {


    // const { username, email, password } = req.body;

    const { uid } = req;

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
    pet.rarity = rarity;
    pet.role = role;
    pet.hp = hp;
    pet.attack = atk;
    pet.armor = def;
    pet.speed = spd;
    pet.production = 8162;
    pet.days = 7;
    // TODO: open at

    const response = await pet.create();

    if (!response) return resp(res, 404, { msg: "Can't create pet" })



    return resp(res, 200, { id: response, rarity, role, stats: { hp, atk, def, spd } })

}

const getByPlayer = async (req, res = response) => {

    // Obtener el usuario
    const { uid } = req;
    // Obtener pets del usuario
    const pet = new Pet();
    pet.player_id = uid;
    const data = await pet.getByPlayer();

    if (!data) return resp(res, 404, { msg: "Can't get pets" })

    const pets = data.map((row) => {
        return {
            ...row,
            hours: row.days * 7
        }
    })

    return resp(res, 200, pets)

}




module.exports = {
    create,
    getByPlayer

}

