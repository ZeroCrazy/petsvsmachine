const Farm = require("../models/farm")


const weatherEvent = () => {
    const farm = Farm;
    farm.weatherEvent();
}


module.exports = {
    weatherEvent
};