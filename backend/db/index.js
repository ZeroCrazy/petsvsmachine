const mysql = require('mysql');
const pool = mysql.createPool({
  connectionLimit: 30,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});


const query = (sql, args, conn = null) => {
  return new Promise((resolve, reject) => {

    if (conn) {
      conn.query(sql, args, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      }
      )
    } else {
      pool.query(sql, args, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      })

    }

  })
}

const getConn = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((error, connection) => {
      if (error) {
        connection.rollback(() => {
          connection.release();
          //Failure
        });
        reject(error);
      } else {
        resolve(connection);
      }
    }
    )
  })
}



module.exports = {
  query,
  getConn
}