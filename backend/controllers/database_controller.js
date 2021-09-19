const mysql = require('mysql');

class DatabaseController {

    static instance = null;

    constructor(conn = null) {
        if (conn) this.conn = conn;
        else this.conn = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
        });
    }

    static getInstance() {
        if (!DatabaseController.instance) DatabaseController.instance = new DatabaseController();
        return DatabaseController.instance
    }

    getDB() {
        this.conn.connect();
    }

    closeDB() {
        this.conn.end()

    }

    beginTransaction(){
        this.conn.beginTransaction()
    }

    queryAsync(sql, args) {
        return new Promise((resolve, reject) => {
            this.conn.query(sql, args, (error, response) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(response);
                }
            }
            )
        })
    }
}


module.exports = DatabaseController