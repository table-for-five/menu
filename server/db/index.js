
const mysql = require('mysql');

var connection = mysql.createConnection({
    host: '127.0.0.1',
    database: 'menu',
    user: 'root',
    password: '',
});

connection.connect();


module.exports = { connection: connection };