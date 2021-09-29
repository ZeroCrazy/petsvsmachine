const { query, getConn } = require("../db");
const tables = require("../helpers/tables");

class Model {

    tables = tables
    query = query
    getConnection = getConn


}

module.exports = Model;


