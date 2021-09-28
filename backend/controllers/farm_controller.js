const { response } = require('express')
const { resp } = require('../helpers/response');
const { getRarity, getRole, getGeneticStats, getBaseStats, getRarityId, getRoleId } = require('../helpers/pets');
const Pet = require('../models/pet');
const Farm = require('../models/farm');
const { role } = require('../helpers/tables');
const PlayerResources = require('../models/playerResources');

const get = async (req, res = response) => {

    const { uid } = req;

    // Obtener farm
    const farm = new Farm();

    const data = await farm.getByUser(uid)

    if (!data) return resp(res, 404, { msg: "Can't get farms" });

    // Crear array con datos y eventos
    let farmRow = {};
    data.forEach(element => {
        // calcular el tiempo que falta para completar el farm
        const startDate = new Date(element.stamp);
        const endDate = new Date(element.completedFarm_at);
        const minsToComplete = Math.round((endDate.getTime() - startDate.getTime()) / 1000 / 60);

        const template = {
            id: element.id,
            land_id: element.land_id,
            land_rarity: element.land_rarity,
            pet_id: element.pet_id,
            pet_rarity: element.pet_rarity,
            pet_image: element.pet_image,
            pet_ce: element.production,
            pet_time: element.hours,
            startFarm_at: element.startFarm_at,
            completedFarm_at: element.completedFarm_at,
            minsToComplete,
            extraTime: 0,
            haveHouse: false,
            bones: 0,
            isAfraid: false,
            events: {}

        }


        if (!farmRow[element.pet_id]) farmRow[element.pet_id] = template;

        if (element.event) {
            if (farmRow[element.pet_id].events[element.event]) {

                farmRow[element.pet_id].events[element.event] =
                    [...farmRow[element.pet_id].events[element.event], { start_at: new Date(element.start_at), finish_at: element.finish_at ? new Date(element.finish_at) : false }];
            } else {
                farmRow[element.pet_id].events[element.event] = [{ start_at: new Date(element.start_at), finish_at: element.finish_at ? new Date(element.finish_at) : false }];
            }
        }




    });


    let farmData = [];
    const date = new Date();
    for (const i in farmRow) {
        const row = farmRow[i];

        // Comprobar cuantos huesos hay hoy
        if (row.events.bones) {
            row.events.bones.find((element) => {
                if (element.start_at.getDate() === date.getDate() && element.start_at.getMonth() === date.getMonth() && element.start_at.getYear() === date.getYear()) {
                    row.bones++;
                }
            })
        }

        // Comprobar si tiene casa
        if (row.events.house) {
            row.events.house.find((element) => {
                if (element.start_at < date < element.finish_at) {
                    row.haveHouse = true;
                    return true
                }

            })
        }

        // Comprobar si esta asustado
        if (row.events.afraid) {
            row.events.afraid.find((element) => {

                if (element.start_at && !element.finish_at) {
                    row.isAfraid = true;
                    return true
                }

            })
        }

        // Calcular h extra que debe sumar
        // horas por estar asustado
        if (row.events.afraid) {
            row.events.afraid.find((element) => {

                if (element.start_at && element.finish_at) {
                    const dif = element.finish_at.getTime() - element.start_at.getTime()
                    const timeAdd = dif / 1000 / 60;
                    row.extraTime += Math.round(timeAdd)

                } else {
                    const dif = date.getTime() - element.start_at.getTime()
                    const timeAdd = dif / 1000 / 60;
                    row.extraTime += Math.round(timeAdd)
                }

            })
        }

        // horas por no dar de comer
        // Total de dias que se le ha dado de comer
        let daysFeed = 0;

        const isSameDay = (date1, date2) => {
            if (date1.getDate() !== date2.getDate()) return false;
            if (date1.getMonth() !== date2.getMonth()) return false;
            if (date1.getYear() !== date2.getYear()) return false;
            return true;
        }

        if (row.events.bones) {
            for (let i = 0; i < row.events.bones.length; i++) {
                if (i === 0) continue;
                const start1 = row.events.bones[i].start_at;
                const start2 = row.events.bones[i - 1].start_at;

                if (isSameDay(start1, start2)) daysFeed++;

            }
        }


        // Total de dias hasta hoy
        const dif = date.getTime() - row.startFarm_at.getTime()
        const totalDays = Math.round(dif / 1000 / 3600 / 24);
        row.extraTime += (totalDays - daysFeed) * 24 * 60

        farmData = [...farmData, row]
    }

    return resp(res, 200, farmData);


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

    // comprobar cuanta comida la ha dado en el dia
    const farm = new Farm();
    const haveHome = await farm.haveFood(id);
    if (!haveHome) return resp(res, 500, { msg: 'Server error' });
    if (haveHome.length > 1) return resp(res, 404, { msg: "Already a food" });

    // Restar la comida y poner el evento
    const response = await player.useFood(id);
    if (!response) return resp(res, 500, { msg: 'Server error' });

    return resp(res, 200, { msg: 'Success' });
}

// TODO:
const useCress = async (req, res = response) => {

    const { uid } = req;
    // Obtener id
    const { id } = req.params;
    // comprobar que tiene suficientes caricias
    const player = new PlayerResources();
    player.player_id = uid;
    const resources = await player.get();
    if (!resources) return resp(res, 500, { msg: 'Server error' });
    if (resources.cress < 1) return resp(res, 404, { msg: "Insuficient cress" });

    // Restar la caricia, curar afraid
    const response = await player.useCress(id);
    if (!response) return resp(res, 500, { msg: 'Server error' });

    return resp(res, 200, { msg: 'Success' });
}

module.exports = {
    get,
    useHome,
    useFood,
    useCress

}

