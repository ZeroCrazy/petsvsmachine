const Model = require("./model");



class Land extends Model {

    static table = 'land_list';
    rarity_id;
    floor;
    pets_max;


    async get() {
        try {
            const sql = `SELECT t1.id, t2.name AS rarity, t1.floor 
            FROM ${Land.table} t1
            LEFT JOIN land_rarity t2 ON t1.rarity_id = t2.id
            WHERE t1.rarity_id >1
             ;`
            const response = await this.query(sql);
            return response;
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async getUser(uid) {
        try {
            const sql = `SELECT t1.id, t3.name AS rarity, t1.floor, COUNT(t2.id) AS pets, t4.isActive
            FROM petsvsmachine.land_list t1
            LEFT JOIN petsvsmachine.farm_list t2 ON t1.id = t2.land_id
            LEFT JOIN petsvsmachine.land_rarity t3 ON t1.rarity_id = t3.id
            LEFT JOIN petsvsmachine.land_player t4 ON t1.id = t4.land_id
            WHERE (t4.player_id = 56 AND t2.isCompleted = 0 )  
            GROUP BY t2.land_id;`
            const args = [uid];
            const response = await this.query(sql, args);
            return response;
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async create() {
        try {
            const sql = `INSERT INTO ${Land.table} (floor, rarity_id) VALUES (?,  ?);`
            const args = [this.floor, this.rarity_id];
            const response = await this.query(sql, args);
            return response;
        } catch (error) {
            console.log(error)
            return false
        }
    }


    async petsFarming(uid) {
        try {
            const sql = `SELECT t1.land_id, COUNT(t1.id) AS isFarming, t2.floor
            FROM farm_list t1
            LEFT JOIN land_list t2 ON t1.land_id = t2.id
            WHERE t1.isCompleted = 0 AND t1.land_id = (
                SELECT land_id FROM land_player WHERE player_id = ? AND isActive = 1 LIMIT 1
            )
            GROUP BY land_id`
            const args = [uid];
            const response = await this.query(sql, args);
            if (response.length === 0) return { floor: 6, isFarming: 0 }
            return response[0];
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async floorLandActive(uid) {
        try {
            const sql = `SELECT t2.floor
            FROM land_player t1
            INNER JOIN land_list t2 ON t2.id = t1.land_id
            WHERE t1.isActive = 1 AND t1.player_id = ?;`
            const args = [uid];
            const response = await this.query(sql, args);
            return response[0];
        } catch (error) {
            console.log(error)
            return false
        }
    }





}

module.exports = Land;