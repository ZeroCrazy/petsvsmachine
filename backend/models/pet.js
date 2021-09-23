const Model = require("./model");

class Pet extends Model {

    table = this.tables.pet;
    id;
    player_id;
    image;
    production;
    days;
    type;
    rarity;
    role;
    hp;
    attack;
    armor;
    speed;
    is_shop;
    is_open;
    open_at;


    async create() {
        try {
            this.getDB();
            const sql = `INSERT INTO ${this.table} (player_id, rarity, role, hp, attack, armor, speed) VALUES (?, ?, ?, ?, ?, ?, ?);`
            const args = [this.player_id, this.rarity, this.role, this.hp, this.attack, this.armor, this.speed];
            const response = await this.db.queryAsync(sql, args);
            return response.insertId;;
        } catch (error) {
            console.log(error)
            return false
        } finally {
            this.closeDB();
        }
    }



}

module.exports = Pet;