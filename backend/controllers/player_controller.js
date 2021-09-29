const { response } = require('express')
const { resp } = require('../helpers/response');
const { player } = require('../helpers/tables');
const Player = require('../models/player');
const PlayerResources = require('../models/playerResources');


const getResources = async (req, res = response) => {
    // Obtener el usuario
    const { uid } = req;

    const resources = new PlayerResources;
    resources.player_id = uid;
    const response = await resources.get();
    
    if (!response) return resp(res, 404, { msg: "Cant't get resources" });


    return resp(res, 200, response );
}





module.exports = {
    getResources
}

