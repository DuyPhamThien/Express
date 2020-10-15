var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "anhduy",
  database : "test"
});



module.exports = con ;