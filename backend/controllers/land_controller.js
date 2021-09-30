const { response } = require('express')
const { resp } = require('../helpers/response');

const Land = require('../models/land');


const init = async (req, res = response) => {

    // Obtener productos de la tienda
    const land = new Land();
    land.floor = 12;
    const uncommon = [90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
        110, 111, 112, 113, 116, 119, 120, 121, 122,
        131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143,
        152, 153, 154, 162, 163, 164, 173, 175, 183, 185, 194, 196, 204, 206, 215, 216, 217,
        225, 226, 227, 236, 238, 246, 248, 257, 259, 267, 269, 278, 279, 280, 288, 289, 290,
        299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 320, 321, 322, 323, 326, 329,
        330, 331, 332, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352
    ];
    const rare = [69, 70, 78, 79, 89, 101, 109, 114, 115, 117, 118, 123, 130, 144, 155, 156, 157, 158, 159, 160, 161, 174, 176, 182,
        184, 195, 197, 203, 205, 218, 224, 237, 239, 245, 247, 258, 260, 266, 268, 281, 282, 283, 284, 285, 286, 287, 298, 312, 319, 324, 325, 327,
        328, 333, 341, 353, 363, 364, 372, 373
    ];
    const mythic = [177, 178, 179, 180, 181, 198, 199, 201, 202, 219, 223, 240, 241, 243, 244,
        261, 262, 263, 264, 265];
    const center = [200, 220, 221, 222, 242];

    for (let i = 1; i <= 441; i++) {
        if (uncommon.includes(i)) land.rarity_id = 2;
        else if (rare.includes(i)) land.rarity_id = 3;
        else if (mythic.includes(i)) land.rarity_id = 4;
        else if (center.includes(i)) land.rarity_id = 5;
        else land.rarity_id = 1;
        const response = await land.create();
    }



    return resp(res, 200, response)

}

const get = async (req, res = response) => {

    const land = new Land();
    const lands = await land.get()
    if (!lands) return resp(res, 404, { msg: "Cant't get lands" })
    return resp(res, 200, lands)
}

const getPlayerLands = async (req, res = response) => {

    const { uid } = req;
    const land = new Land();
    const lands = await land.getUser(uid)
    if (!lands) return resp(res, 404, { msg: "Cant't get lands" })
    return resp(res, 200, lands)
}


module.exports = {
    init,
    get,
    getPlayerLands

}

