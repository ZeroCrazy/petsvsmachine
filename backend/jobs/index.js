const Farm = require("../models/farm")


const weatherEvent = async () => {
    const farm = new Farm();
    const resp = await farm.weatherEvent();
}


module.exports = {
    weatherEvent
};