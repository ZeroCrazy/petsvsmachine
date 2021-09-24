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
            console.log(sql, this.player_id)
            const args = [this.player_id];
            const response = await this.query(sql, args);
            return response;
        } catch (error) {
            console.log(error)
            return false
        }
    }





}

module.exports = PlayerResources;