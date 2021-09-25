const Model = require("./model");



class Shop extends Model {

    table = this.tables.shop;
    id;
    title;
    image;
    days;
    usages;
    description;
    cost;
    action;



    async get() {
        try {
            const sql = `SELECT id, title, image, days, usages, description, cost, action FROM ${this.table};`
            const response = await this.query(sql);
            return response;
        } catch (error) {
            return false
        }
    }





}

module.exports = Shop;