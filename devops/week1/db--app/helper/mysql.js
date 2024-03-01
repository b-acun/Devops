const mysql = require("mysql2");

const connection = mysql.createPool({
  connectionLimit: 100,
  host: "localhost",
  user: "root",
  password: "Buse14.03",
  database: "example_app",
});

module.exports = connection;
