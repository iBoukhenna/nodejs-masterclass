var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'pass',
    database : 'masterclass'
})

connection.connect()

module.exports = connection