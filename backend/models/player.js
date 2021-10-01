const Model = require("./model");
const PlayerResources = require('../models/playerResources');

class Player extends Model {

    table = this.tables.player;
    username;
    email;
    password;
    metamask_address;
    group;
    role;
    login_at;
    created_at;
    updated_at;

    async register() {
        const conn = await this.getConnection();
        try {
            conn.beginTransaction()
            const sql = `INSERT INTO ${this.table} (username, email, password) VALUES (?, ?, ?);`
            const args = [this.username, this.email, this.password];
            const response = await this.query(sql, args, conn);
            const id = response.insertId;
            const sql2 = `INSERT INTO ${PlayerResources.table} (player_id, coins, house, food, caress) VALUES (?, ?, ?, ?, ?);`
            const args2 = [id, 0, 0, 0, 0];
            const response2 = await this.query(sql2, args2, conn);
            const sql3 = `INSERT INTO land_player (land_id, player_id, isActive) VALUES (
           ( SELECT  t1.id FROM land_list t1 
            INNER JOIN land_rarity t2 ON t1.rarity_id = t2.id WHERE t2.id = 1 LIMIT 1), ?, 1);`
            const args3 = [id, 0, 0, 0, 0];
            const response3 = await this.query(sql3, args3, conn);
            conn.commit();
            return id

        } catch (error) {
            console.log(error)
            conn.rollback();
            return false
        } finally {
            conn.release();
        }

    }
    async registerMetamask() {
        const conn = await this.getConnection();
        try {
            conn.beginTransaction()
            const sql = `INSERT INTO ${this.table} (metamask_address) VALUES (?);`
            const args = [this.metamask_address];
            const response = await this.query(sql, args, conn);
            this.id = response.insertId;
            const sql2 = `INSERT INTO ${PlayerResources.table} (player_id, coins, house, food, caress) VALUES (?, ?, ?, ?, ?);`
            const args2 = [this.id, 0, 0, 0, 0];
            const response2 = await this.query(sql2, args2, conn);
            conn.commit();
            return true;
        } catch (error) {
            conn.rollback();
            return false
        } finally {
            conn.release();
        }
    }

    async existUsername() {
        try {
            const sql = `SELECT username FROM ${this.table} WHERE LOWER(username) = LOWER(?);`
            const args = [this.username];
            const response = await this.query(sql, args);
            return response;
        } catch (error) {
            return false
        }
    }
    async existEmail() {
        try {
            const sql = `SELECT email FROM ${this.table} WHERE LOWER(email) = LOWER(?);`
            const args = [this.email];
            const response = await this.query(sql, args);
            return response;
        } catch (error) {
            return false
        }
    }

    async login() {
        try {
            const sql = `SELECT * FROM ${this.table} WHERE email = ? LIMIT 1;`
            const args = [this.email];
            const response = await this.query(sql, args);
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
            const response = await this.query(sql, args);
            if (response.length == 0) return { ok: true, user: false };
            else return { ok: true, user: response[0] };
        } catch (error) {
            return { ok: false }
        }
    }

    async updateLogin(ip) {
        try {
            const sql = `UPDATE ${this.table} SET login_at = NOW() WHERE id = ?;`
            const args = [this.id];
            const response = await this.query(sql, args);
            const sql2 = `INSERT INTO ${this.tables.player_ip} (player_id, ip) VALUES (?, ?);`
            const args2 = [this.id, ip];
            const response2 = await this.query(sql2, args2);
            if (response && response2) return true;
            else return false;
        } catch (error) {
            return false
        }
    }

    async get() {
        try {
            const sql = `SELECT username, metamask_address FROM ${this.table} WHERE id = ? LIMIT 1;`
            const args = [this.id];
            const response = await this.query(sql, args);
            if (response && response.length > 0) return response[0];
            else return false;
        } catch (error) {
            return false
        }
    }


}

module.exports = Player;