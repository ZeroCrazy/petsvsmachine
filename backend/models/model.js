const DatabaseController = require("../controllers/database_controller");
const tables = require("../helpers/tables");

class Model {
    constructor(db = null) {
        // this.db = DatabaseController.getInstance();
        this.db = db;
        this.tables = tables
    }

    getDB(){
        this.db = new DatabaseController();
    }

    closeDB(){
        this.db.closeDB()
    }
}

module.exports = Model;