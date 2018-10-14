var mysql = require("mysql");
var connection;

if (process.env.JAWS_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

    connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "emily",
    database: "burgers_db"
  });

};

connection.connect();
module.exports = connection;
