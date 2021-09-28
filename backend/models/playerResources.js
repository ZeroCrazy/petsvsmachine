const Model = require("./model");



class PlayerResources extends Model {

    static table = 'player_resources';
    player_id;
    coins;
    house;
    food;
    cress;


    async get() {
        try {
            const sql = `SELECT coins, house, food, cress FROM ${PlayerResources.table} WHERE player_id = ?;`
            const args = [this.player_id];
            const response = await this.query(sql, args);
            return response[0];
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async useHouse(farm_id) {
        const conn = await this.getConnection();
        try {
            conn.beginTransaction()
            const sql = `UPDATE ${PlayerResources.table} SET house = house - 1 WHERE player_id = ?;`
            const args = [this.player_id];
            const response = await this.query(sql, args, conn);
            const hours = `SELECT hours FROM shop_list WHERE id = 2`
            const sql2 = `INSERT INTO farm_events 
            (farm_id, event_id, start_at, finish_at) VALUES
             (?, 1, CURRENT_TIMESTAMP(), ADDDATE(CURRENT_TIMESTAMP(), INTERVAL (${hours}) hour))
             ;`
            const args2 = [farm_id];
            const response2 = await this.query(sql2, args2, conn);
            conn.commit()
            return true;
        } catch (error) {
            console.log(error)
            conn.rollback();
            return false
        }
        finally {
            conn.release();
        }
    }

    async useFood(farm_id) {
        const conn = await this.getConnection();
        try {
            conn.beginTransaction()
            const sql = `UPDATE ${PlayerResources.table} SET food = food - 1 WHERE player_id = ?;`
            const args = [this.player_id];
            const response = await this.query(sql, args, conn);
            const sql2 = `INSERT INTO farm_events 
            (farm_id, event_id, start_at, finish_at) VALUES
             (?, 2, CURRENT_TIMESTAMP(), ADDDATE(CURRENT_TIMESTAMP(), INTERVAL (24) hour))
             ;`
            const args2 = [farm_id];
            const response2 = await this.query(sql2, args2, conn);
            conn.commit()
            return true;
        } catch (error) {
            console.log(error)
            conn.rollback();
            return false
        }
        finally {
            conn.release();
        }
    }

    async useCress(farm_id) {
        const conn = await this.getConnection();
        try {
            conn.beginTransaction()
            const sql = `UPDATE ${PlayerResources.table} SET cress = cress - 1 WHERE player_id = ?;`
            const args = [this.player_id];
            const response = await this.query(sql, args, conn);
            const sql2 = `UPDATE farm_events SET finish_at = CURRENT_TIMESTAMP() 
            WHERE farm_id = ? AND event_id = 3 AND finish_at IS NULL;`
            const args2 = [farm_id];
            const response2 = await this.query(sql2, args2, conn);
            conn.commit()
            return true;
        } catch (error) {
            console.log(error)
            conn.rollback();
            return false
        }
        finally {
            conn.release();
        }
    }







}

module.exports = PlayerResources;