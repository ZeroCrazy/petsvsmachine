const mysql = require('mysql');
const pool = mysql.createPool({
  connectionLimit: 30,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});


const query = (sql, args) => {
  return new Promise((resolve, reject) => {
    pool.query(sql, args, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response);
      }
    }
    )
  })
}


module.exports = {
  query
}