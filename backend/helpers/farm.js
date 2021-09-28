const { isSameDay } = require('./dates');

const createFarmData = (data) => {
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

    return getEventsFarm(farmRow);
}

const getEventsFarm = (farmRow) => {
    let farmData = [];
    const date = new Date();

    for (const i in farmRow) {
        const row = farmRow[i];

        // Comprobar cuantos huesos hay hoy
        if (row.events.bones) {
            row.events.bones.find((element) => {
                // Comprobar si es el mismo dia
                if (isSameDay(element.start_at, date)) {
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

    return farmData
}


module.exports = {
    createFarmData,
    getEventsFarm
}