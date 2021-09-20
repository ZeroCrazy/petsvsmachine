const Model = require("./model");

class Player extends Model {

    table = this.tables.player;
    id;
    email;
    password;
    wallet_metamask;
    ip;
    group;
    role;
    login_at;
    created_at;
    updated_at;

    async register() {
        try {
            const sql = `INSERT INTO ${this.table} (email, password, ip) VALUES (?, ?, ?);`
            const args = [this.email, this.password, this.ip];
            const response = await this.db.queryAsync(sql, args);
            return response;
        } catch (error) {
            return false
        }
    }

    async exist() {
        try {
            const sql = `SELECT email FROM ${this.table} WHERE email = ?;`
            const args = [this.email];
            const response = await this.db.queryAsync(sql, args);
            return response;
        } catch (error) {
            return false
        }
    }

    async login() {
        try {
            const sql = `SELECT * FROM ${this.table} WHERE email = ? LIMIT 1;`
            const args = [this.email];
            const response = await this.db.queryAsync(sql, args);
            if (response.length == 0) return false;
            else return response[0];
        } catch (error) {
            return false
        }
    }


}

module.exports = Player;