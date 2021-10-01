const Model = require("./model");



class Farm extends Model {

    static table = 'farm_list';
    land_id;
    pet_id;
    isCompleted;

    async getByUser(player_id) {
        try {
            const sql = `SELECT t1.id, t1.land_id, t1.pet_id, t1.bones, t3.name AS land_rarity, t7.name AS event, t6.start_at, t6.finish_at, t1.start_at AS startFarm_at, t1.completed_at AS completedFarm_at, current_timestamp() AS stamp,
            t8.name AS pet_rarity, t4.image AS pet_image, t4.production, t4.hours
            FROM ${Farm.table} t1
        
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

    async getFarmingUser(player_id) {
        try {
            const sql = `SELECT t2.id, t3.name as rarity
            FROM ${Farm.table} t1
            LEFT JOIN pet_list t2 ON t1.pet_id = t2.id
            LEFT JOIN pet_rarity t3 ON t2.rarity_id = t3.id
            LEFT JOIN player_list t4 ON t2.player_id = t4.id
            WHERE t2.player_id = ? AND t1.isCompleted = 0
        ;`
            const args = [player_id];
            const response = await this.query(sql, args);
            return response;
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async getDetails(player_id) {
        try {
            const sql = `SELECT t1.id, t1.land_id, t1.pet_id, t1.bones, t3.name AS land_rarity, t3.pets_max, t7.name AS event, t6.start_at, t6.finish_at, t1.start_at AS startFarm_at, t1.completed_at AS completedFarm_at, current_timestamp() AS stamp,
            t8.name AS pet_rarity, t4.image AS pet_image, t4.production, t4.hours
            FROM ${Farm.table} t1
        
            LEFT JOIN land_list t2 ON t1.land_id = t2.id
            LEFT JOIN land_rarity t3 ON t2.rarity_id = t3.id
            LEFT JOIN pet_list t4 ON t1.pet_id = t4.id
            LEFT JOIN pet_rarity t8 ON t4.rarity_id = t8.id
            LEFT JOIN player_list t5 ON t4.player_id = t5.id
        
            LEFT JOIN farm_events t6 ON t1.id = t6.farm_id
            LEFT JOIN event_list t7 ON t7.id = t6.event_id
        
            WHERE t4.player_id = ? AND t1.id = ?
        ;`
            const args = [player_id, this.id];
            const response = await this.query(sql, args);
            return response;
        } catch (error) {
            console.log(error)
            return false
        }
    }


    async create(player_id, conn = false) {
        try {
            const sqlLand = `(SELECT land_id FROM land_player WHERE player_id = ? AND isActive = 1)`
            const sqlPet = `(SELECT hours FROM pet_list WHERE id = ?)`
            const sql = `INSERT INTO ${Farm.table} 
            (land_id, pet_id, isCompleted, start_at, completed_at )
            VALUES (${sqlLand}, ?, 0, CURRENT_TIMESTAMP(), ADDDATE(CURRENT_TIMESTAMP(), INTERVAL (${sqlPet}) hour));`
            const args = [player_id, this.pet_id, this.pet_id];
            const response = await this.query(sql, args, conn);
            return response;
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async isOwner(player_id) {
        try {
            const sql = `SELECT t1.* 
            FROM ${Farm.table} t1        
            INNER JOIN pet_list t2 ON t1.pet_id = t2.id
            WHERE t2.player_id = ? AND t1.id = ?
            ;`
            const args = [player_id, this.id];
            const response = await this.query(sql, args);
            return response;
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async haveHome(farm_id) {
        try {
            const sql = `SELECT id 
            FROM petsvsmachine.farm_events
            WHERE farm_id = ? AND event_id = 1 AND finish_at > current_timestamp()`
            const args = [farm_id];
            const response = await this.query(sql, args);
            return response;
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async useHome(farm_id) {
        try {
            const hours = `SELECT hours FROM shop_list WHERE id = 2`
            const sql = `INSERT INTO farm_events (farm_id, event_id, start_at, finish_at)
             VALUES (?, 1, CURRENT_TIMESTAMP(), ADDDATE(CURRENT_TIMESTAMP(), INTERVAL (${hours}) hour);`
            const args = [farm_id];
            const response = await this.query(sql, args);
            return response;
        } catch (error) {
            console.log(error)
            return false
        }
    }
    async haveFood(farm_id) {
        try {
            const sql = `SELECT id 
            FROM petsvsmachine.farm_events
            WHERE farm_id = ? AND event_id = 2 AND DATE_FORMAT(start_at, '%Y-%m-%d') = CURDATE() `
            const args = [farm_id];
            const response = await this.query(sql, args);
            return response;
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async useFood(farm_id) {
        try {
            const sql = `INSERT INTO farm_events (farm_id, event_id, start_at, finish_at)
             VALUES (?, 2, CURRENT_TIMESTAMP(), ADDDATE(CURRENT_TIMESTAMP(), INTERVAL 24 hour);`
            const args = [farm_id,];
            const response = await this.query(sql, args);
            return response;
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async useCaress(farm_id) {
        const conn = await this.getConnection();
        try {
            const sql = `UPDATE farm_events SET finish_at = CURRENT_TIMESTAMP() WHERE farm_id = ? AND event_id = 3 AND finish_at IS NULL`
            const args = [farm_id];
            const response = await this.query(sql, args, conn);
            const sql2 = `INSERT INTO farm_events (farm_id, event_id, start_at, finish_at)
            VALUES (?, 4, CURRENT_TIMESTAMP(), ADDDATE(CURRENT_TIMESTAMP(), INTERVAL 1 hour);`
            const args2 = [farm_id];
            const response2 = await this.query(sql2, args2, conn);
            conn.commit();
            return response;
        } catch (error) {
            conn.rollback();
            return false
        } finally {
            conn.release();
        }
    }

    async weatherEvent() {
        try {
            const sql = `
            INSERT INTO farm_events (farm_id, event_id, start_at)
            /*QUITO LOS QUE ESTAN ASUSTADOS*/
            SELECT a.farm_id, 3 AS event_id, CURRENT_TIMESTAMP() AS start_at FROM
            /*TODOS LOS PETS*/
            (
            SELECT t1.pet_id, rand() AS random, t1.id AS farm_id  
            FROM farm_list t1
            LEFT JOIN farm_events t2 ON t1.id = t2.farm_id
            WHERE t1.isCompleted = 0 
            GROUP BY t1.pet_id
            ) a
            LEFT JOIN
            /*PETS ASUSTADOS*/
            (
            SELECT t1.pet_id 
            FROM farm_list t1
            INNER JOIN farm_events t2 ON t1.id = t2.farm_id
            WHERE t1.isCompleted = 0 AND t2.event_id = 3 AND t2.finish_at IS NULL
            )b
            ON a.pet_id = b.pet_id
            WHERE b.pet_id IS NULL AND random > 0.8;
            `;

            const args = [];
            const response = await this.query(sql, args);
            return true;
        } catch (error) {
            return false
        }
    }





}

module.exports = Farm;