const { query } = require("../db");
const tables = require("../helpers/tables");

class Model {

    tables = tables
    query = query

}

module.exports = Model;