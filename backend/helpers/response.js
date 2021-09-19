const DatabaseController = require("../controllers/database_controller")


const response = (res, status, result) => {
    const db = DatabaseController.getInstance();
    db.closeDB();
    res.status(status).json(result)
}

module.exports = {
    response
}