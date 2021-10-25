const Farm = require("./farm");
const Model = require("./model");
const PlayerResources = require("./playerResources");

class Pet extends Model {

    table = this.tables.pet;
    id;
    player_id;
    rarity_id;
    role_id;
    image;
    image_id;
    production;
    hours;
    type;
    hp;
    attack;
    armor;
    speed;
    is_shop;
    is_open;
    open_at;


    async create() {
        const conn = await this.getConnection();
        try {
            const sql = `INSERT INTO ${this.table} (image_id, player_id, rarity_id, role_id, hp, attack, armor, speed, production, hours, open_at) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ADDDATE(CURRENT_TIMESTAMP(), INTERVAL 24 hour));`
            const args = [this.image_id, this.player_id, this.rarity_id, this.role_id, this.hp, this.attack, this.armor, this.speed, this.production, this.hours];
            const response = await this.query(sql, args, conn);

            const sql2 = `UPDATE ${PlayerResources.table} SET egg = egg - 1 WHERE player_id = ?;`
            const args2 = [this.player_id];
            const response2 = await this.query(sql2, args2, conn);

            conn.commit();
            return response.insertId;;
        } catch (error) {
            conn.rollback();
            console.log(error)
            return false
        } finally {
            conn.release();
        }
    }

    async createShopPet(uid) {
        const conn = await this.getConnection();

        try {
            const sql = `INSERT INTO pet_list (rarity_id, image_id, production, hours, role_id, is_shop, player_id)
            SELECT rarity_id, image_id, production, hours, 5 AS role_id, 1 AS is_shop, ? AS player_id
            FROM petsvsmachine.pet_shop;`
            const args = [uid];
            const response = await this.query(sql, args);

            const sql2 = `UPDATE ${PlayerResources.table} SET pet = pet - 1 WHERE player_id = ${uid};`
            const args2 = [];
            const response2 = await this.query(sql2, args2);

            // Poner lo a farmear
            const farm = new Farm();
            farm.pet_id = response.insertId;
            const data = await farm.create(uid, conn);

            conn.commit();
            return true;
        } catch (error) {
            console.log(error)
            conn.rollback();
            return false
        } finally {
            conn.release();
        }
    }

    async owner() {
        try {
            const sql = `SELECT player_id FROM ${this.table} WHERE id = ?;`
            const args = [this.id];
            const response = await this.query(sql, args);
            return response;
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async getByPlayer() {
        try {
            const sql = `SELECT t1.id, t4.name AS image, t2.name AS rarity, t1.production, t1.hours, 
            CASE
            WHEN t3.isCompleted = 0 THEN 1 ELSE 0 
            END
            AS isFarming  
            FROM ${this.table} t1
            LEFT JOIN ${this.tables.rarity} t2 ON t1.rarity_id = t2.id
            LEFT JOIN farm_list t3 on t1.id = t3.pet_id
            LEFT JOIN pet_images t4 ON t1.image_id = t4.id
            WHERE t1.player_id = ? AND t1.is_shop = 0 AND t1.is_open = 1;`
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
            const sql = `SELECT t1.id, t1.player_id, t3.name AS image, t2.name AS rarity, t1.production, t1.hours,
            t1.hp, t1.attack, t1.armor, t1.speed, t1.is_shop, t1.is_open, t1.open_at 
            FROM ${this.table} t1
            LEFT JOIN ${this.tables.rarity} t2 ON t1.rarity_id = t2.id
            LEFT JOIN pet_images t3 ON t1.image_id = t3.id
            WHERE t1.id = ? AND t1.player_id = ?;`
            const args = [this.id, this.player_id];
            const response = await this.query(sql, args);
            return response;
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async getEggs() {
        try {
            const sql = `SELECT id, open_at, created_at
            FROM ${this.table} WHERE player_id = ? AND is_open = 0 AND is_shop = 0;`
            const args = [this.player_id];
            const response = await this.query(sql, args);
            return response;
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async getEgg() {
        try {
            const sql = `SELECT id, open_at, created_at
            FROM ${this.table} WHERE player_id = ? AND id = ?;`
            const args = [this.player_id, this.id];
            const response = await this.query(sql, args);
            return response;
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async openEgg() {
        try {
            const sql = `UPDATE ${this.table} SET is_open = 1 WHERE id = ?;`
            const args = [this.id];
            const response = await this.query(sql, args);
            return response;
        } catch (error) {
            console.log(error)
            return false
        }
    }




}

module.exports = Pet;