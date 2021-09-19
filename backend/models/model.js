const DatabaseController = require("../controllers/database_controller");
const tables = require("../helpers/tables");

class Model {
    constructor() {
        this.db = DatabaseController.getInstance();
        this.tables = tables
    }
}

module.exports = Model;