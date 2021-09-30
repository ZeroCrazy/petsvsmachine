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
             ;`
            const response = await this.query(sql);
            return response;
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async create() {
        try {
            const sql = `INSERT INTO ${Land.table} (floor, rarity_id) VALUES (?,  ?);`
            const args = [this.floor,  this.rarity_id];
            const response = await this.query(sql, args);
            return response;
        } catch (error) {
            console.log(error)
            return false
        }
    }





}

module.exports = Land;