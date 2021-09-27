const Model = require("./model");



class Farm extends Model {

    static table = 'farm_list';
    land_id;
    pet_id;
    haveBone;

    // Obtener pets que estan farmeando en el terreno

    async getByUser(player_id) {
        try {
            const sql = `SELECT t1.id, t1.land_id, t1.pet_id, t1.bones, t3.name AS land_rarity, t7.name AS event, t6.start_at, t6.finish_at, t1.start_at AS startFarm_at, t1.completed_at AS completedFarm_at, current_timestamp() AS stamp,
            t8.name AS pet_rarity, t4.image AS pet_image, t4.production, t4.hours
            FROM farm_list t1
        
            LEFT JOIN land_list t2 ON t1.land_id = t2.id
            LEFT JOIN land_rarity t3 ON t2.rarity_id = t3.id
            LEFT JOIN pet_list t4 ON t1.pet_id = t4.id
            LEFT JOIN pet_rarity t8 ON t4.rarity_id = t8.id
            LEFT JOIN player_list t5 ON t4.player_id = t5.id
        
            LEFT JOIN farm_events t6 ON t1.id = t6.farm_id
            LEFT JOIN event_list t7 ON t7.id = t6.event_id
        
            WHERE t4.player_id = ? AND t1.isCompleted = 0
        ;`
            const args = [player_id];
            const response = await this.query(sql, args);
            return response;
        } catch (error) {
            console.log(error)
            return false
        }
    }

    // async getByUser2(player_id) {
    //     try {
    //         const sql = `SELECT t1.id, t1.land_id, t1.pet_id, t1.bones, t3.name AS land_rarity, t1.start_at AS startFarm_at, t1.completed_at AS completedFarm_at, current_timestamp() AS stamp,
    //         t6.name AS pet_rarity, t4.image AS pet_image, t4.production, t4.hours
    //         FROM farm_list t1
        
    //         LEFT JOIN land_list t2 ON t1.land_id = t2.id
    //         LEFT JOIN land_rarity t3 ON t2.rarity_id = t3.id
    //         LEFT JOIN pet_list t4 ON t1.pet_id = t4.id
    //         LEFT JOIN player_list t5 ON t4.player_id = t5.id
    //         LEFT JOIN pet_rarity t6 ON t4.rarity_id = t6.id
            
    //         WHERE t4.player_id = ? AND t1.isCompleted = 0
    //     ;`
    //         const args = [player_id];
    //         const response = await this.query(sql, args);
    //         return response;
    //     } catch (error) {
    //         console.log(error)
    //         return false
    //     }
    // }

    // async getByUser(player_id) {
    //     try {
    //         const sql = `SELECT t1.*
    //         FROM farm_events t1

    //         LEFT JOIN farm_list t2 ON t1.id = t2.farm_id
    //         LEFT JOIN pet_list t3 ON t2.pet_id = t3.id
    //         LEFT JOIN player_list t4 ON t3.player_id = t4.id
        
            
    //         WHERE t4.player_id = ? AND t1.isCompleted = 0
    //     ;`
    //         const args = [player_id];
    //         const response = await this.query(sql, args);
    //         return response;
    //     } catch (error) {
    //         console.log(error)
    //         return false
    //     }
    // }






}

module.exports = Farm;