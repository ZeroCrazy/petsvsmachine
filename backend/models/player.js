const Model = require("./model");

class Player extends Model {

    table = this.tables.player;
    id;
    username;
    email;
    password;
    metamask_address;
    ip;
    group;
    role;
    login_at;
    created_at;
    updated_at;

    async register() {
        try {
            const sql = `INSERT INTO ${this.table} (username, email, password, ip) VALUES (?, ?, ?, ?);`
            const args = [this.username, this.email, this.password, this.ip];
            const response = await this.db.queryAsync(sql, args);
            return response;
        } catch (error) {
            return false
        }
    }
    async registerMetamask() {
        try {
            const sql = `INSERT INTO ${this.table} (metamask_address, ip) VALUES (?, ?);`
        
            const args = [this.metamask_address, this.ip];
            const response = await this.db.queryAsync(sql, args);
            this.id = response.insertId;
            return true;
        } catch (error) {
            return false
        }
    }

    async existUsername() {
        try {
            const sql = `SELECT username FROM ${this.table} WHERE LOWER(username) = LOWER(?);`
            const args = [this.username];
            const response = await this.db.queryAsync(sql, args);
            return response;
        } catch (error) {
            return false
        }
    }
    async existEmail() {
        try {
            const sql = `SELECT email FROM ${this.table} WHERE LOWER(email) = LOWER(?);`
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

    async loginMetamask() {
        try {
            const sql = `SELECT * FROM ${this.table} WHERE metamask_address = ? LIMIT 1;`
            const args = [this.metamask_address];
            const response = await this.db.queryAsync(sql, args);
            if (response.length == 0) return { ok: true, user: false };
            else return { ok: true, user: response[0] };
        } catch (error) {
            return { ok: false }
        }
    }

    async updateLogin() {
        try {
            const sql = `UPDATE ${this.table} SET login_at = NOW() WHERE id = ?;`
            const args = [this.id];
            const response = await this.db.queryAsync(sql, args);
            if (response) return true;
            else return false;
        } catch (error) {
            return false
        }
    }


}

module.exports = Player;