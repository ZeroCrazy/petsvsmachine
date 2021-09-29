const Model = require("./model");

class Pet extends Model {

    table = this.tables.pet;
    id;
    player_id;
    rarity_id;
    role_id;
    image;
    production;
    days;
    type;
    hp;
    attack;
    armor;
    speed;
    is_shop;
    is_open;
    open_at;


    async create() {
        try {
            const sql = `INSERT INTO ${this.table} (player_id, rarity_id, role_id, hp, attack, armor, speed, production, days) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);`
            const args = [this.player_id, this.rarity_id, this.role_id, this.hp, this.attack, this.armor, this.speed, this.production, this.days];
            const response = await this.query(sql, args);
            return response.insertId;;
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async getByPlayer() {
        try {
            const sql = `SELECT t1.id, t1.image, t2.name AS rarity, t1.production, t1.days 
            FROM ${this.table} t1
            LEFT JOIN ${this.tables.rarity} t2 ON t1.rarity_id = t2.id
            WHERE t1.player_id = ?;`
            const args = [this.player_id];
            const response = await this.query(sql, args);
            return response;
        } catch (error) {
            console.log(error)
            return false
        } 
    }

    async get() {
        try {
            const sql = `SELECT t1.id, t1.player_id, t1.image, t2.name AS rarity, t1.production, t1.days,
            t1.hp, t1.attack, t1.armor, t1.speed, t1.is_shop, t1.is_open, t1.open_at 
            FROM ${this.table} t1
            LEFT JOIN ${this.tables.rarity} t2 ON t1.rarity_id = t2.id
            WHERE t1.id = ? AND t1.player_id = ?;`
            const args = [this.id, this.player_id];
            const response = await this.query(sql, args);
            return response;
        } catch (error) {
            console.log(error)
            return false
        } 
    }



}

module.exports = Pet;