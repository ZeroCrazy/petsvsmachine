const { response } = require('express')
const { resp } = require('../helpers/response');

const Shop = require('../models/shop');


const get = async (req, res = response) => {

  
    // Obtener productos de la tienda
    const shop = new Shop();
    const products = await shop.get();

    if (!products) return resp(res, 404, { msg: "Can't get shop " })
 

    return resp(res, 200, products)

}


module.exports = {
    get,

}

